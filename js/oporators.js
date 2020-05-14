// oporators

/*
    oporators in javascript

    assignments - used to assign value to variable Ex. =, +=, var x = 5, /=, %=, -=, ect.
    arithmattic - used to perform arithmatic on numbers. +, -, *, /, %, ++, --
    string oporators - used to concatenate strings, +, +=
    comparison - used to compare the difference between variable values. Ex. <, >, <=, >=, ==, ===, !=, !==,?
    logical - used to compute logical booleans Ex. !, &&, ||, 
    bitwise - &, ~, ^, <<, >>, >>>
*/

/*
var selectedfruit;

function eatFruit(fruit) {
    if(fruit == 'apple') {
        console.log("eat fruit");

    }else {
        console.log("i don't eat \'"+ fruit.toUpperCase() +"\'!")
    }
}
eatFruit('orange');
*/

var a = true
var b = true

if(!a || b) {
    var c = true;
}else if (b == true && a == false){
    c = false
} else{
    c = true;
}