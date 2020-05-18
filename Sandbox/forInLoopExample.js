// ForIn Loop - used to loop/interate through prpreties of an object

// synthax: for(proprety in object) {do stuff;}


var user = {
    fName:"John", 
    lName:"Dick",
    age: 21
};

var details = '';
var p;

for (p in user) {
    details += user[p] + " ";

}
console.log(details);