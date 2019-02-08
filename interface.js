
// open parenthese grabbing from html
// . is for class
// # id

$(document).ready(function(){

var thermostat = new Thermostat();

$("#current_temp").text(thermostat.getCurrentTemperature());





















  });

//
// $(document).ready(function() {
//
//   var thermostat = new Thermostat();
//   $('#temperature').text(thermostat.temperature);
// })
