# Validateer

![enter image description here](https://res.cloudinary.com/ibk-code/image/upload/v1595932753/validateer_lln36r.png)

## About

Validateer, is a small package that helps you work on form and string validation. You can also use the provided methods for general validation. This library is used on a string. coerce your input to string to prevent error.

## Features

- A very light-weight library
- Fully tested on all end
- Zero dependencies

## Installation

**Using NPM**

> npm i validateer

**Using CDN**

> `<script src="https://unpkg.com/validateer"></script>`

## Usage

So to use the various methods on validateer. follow the process.

**CDN**

A global variable 'vd' is created to be equal to Validateer. So this makes it easy to call validateer

> vd("hello");
> //return object Validateer.init {elem: "ibk", message: " "}

**Import**
Using the ES6 import with validateer.

> import { vd } from 'validateer'

or

> let vd = require(validateer).vd

## Methods

**validateEmail** - A method to validate an email.
**Parameters** :
Pattern - An optional field that takes a regular expression to validate email.
callback - An optional function that takes the returned object as a parameter

> vd("mysite@ourearth.com").validateEmail();
> //return {elem: "mysite@ourearth.com", message: true/false}
> or
> vd("mysite@ourearth.com").validateEmail(/^\w+([\.-]?\w+)_@\w+([\.-]?\w+)_(\.\w{2,3})+\$/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "mysite@ourearth.com", message: true/false}

**validateEmpty** - A method to validate if a string is empty.
**Parameter** :
callback - An optional function that takes the returned object as a parameter

> vd("").validateEmpty();
> //return {elem: "", message: true/false}
> or
> vd("").validateEmpty((obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "", message: true/false}

**validateLetters** - A method to validate if a string contains only letters.
**Parameters** :
Pattern - An optional field that takes a regular expression to validate only alphabet.
callback - An optional function that takes the returned object as a parameter

> vd("Hello").validateLetters();
> //return {elem: "Hello", message: true/false}
> or
> vd("Hello").validateLetters(/^[a-z]+\$/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "Hello", message: true/false}

**validateNumber** - A method to validate if a string contains only numbers.
**Parameters** :
Pattern - An optional field that takes a regular expression to validate only numbers.
callback - An optional function that takes the returned object as a parameter

> vd("1234").validateNumber();
> //return {elem: "1234", message: true/false}
> or
> vd("12.5").validateNumber(/^[0-9]\*\.[0-9]+\$/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "12.5", message: true/false}

**validateAlphaNumeric** - A method to validate if a string contains alphabet and numbers.
**Parameters** :
Pattern - An optional field that takes a regular expression to validate for alphabet and numbers.
callback - An optional function that takes the returned object as a parameter

> vd("hello67").validateAlphaNumeric();
> //return {elem: "hello67", message: true/false}
> or
> vd("hello67").validateAlphaNumeric(/^[0-9a-z]\*\$/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "hello67", message: true/false}

**validateLength** - A method to validate if a string length is greater than a number and lesser than a number.
**Parameters** :
minlength - A compulsory field of what the minimum length of the string should be.
maxlength - A compulsory field of what the maximum length of the string should be.
callback - An optional function that takes the returned object as a parameter

> vd("Hello World").validateLength(5, 12);
> //return {elem: "Hello World", message: true/false}
> or
> vd("Hello World").validateLength(5, 12, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "Hello World", message: true/false}

**validateDate** - A method to validate if a date matches your pattern or default pattern.
**Parameters** :
Pattern - An optional field that takes a regular expression to validate the date format.
callback - An optional function that takes the returned object as a parameter

> vd("12-9-2020").validateDate();
> //return {elem: "12-9-2020", message: true/false}
> or
> vd("09/27/2020").validateDate(/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}\$/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "09/27/2020", message: true/false}

**validatePhoneNumber** - A method to validate if phone number passes the regex test for phone number.
**Parameters** :
Pattern - An optional field to replace default pattern which takes a regular expression to validate the phone number.
callback - An optional function that takes the returned object as a parameter

> vd("+1 0656 6788").validatePhoneNumber();
> //return {elem: "+1 0656 6788", message: true/false}
> or
> vd("2347897899").validatePhoneNumber(/^\d{10}\$/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "2347897899", message: true/false}

**validatePassword** - A method to validate if password passes the regex test for a password.
**Parameters** :
Pattern - An optional field to replace default pattern which takes a regular expression to validate the password.
callback - An optional function that takes the returned object as a parameter.

> vd("hello11").validatePassword();
> //return {elem: "hello11", message: true/false}
> or
> vd("hello11").validatePassword(/^[A-Za-z]\w{7,14}\$/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "hello11", message: true/false}

**validateUrl** - A method to validate if passed url passes the regex test for url.
**Parameters** :
Pattern - An optional field to replace default pattern which takes a regular expression to validate the url.
callback - An optional function that takes the returned object as a parameter.

> vd("http://www.example.com").validateUrl();
> //return {elem: "http://www.example.com", message: true/false}
> or
> vd("http://www.example.com").validateUrl(/(http|https):\/\/(\w+:{0,1}\w\*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/, (obj) => {
> console.log(obj.elem + " " + obj.message)
> });
> //return {elem: "http://www.example.com", message: true/false}

MIT © helloibk · GitHub @[ibk-code](https://github.com/ibk-code) >
