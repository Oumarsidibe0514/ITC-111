// flow control 


// for loops


var fruits = ['apples', 'oranges', 'grapes', 'lemons', 'banana'];

for(var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

}


for(var i =  fruits.length-1; i >= 0 ; i--) {
    console.log(fruits[i]);

}

// if - else

var number = 10;

function oddEven(num){
    if(if number % 2 == 0) {
        console.log( number + 'is even.');
    } else {
    console.log(number +'is odd.');
    }
}

oddEven(15);