﻿// Modules/Model/Employee/fullName.jsvar fullName = module.exports = new Attribute('calculated', 'string');fullName.onGet = function() {    var        result;    result = this.firstName ? [this.firstName] : [];    if (this.lastName) {        result.push(this.lastName);    }    return result.join(' ');};fullName.onSet = function() {	// Add your code here;};fullName.onSort = function() {    return (ascending ? "firstName, lastName" : "firstName desc, lastName desc");};fullName.onQuery = function(compOperator, valueToCompare) {    return "firstName " + compOperator + valueToCompare + " || " + "lastName " + compOperator + valueToCompare;};