"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumIntoHyperspace();
var falcon = new starfighters_1.MillenniumFalcon();
falcon.jumIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
// //variaveis e tipos
// let message: string = "Help me, Obi-Wan Kenobi. Yo're my only hope!"
// console.log(message)
// let episode: number = 4
// console.log("This is episode " + 4)
// episode = episode + 1
// console.log("Next episode is " + episode);
// let favoriteDroid: string
// favoriteDroid = 'BB-8'
// console.log("My favorite droid is " + favoriteDroid);
// //functions e arrow functions
// let isEnoughToBeatMF = function (parsecs: number) : boolean {
//     return parsecs < 12
// }
// let distance = 10
// console.log(`Is ${distance} parsecs enough to beat MIllennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`);//TEMPLATE STRING
// let call = (name: string) => console.log(`Do you copy, ${name}?`); 
// call('R2');
// function inc (speed: number, inc: number = 1) : number {
//     return speed + inc;
// }
// console.log(`inc (5,1) = ${inc(5,1)}`);
// console.log(`inc (5) = ${inc(5)}`); 
