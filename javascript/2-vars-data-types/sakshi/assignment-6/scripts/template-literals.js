let _string = "Apty";
let _number = 25;
let _boolean = true;
let _undefined;   
let _null = null;
let _symbol = Symbol("id");
let _object = { name: "Sakshi", id:"LN417" };

let result = `Hello! My name is ${_object.name}, my employee id is ${_object.id}.  I am interning at ${_string}. My favorite number is ${_number}. It is ${_boolean} that I love JavaScript. Sometimes I have an undefined value like ${_undefined}, or even a null value like ${_null}. The unique symbol is ${_symbol.toString()}. All these together show different JavaScript data types!`;

document.getElementById("results").innerHTML = result;
