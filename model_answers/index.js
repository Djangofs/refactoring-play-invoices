const invoices = require("../data/invoices.json");
const plays = require("..data/plays.json");
const statement = require("./1_starting_point");

console.log(statement(invoices[0], plays));