import Person from "./module/DataObject.js";

// IIFE - Immediately Invoced Function Expression
(() => {
    console.log('fired!');

    console.log(Person);

    debugger;
})();