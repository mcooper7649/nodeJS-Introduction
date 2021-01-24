const superheroes = require('superheroes');
const supervillains = require('supervillains');
const suppervillains = require('supervillains');

var mySuperHeroName = superheroes.random();  //superheroes calls the module while random is a default method available
var mySuperVillainName = supervillains.random();


console.log(mySuperHeroName + " will fight " + mySuperVillainName); // log our superHeroName