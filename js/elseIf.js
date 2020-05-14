// Conditions Else-If

//Ads another condition to resolve in an If Else.center

var a = true
var b = true
var c; 

if(!a || b) {
    var c = true;
}else if (b == true && a == false){
    c = false
} else{
    c = true;
}

//Nesting

// esting
function hello() {
    var msg = 'hello';
    function world() { msg += 'world.';}
    world();
    return msg;
}
console.log(hello());