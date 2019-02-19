const invoices = require("./invoices.json");
const plays = require("./plays.json");
const statement = require("./1_starting_point");

console.log(statement(invoices[0], plays));