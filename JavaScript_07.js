//level-1

//1-
let age= prompt("Enter the age")
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
    console.log(`I am ${lessage} year older than you`)
}
else if(myage<yourage){
    let greaterage=yourage-myage;
    console.log(`You are ${greaterage} year older than me`)
}
else{
    console.log("we both are of same age")
}


//3-
let aa = 4
let bb = 3
if(aa>bb){
    console.log("aa is greater than bb")
}
else{
    console.log("aa is less than bb")
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
   if( score>=80 && score<=100){
        console.log("You are pass with grade A")
    }
    else if(score>=70 && score<=89){
        console.log("You are pass with B grade")
    }
    else if(score>=60 && score<=69){
        console.log("You are pass with C grade")
    }
    else if(score>=50 && score<=59){
        console.log("You are pass with D grade")
    }
    else{
        console.log("You are fail")
    }



//2-
let season=prompt("Enter the season")
season=season.toLowerCase()

switch(season){
  case "september":
  case"october":
  case"november":
        console.log("Season is Autumn");
        break;
    case "december":
    case "january":
    case "february":
        console.log(" Season is Winter");
        break  ;
  case "march":
  case "april":
  case "may":
    cosole.log("Season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Season is Summer");
    break;
    default:
    console.log("enter word is not a season")
}



//3-
let day=prompt("What is the day today?")
day=day.toLowerCase()
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



