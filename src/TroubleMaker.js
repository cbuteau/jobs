define('src/TroubleMaker', [], function() {

    function TroubleMaker() {
        this._workers = {};
    }

    TroubleMaker.prototype = {
        create: function(parameters) {

        },

        setup: function(parameters) {
            
        }
    }
    
    let instance;
    return !instance ? instance = new TroubleMaker() : instance;
});