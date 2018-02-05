Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end > interval.start && this.start < interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
    return this.start < interval.start && this.end > interval.end;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
    var tabRetour = [];
    if(this.overlaps(interval))
    {
        var intervalle = new Interval(this.start,interval.end);
        tabRetour.push(intervalle);
        return tabRetour;
    }
    else
    {
        tabRetour.push(this);
        tabRetour.push(interval);
        return tabRetour;
    }
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
    var tabRetour = [];
    if(this.overlaps(interval))
    {
        var intervalle = new Interval(interval.start,this.end);
        tabRetour.push(intervalle);
        return tabRetour;
    }
    else
    {
        throw 'No intersection';
    }
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
    var tabRetour = [];
    if(this.overlaps(interval))
    {
        var intervalle = new Interval(this.start,interval.start);
        tabRetour.push(intervalle);
        return tabRetour;
    }
    else
    {
        tabRetour.push(this);
        return tabRetour;
    }
};



