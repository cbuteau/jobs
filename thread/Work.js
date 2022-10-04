
function Work() {

}

Work.prototype = {
    setOptions: function(options) {
        this.options = options;
        this._id = this.options.id;
    },

    invoke: function(data) {
        switch (data.msg) {
            case 2:
                break;
        }
    }
}