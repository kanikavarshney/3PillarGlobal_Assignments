//level-1
//1-
function fullname(){
    let firstname='Kanika'
    let lastname='Varshney'
    let space =' '
    let fullname=firstname+space+lastname
    console.log(fullname)

}
fullname()

//2-
function printfullname(Firstname,Lastname){
let myfullname= Firstname + Lastname
console.log(myfullname)
}
printfullname('Kanika','Varshney')

//3-

function printsum(num1,num2){
   let sum = num1 + num2
   return sum
}
console.log(printsum(10,20))

//4-
function areaofrectangle(length,width){
    let arearectangle= length * width
    console.log(arearectangle)
}
areaofrectangle(20,30)

//5-
function perimeterofrectangle(len,wid){
    let perimeterrectangle= 2 * (len+wid)
    console.log(perimeterrectangle)
}
perimeterofrectangle(10,10)

//6-
function volumeofrectprism(length,width,height){
    let volumeofrect=length * width * height
    console.log(volumeofrect)
}
volumeofrectprism(2,3,4)

//7-
function areaofsquare(radius){
    const pi=3.14
    let areasq=pi * radius * radius
    console.log(areasq)
}
areaofsquare(20)

//8-

function circumofcircle(r){
    const pi=3.14
    let circum=2 * pi * r
    console.log(circum)
}
circumofcircle(2)

//9-

function density(mass,volume){
    let dens=mass/volume
    console.log(dens)
}
density(4,2)

//10-
 function objectspeed(distance,time){
     let speed=distance/time
     console.log(speed)
 }
 objectspeed(6,3)

 //11-
 function calculateweight(mass){
     const gravity=9.8
     let weight=mass * gravity
     console.log(weight)
 }
 calculateweight(10)

 //12-
 function celciustofahrenheit(degreecelsius){
     let f=(degreecelsius * 9/5) + 32
     console.log(f)
 }
 celciustofahrenheit(30)

 //13-
 function BMI(wt,ht){
     let bmi=wt/(ht *ht)
     console.log(bmi)
     if(bmi<18.5){
        console.log("Person is Underweight")
    }
    else if(bmi>= 18.5 && bmi<=24.9){
        console.log("Person isNormal weight")
    }
    else if(bmi>=25 && bmi<=29.9){
        console.log("Person is Overweight")
    }
    else{
        console.log("Obese")
    }
    
 }
 BMI(1600,8)
 
 //14-

function checkseason(mahina){
    let month=mahina
    console.log(month)
    if(month=='february'||'january'||'december'){
        console.log("Winter")
    }
    else if(month=='march' || 'april'||'may'){
    console.log("Spring")
}
    else if(month=='june' || 'july'||'august'){
    console.log("Summer")
}
    else{
    console.log("Spring")
}
}
checkseason('october')


//15-
function checkmax(a,b,c){
    var max=-Infinity
    for(var i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i]
        }
    }
    return max;
}
console.log(checkmax(110,2,4))
