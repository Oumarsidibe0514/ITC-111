var str = 'this is a string.';

//lengh method - returns the size of the string
var strlen = str.length;

// square bracketts notation - go to character at specified string index
var strIdx = str[8];

// indexOf method - get position of character in tring
var strIdxOf = str.indexOf('r')

// slice method - get a substring or specified portion of a string.center
var strSlice = str.slice(5, 7);

// toUpperCase() and toLowerCase() - change the case of a string character
var strUpper = str.toUpperCase();
var strLower = str.toLocaleLowerCase();

// replace() method - replace a character of a string
var strRpl = str.replace('a', 'our');


//console.log(strRpl);

// Arrays

var fruits = ['apples', 'oranges', 'grapes', 'lemons', 'banana'];
// array methods

//lenght method - get the number of elements in an array
    //console.log(fruits.length);


// push() method - adds new element to the end of an array
//fruits.push('cantelop')
  //  console.log(fruits);
//fruits.pop('cantalop');
//console.log(fruits);


// sort() method - sorts elements in the array
//    console.log(fruits);
//    console.log(fruits.sort());

// toString() method - converts an array to a string and returns the result
    console.log(fruits);
    console.log(fruits.toString());