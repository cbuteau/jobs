
function Work() {

}

Work.prototype = {
    setOptions: function(options) {
        this.options = options;
        this._id = this.options.id;
    },

    setupRequireJS: function(data) {
        try {
            importScripts(data.requireJSFullPath);

        } catch(e) {
            
        }


    },

    invoke: function(data) {
        switch (data.msg) {
            case 2:
                break;
        }
    }
}