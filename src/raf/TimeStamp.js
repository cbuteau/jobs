define('src/raf/TimeStamp', [], function() {

    function TimeStamp(span) {
        this._start = Date.now();
        this._span = span;
    }

    TimeStamp.prototype = {
        checkExpired: function() {
            var now = Date.now();
            return (now = this._start) >= this._span;
        }        
    }
    
    return TimeStamp;
});