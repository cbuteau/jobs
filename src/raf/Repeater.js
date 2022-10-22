define('src/raf/Repeater', [
    'src/raf/TimeStamp'
], function(TimeStamp) {

  // INTENT
  // I have always loved the RAF requestAnimationFrame system.
  // and I thought it should be wrapped simply for EVERYONE...If you are using this code...
  // I am happy.
  // You are welcome to steal this snippet and eveolve it in your own project.
  // But once you copy paste it is yours.


  const DEFAULT_OPTIONS = {
    forgetTry: false,
    notContinue: false
  };

  const SPANS = {
    ONE: 100,
    TWO: 200,
    TWO_FIFTY: 250
  };

  function createClosure(repeaterPtr, callback, options) {
    return function() {
      var continueRun;
      if (options.forgetTry) {
        // Save complexity without a try catch when solidified.
        continueRun = callback(options);
      } else {
        try {
          continueRun = callback(options);
        } catch (e) {
          console.log(options.name);
          console.error(e);
          continueRun = true;
          if (options.notContinue) {
            continueRun = false;
          }
        }
      }
      if (continueRun) {
        repeaterPtr.start();
      } else {
        repeaterPtr._isRunning = false;
      }
    };
  }

  function Repeater(options, callback) {
    let tempOpts = options ? options : {};
    this.options = Object.assign(tempOpts, DEFAULT_OPTIONS);
    this.callback = createClosure(this, callback, this.options);
    this.start();
  }

  Repeater.prototype = {
    start: function() {
        this.token = requestAnimationFrame(this.callback);
        this._isRunning = true;
    },

    pause: function() {
        cancelAnimationFrame(this.token);
        this._isRunning =false;
    },
    
    ts: function(span) {
        return new TimeStamp(span);
    }
  }

  return Repeater;
});