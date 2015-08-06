var assert = require('assert');
var AudioKeys = require('../dist/audiokeys.js');

describe('Events', function() {

  describe('methods', function(){
    it('should have `up` and `down` and `_trigger` methods', function() {
      var keyboard = new AudioKeys();

      assert(keyboard.up);
      assert(keyboard.down);
      assert(keyboard._trigger);
    });

    it('should accept listeners via `up` and `down`', function() {
      var keyboard = new AudioKeys();

      var handler = function() {
        return;
      };

      keyboard.down(handler);
      assert.strictEqual(keyboard._listeners.down[0], handler);

      keyboard.up(handler);
      assert.strictEqual(keyboard._listeners.up[0], handler);
    });

    it('should fire down listeners on `_trigger("down")`', function() {
      var keyboard = new AudioKeys();

      var flag = false;
      function switchFlag() { flag = true; }

      keyboard.down(switchFlag);
      keyboard._trigger('down');

      assert.equal(flag, true);
    });

    it('should fire up listeners on `_trigger("up")`', function() {
      var keyboard = new AudioKeys();

      var flag = false;
      function switchFlag() { flag = true; }

      keyboard.up(switchFlag);
      keyboard._trigger('up');

      assert.equal(flag, true);
    });
  });

});