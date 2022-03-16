// GIVEN
/*console.log(example);
var example = "I'm the example!";*/

// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// ES6
/*console.log(example);
let example = "I'm the example!";*/

/* 1 */
/*console.log(hello);
var hello = 'world';*/

// AFTER HOISTING BY THE INTERPRETER
/*
var hello;
console.log(hello); // logs undefined
hello = 'world';*/

// ES6
/*
console.log(hello);
let hello = 'world';*/

/* 2 */
/*var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}*/

// AFTER HOISTING BY THE INTERPRETER
/*var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle); // logs magnet
}
needle = 'haystack';
test();*/

// ES6
/*
let needle = 'haystack';
test();
function test(){
    let needle = 'magnet';
    console.log(needle);
}*/

/* 3 */
/*var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);*/

// AFTER HOISTING BY THE INTERPRETER
/*var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan); // logs only okay
}
brendan = 'super cool';
console.log(brendan); // logs super cool*/

// ES6
/*let brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);*/

/* 4 */
/*var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}*/

// AFTER HOISTING BY THE INTERPRETER
/*var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food); // logs half-chicken
    food = 'gone';
}
food = 'chicken';
console.log(food); // logs chicken
eat();*/

// ES6
/*
let food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    let food = 'gone';
}*/

/* 5 */
/*mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);*/

// AFTER HOISTING BY THE INTERPRETER
/*var mean;
mean(); // Error de tipo: mean no es una función.
mean = function() {
    var food;
    food = "chicken";
    console.log(food); // logs chicken
    food = "fish";
    console.log(food); // logs fish
}
console.log(food); // Error de referencia: food no está definido.
console.log(food);*/

// ES6
/*mean();
console.log(food);
const mean = function() {
    food = "chicken";
    console.log(food);
    let food = "fish";
    console.log(food);
}
console.log(food);*/

/* 6 */
/*console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);*/

// AFTER HOISTING BY THE INTERPRETER
/*var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); // logs rock
    genre = "r&b";
    console.log(genre); // logs r&b
}
console.log(genre); // logs undefined
genre = "disco";
rewind();
console.log(genre); // logs disco*/

// ES6
/*console.log(genre);
let genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    let genre = "r&b";
    console.log(genre);
}
console.log(genre);*/

/* 7 */
/*dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);*/

// AFTER HOISTING BY THE INTERPRETER
/*function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo); // logs seattle
    dojo = "burbank";
    console.log(dojo); // logs burbank
}
dojo = "san jose";
console.log(dojo); // logs san jose
learn();
console.log(dojo); // logs san jose*/

// ES6
/*
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    let dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);*/

/* 8 */
/*console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}*/

// AFTER HOISTING BY THE INTERPRETER
/*function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // Error de tipo: Asignación a una variable constante.
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));*/

// ES6
/*
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}*/
