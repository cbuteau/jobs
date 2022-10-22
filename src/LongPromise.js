define('src/LongPromise', [], function() {

    function LongPromise() {
        let ptr = this;
        this.promise = new Promise(function(resolve, reject) {
            ptr.resolve = resolve;
            ptr.reject = reject;
        })
    }

    return LongPromise;
});