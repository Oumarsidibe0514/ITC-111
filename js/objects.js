// objects 

// Everything is Javascript is an object with 3 small exeptions (strings, numbers and booleans)
// dates, Maths, Regular Expressions, Arrays, Funtions, Object.center


// Objects are variables

// Objects have a premitive value and primitive data type
// Primitive Value are not objects
// Primitive data is not 


var myObject = {
    // dataType: value
    firstName: 'tom',
    lastName: 'thompson',
    age: 57,
    isMaried: false,

        displayFullName: function() {return this.firstName + '' + this.lastName;}
};
var name = myObject.displayFullName();
console.log(myObject.displayFullName.toString());

var person = {
    fName: '',
    lName: '',
    age: 15
}

