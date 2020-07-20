// Validater Javascript Library v1.0.0

// Copyright JS Foundation and other contributors
// Released under the MIT license
// Date: 2020-07-17

(function (global, factory) {
  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get Validater.
    module.exports.validater = factory(global);
  } else {
    factory(global);
  }
})(window, function (global) {
  let Validater = function () {
    return new Validater.init();
  };

  Validater.prototype = {
    validateEmail: function (pattern, callback) {
      // set the email pattern validation
      //eslint-disable-next-line
      pattern = pattern || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      // verify if email is valid with pattern
      if (this.elem.value.match(pattern)) {
        this.message = "email is valid";
      } else {
        this.message = "email is invalid";
      }

      if (callback !== undefined) {
        callback(pattern);
      }

      return this;
    },
  };

  Validater.init = function (elem, event) {
    let self = this;
    self.elem = elem || "";
    self.event = event || "";
    self.message = " ";
  };

  if (global.Validater === undefined) {
    global.Validater = Validater;
    if (global.Validater !== undefined && global.vd === undefined) {
      global.vd = Validater;
    }
  }

  Validater.init.prototype = Validater.prototype;
});
