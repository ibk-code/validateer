describe("Elem", function () {
  var vd = require("../../index");
  // var Song = require('../../lib/jasmine_examples/Song');

  // beforeEach(function () {
  //   Validater();
  // });

  // it("pass the", function () {
  //   let elem = vd({ value: "my.ownsite@ourearth.org" }, "click");
  //   console.log(this);
  //   let obj = {
  //     elem: { value: "my.ownsite@ourearth.org" },
  //     event: "click",
  //     message: "email is valid",
  //   };
  //   expect(elem.validateEmail()).toEqual(obj);
  // });

  // describe("field is empty", function () {
  //   it("test for empty field", function () {
  //     let elem = vd({ value: "" }, "blur");

  //     let obj = {
  //       elem: { value: "" },
  //       event: "blur",
  //       message: true,
  //     };

  //     expect(
  //       elem.validateEmpty((obj) => {
  //         console.log(obj.event);
  //       })
  //     ).toEqual(obj);
  //   });
  // });

  // describe("All charactes are letter", function () {
  //   it("no fields character is a number", function () {
  //     let elem = vd({ value: "Hello" }, "blur");

  //     let obj = {
  //       elem: { value: "Hello" },
  //       event: "blur",
  //       message: true,
  //     };

  //     expect(elem.validateLetters()).toEqual(obj);
  //   });
  // });

  describe("All characters are numbers", function () {
    it("all characters should be number", function () {
      let elem = vd({ value: "12345" }, "click");

      let obj = {
        elem: { value: "12345" },
        event: "click",
        message: true,
      };

      expect(elem.validateNumber()).toEqual(obj);
    });
  });

  describe("All characters are alphabet and numbers", function () {
    it("all characters should be number and alphabet", function () {
      let elem = vd({ value: "125hiHowo" }, "click");

      let obj = {
        elem: { value: "125hiHowo" },
        event: "click",
        message: true,
      };

      expect(elem.validateAlphaNumeric()).toEqual(obj);
    });
  });

  describe("Length tallys", function () {
    it("Length is equal", function () {
      let elem = vd({ value: "boy" }, "click");

      let obj = {
        elem: { value: "boy" },
        event: "click",
        message: true,
      };

      expect(elem.validateLength(3, 8)).toEqual(obj);
    });
  });

  describe("Check for date format", function () {
    it("date format is valid", function () {
      let elem = vd({ value: "09/27/2020" }, "click");

      let obj = {
        elem: { value: "09/27/2020" },
        event: "click",
        message: true,
      };

      expect(elem.validateDate()).toEqual(obj);
    });
  });

  describe("Phone number validation", function () {
    it("phone number validation", function () {
      let elem = vd({ value: "+234.80914.65463" }, "click");

      let obj = {
        elem: { value: "+234.80914.65463" },
        event: "click",
        message: true,
      };

      expect(elem.validatePhoneNumber()).toEqual(obj);
    });
  });

  describe("Password validation", function () {
    it("validate if password meet requirement", function () {
      let elem = vd({ value: "boy@12" }, "blur");

      let obj = {
        elem: { value: "boy@12" },
        event: "blur",
        message: true,
      };

      expect(elem.validatePassword(5)).toEqual(obj);
    });
  });

  describe("Url validation", function () {
    it("validate if url meet requirement", function () {
      let elem = vd({ value: "www.allyprints.com" }, "blur");

      let obj = {
        elem: { value: "www.allyprints.com" },
        event: "blur",
        message: true,
      };

      expect(elem.validateUrl()).toEqual(obj);
    });
  });
});
