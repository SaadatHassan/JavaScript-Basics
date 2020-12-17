console.log("Hello");
// Ternary Operator
var firstName=prompt("What is your name?");
var age=prompt("What is yout age?");
var drink = age >= 18 ? 'beer' : 'juice'
age >= 18 ? console.log(firstName +" drinks "+ drink) : console.log(firstName + " drinks " + drink);

//if else statement
var FirstName = prompt("Enter your name");
var Age = prompt("Enter your age");
var Drink;
if(Age>=18){
Drink='beer'
}
else{
Drink='Juice'
}
console.log(FirstName + " drinks " + Drink);

//switch statement
var agee = prompt("Enter age");
switch(true)
{
    case agee < 18 : console.log("drinks Juice");
    break;
    case agee >=18 : console.log("Drinks beer");
    break;
    default : console.log("drinks nothing");
}