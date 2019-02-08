
// open parenthese grabbing from html
// . is for class
// # id

$(document).ready(function(){

var thermostat = new Thermostat();

$("#current_temp").text(thermostat.getCurrentTemperature());

$("#up").click(function(){
thermostat.up();
$("#current_temp").text(thermostat.getCurrentTemperature());
});

$("#down").click(function(){
thermostat.down();
$("#current_temp").text(thermostat.getCurrentTemperature());
});

$("#reset").click(function(){
thermostat.reset();
$("#current_temp").text(thermostat.getCurrentTemperature());
});















  });

//
// $(document).ready(function() {
//
//   var thermostat = new Thermostat();
//   $('#temperature').text(thermostat.temperature);
// })
