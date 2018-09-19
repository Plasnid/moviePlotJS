//characters have names, allegiances, and say hello!
function Character(characterName){
    console.log("a new character has been made");
    this.cName = characterName;
    console.log(`my characters name is ${this.cName}`);
};
Character.prototype.sayHi = function(){
    console.log(`hi!  my name is ${this.cName}`);
}
Character.prototype.setAllegiance = function(allegiance){
    this.allegiance = allegiance;
}

/*
droids are characters
-they have names
-they have allegiances
-they also speak bleepbloop!
*/
function Droid(droidName){
    console.log(`we have a new droid ${droidName}`);
    Character.call(this, droidName);
}
Droid.prototype = Object.create(Character.prototype);
Droid.prototype.speakBleepBloop = function(){
    console.log(`${this.cName} says bleep bloop Weeeeeeeeee! Blort Bleep!`);
}


//make a droid called R2D2
let R2D2 = new Droid("R2D2");
R2D2.setAllegiance("Rebellion");
console.log(`is this character a droid? ${R2D2 instanceof Droid}`);
console.log(`R2D2 is part of the ${R2D2.allegiance}`);
R2D2.sayHi();
R2D2.speakBleepBloop();

//humanoids are characters
function Humanoid(humanoidName, species){
    console.log(`we have a new humanoid called ${humanoidName}`);
    Character.call(this, humanoidName);
    this.species = species;
}
Humanoid.prototype = Object.create(Character.prototype);
Humanoid.prototype.whatSpecies = function(){
    console.log(`My name is ${this.cName} and I am ${this.species}`);
}
//lets make Lando!
let Lando = new Humanoid("Lando", "Human");
//lets give lando a job, make it a dot property of lando
Lando.job = "Mayor of Cloud City";
Lando.sayHi();
console.log(Lando.job);
Lando.whatSpecies();

//now lets make Chewbacca!
let Chewbacca = new Humanoid("Chewbacca", "Wookie");
Chewbacca.sayHi = function(){
    console.log("aaauuugh huuuaaaaarrrg!");
}
Chewbacca.sayHi();
Chewbacca.whatSpecies();

/*
finally lets make a force user.  A force user extends humanoid
they get a name, species, forceSide(light or dark)
their prototype should include functions for
-use lightsaber
-massive jump
-force throwing
*/

function ForceUser(name, species, forceSide){
    Humanoid.call(this, name, species);
    this.forceSide = forceSide;
    console.log(`we have a new force user called ${this.cName} who is a ${this.species} and is on the ${this.forceSide} of the force!`);
}
ForceUser.prototype = Object.create(Humanoid.prototype);
ForceUser.prototype.useLightSaber = function(){
    console.log(`${this.cName} is chopping stuff with a lightsaber!`);
}
ForceUser.prototype.massiveJump = function(){
    console.log(`${this.cName} is jumping high in the air!`);
}
ForceUser.prototype.forceThrow = function(item){
    console.log(`${this.cName} is throwing ${item} at you, using the force!`);
}
let Zarcon = new ForceUser("Zarcon", "Squirrel", "Dark");
Zarcon.sayHi();
Zarcon.whatSpecies();
Zarcon.useLightSaber();
Zarcon.massiveJump();
Zarcon.forceThrow("acorns");