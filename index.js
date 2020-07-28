// Validateer Javascript Library v1.0.6

// Released under the MIT license
// Date: 2020-07-17

let Validateer = function (elem) {
  return new Validateer.init(elem);
};

Validateer.init = function (elem) {
  let self = this;
  self.elem = elem || "";
  self.message = " ";
};

Validateer.prototype = {
  validateEmail: function (pattern, callback) {
    // set the email pattern validation
    //eslint-disable-next-line
    pattern = pattern || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // verify if email is valid with pattern
    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  // method to check if field is empty
  validateEmpty: function (callback) {
    if (this.elem.length <= 0) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  // method to check if elem are letters
  validateLetters: function (pattern, callback) {
    pattern = pattern || /^[A-Za-z]+$/;

    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  validateNumber: function (pattern, callback) {
    pattern = pattern || /^[0-9]+$/;

    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  validateAlphaNumeric: function (pattern, callback) {
    pattern = pattern || /^[a-z0-9A-z]+$/;

    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  validateLength: function (minlength, maxlength, callback) {
    if (this.elem.length >= minlength && this.elem.length <= maxlength) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  validateDate: function (pattern, callback) {
    pattern =
      //eslint-disable-next-line
      pattern || /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  validatePhoneNumber: function (pattern, callback) {
    pattern = pattern = /^\+?([0-9]){1,3}[-. ]?([0-9]){3,5}[-. ]?([0-9]){3,5}/;

    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  validatePassword: function (pattern, callback) {
    pattern = pattern || /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },

  validateUrl: function (pattern, callback) {
    pattern =
      pattern ||
      /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (this.elem.match(pattern)) {
      this.message = true;
    } else {
      this.message = false;
    }

    if (callback !== undefined) {
      callback(this);
    }

    return this;
  },
};
Validateer.init.prototype = Validateer.prototype;

if (typeof exports != "undefined") {
  exports.vd = Validateer;
} else {
  if (this.Validateer === undefined) {
    this.Validateer = Validateer;
    if (this.Validateer !== undefined && this.vd === undefined) {
      this.vd = Validateer;
    }
  }
}
