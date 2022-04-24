//level 1


//1-
let firstName ='Kanika'
let lastName = 'Varshney'
let country = 'UttarPradesh'
let city = 'Aligarh'
let age = 21
let isMarried = true
let year = 2000

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

//2-
let aa ='10'
let bb = 10
console.log(typeof aa == typeof bb)

3//-
let num  = '9.81'
let aaa = parseInt(num)
console.log(aaa)
let bbb = 10
console.log(aaa == bbb)


//4-truthy
let ab ='10'
let ba = 10
console.log(typeof ab == typeof ba)

//falsy
//0
//undefined
//null

//5-
//1-true
//2-true
//3-false
//4-false
//5-true
//6-true
//7-false
//8-false
//9-false
//10-true
//11-false
//12-
let aab = 'python'
let bba = 'jagron'
 console.log(aab.length != bba.length)

/*6-
1-true
2-false
3-true
4-true
5-false
6-true
7-true
8-false
9-true
10-true
11-*/
let aaaa = 'dragon'
let bbbb = 'python'
console.log(aaaa.includes('on') == bbbb.includes('on'))

//7-
//1-
const now = new Date
console.log(now.getFullYear())

//2-
const noww = new Date
console.log(noww.getMonth())

//3-
const nowww = new Date
console.log(nowww.getDate())

//4-
const noow = new Date
console.log(noow.getDay())

//5-
const nnow = new Date
console.log(nnow.getHours())

//6-
const nooow = new Date
console.log(nooow.getMinutes())

//7-
const nnnow = new Date
console.log(nnnow.getTime())

//level-2
/*1-
var base = parseInt(prompt("Enter the base"));
var height = parseInt(prompt("Enter the height"));
var area = (base*height)*1/2;
console.log("Base:" +base);
console.log("Height:" +height);
console.log("The are of triangle:" +area );

//2-
var a = parseInt(prompt("Enter the side a"));
var b = parseInt(prompt("Enter the side b"));
var c = parseInt(prompt("Enter the side c"));
var perimeter = (a+b+c);
console.log("side a:" +a);
console.log("side b:"+b);
console.log("side c:"+c);
console.log("perimeter of triangle:"+perimeter);


//3-
var length=parseInt(prompt("Enter the length"));
var width= parseInt(prompt("Enter the width"));
var area=(length*width);
var perimeter = (length+width)*2;
console.log("width:"+width);
console.log("Length:" +length);
console.log("Area of rectangle:" +area);
console.log("Permiter of rectangle:" +perimeter);

//4-
const PI=3.14;
var radius=parseInt(prompt("Enter radius"));
var area=PI*radius*radius;
var circumference=2*PI*radius;
console.log("Rdius of circle:" +radius);
console.log("Area of circle:"+area);
console.log("Circumference of circle:"+circumference);


/*5-
y=2x-2
for x intercept
y=0
so x=1

ans=(1,0)

for y intercept
x=0
so y=-2
ans=(0,-2)*/

var x1=1
var y1=0
var x2=0
var y2=-2
var slope=y2-y2/x2-x1
console.log(slope)

//slope=2

//6-
var x1=2;
var y1=2;
var x2=6;
var y2=10;
var slope=(y2-y1)/(x2-x1);
console.log(slope);

////slope=2


//7-
var slope1=2;
var slope2=2;
console.log(slope1==slope2);


//9-
var hours=parseInt(prompt("Enters the hours"));
var rate = parseInt(prompt("Enter rate perhour"));
var earning=hours*rate;
console.log("Hours:"+hours);
console.log("Rate:"+rate);
console.log("Your weekly earnig is:"+earning);

//10-
var Name=prompt("Enter your name");
if(Name.length>7){
  console.log("long")
}else{
  console.log("short")
}


//11-
let firstname='Kanika';
let lastname='Varshney';
if(firstname.length>lastname.length){
  console.log("Your first name ,Kanika is greater than your family name,Varshney" )
}
else{
  console.log("Your first name ,Kanika is shorter than your family name,Varshney" )
}

//12-
let myage=250;
let yourage=50;
let aaaaa = myage-yourage;
let bbbbb = `I am ${aaaaa} older than you`
console.log(bbbbb)

//13-
var date = new Date();
var Currentyear=(date.getFullYear());
var Birthyear=parseInt(prompt("Enter your birth year"));
var agee=(Currentyear-Birthyear);
var driveyear=(18-agee);
if(agee>=18)
{
  console.log(`You are ${agee}.You are old enough to drive.`);
}
else{
  console.log(`You are ${agee}.You will be allowed to drive after ${driveyear} years.`);
}

//14-
const secondsinayear=31536000;
var liveyear=parseInt(prompt("Enter the number of years you want to live"));
var livedseconds=secondsinayear * liveyear;
console.log(`You lived ${livedseconds} seconds.`)

//15-
//i-
const nowwwww=new Date();
const yearr=nowwwww.getFullYear();
const month=nowwwww.getMonth();
const datee=nowwwww.getDate();
const hourss=nowwwww.getHours();
const minutess=nowwwww.getMinutes();
console.log(`${yearr}-${month}-${datee} ${hourss}:${minutess}`)

//ii-
console.log(`${datee}-${month}-${yearr} ${hourss}:${minutess}`)

//iii-
console.log(`${datee}/${month}/${yearr} ${hourss}:${minutess}`)

//level-3

//1-
console.log(`${yearr}-${month}-${datee} ${hourss}:${minutess}`)