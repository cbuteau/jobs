define('TaskMaster', [], function() {

    // INTENT raf based execution of tasks.

    function TaskMaster() {}

    TaskMaster.prototype = {

    }

    let instance;
    return !instance ? instance = new TaskMaster() : instance;
})