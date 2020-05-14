


<script>
var today = newDate();
var hourNow = today.getHours();
var greetings;

if (hoursNow >18) {
greeting = ('Good Evening!');
} else if (hoursNow >12){
greetings = ('Good Afternoon!');
}else if (hoursNow >0){
greetings = ('Good Morning!');
}else{
greetings = ('welcome');
}

document.write('<h1>' + greetings + '</h1>');

</script>