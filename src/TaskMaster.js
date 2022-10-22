define('TaskMaster', [
    'src/LongPromise',
    'src/raf/Repeater'
], function(LongPromise, Repeater) {

    // * INTENT 
    // * raf based execution of tasks.

    function TaskMaster() {
        this._raf = new Repeater(this._think.bind(this));
    }

    TaskMaster.prototype = {
        queue: function(work) {
            // ! Need 1 parameter to pass into function.
            if (!work.execute || work.execute.length < 1) {
                throw new Error('Need execute function on Task work')
            }

            let promise = new LongPromise();
            let satchel = {
                work: work,
                promise: promise
            }

            this._queue.push(satchel);
            this._raf.start();
        },

        _think: function() {
            let satchel = this._queue.pop();
            try {
                satchel.work.execute(satchel.promise);
            } catch (e) {
                console.log(e);
                satchel.promise.reject({
                    errType: 'exception',
                    error: e
                });
            }
        }
    }

    let instance;
    return !instance ? instance = new TaskMaster() : instance;
})