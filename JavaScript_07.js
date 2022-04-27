//level-1

//1-
let age=prompt("Enter your age")
if(age>=18){
    console.log("You are old enough to drive")
}
else{
    let notage= 18-age;
    console.log(`You are left with ${notage} years to drive`)
}

//2-
let myage=21;
let yourage=prompt("Enter your age")
if(myage>yourage){
    let lessage=myage-yourage;
    console.log(`I am ${lessage} older than you`)
}
else if(myage<yourage){
    let greaterage=yourage-myage;
    console.log(`You are ${greaterage} older than me`)
}
else{
    console.log("we both are of same age")
}


//3-
let aa = 4
let bb = 3
if(aa>bb){
    console.log("aa is greater than b")
}
else{
    console.log("aa is less than b")
}


(aa>bb) ?console.log("aa is greater than bb"):console.log("aa is less than bb")

//4-

let number=prompt("Enter the number")
if(number%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}

//level-2
//1-

let score=prompt("Enter your score")
switch(score){
    case(score>=80 && score<=100):
        console.log("You are pass with grade A");
    break;
    case(score>=70 && score<=89):
        console.log("You are pass with B grade");
    break;
    case(score>=60 && score<=69):
        console.log("You are pass with C grade");
    break;
    case(score>=50 && score<=59):
        console.log("You are pass with D grade");
    break;
    default:
        console.log("You are fail");

}

//2-
let season=prompt("Enter the season")
if(season==September, October, November){
    console.log("Season is Autumn")
}
else if(season==December, January,February){
    console.log("Season is winter")
}
else if(season ==March, April,May){
    console.log("Season is Spring")
}
else {
    console.log("Season is summer")
}

//3-
let day=prompt("What is the day today?")
let days=day.toLowerCase
switch (days){
    case ('monday'):
        console.log("Monday is a working day");
        break;
    case('tuesday'):
        console.log("Tuesday is a working day");   
    break;
    case('wednesday'):
    console.log("Wednesday is a working day");
    break;
    case('thursday'):
    console.log("Thursday is a working day");
    break;
    case('friday'):
    console.log("Friday is a working day");
    break;
    case('saturday'):
    console.log("Saturday is a weekend");
    break;
    case('sunday'):
    console.log("Sunday is a weekend");
    break;
    default:
        console.log("enterd value is not a day name");
}

//level-3

//1-



