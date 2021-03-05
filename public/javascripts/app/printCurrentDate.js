
// Module that requires Luxon and prints the current formatted date to the console

// `require` parameter ensures that we can use the config established in common.js

define(function (require) {

    let lux = require("l/luxon");

    let curDateHeader = document.createElement("h1");
    const lastElement = document.querySelector("body");

    curDateHeader.innerHTML = "Luxon Year: " + lux.DateTime.now().c.year;

    lastElement.appendChild(curDateHeader);

});