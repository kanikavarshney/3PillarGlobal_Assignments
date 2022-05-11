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
console.log(checkmax(-2,-4,-3))


//level-2

//1-

//2-
function solvequadequation(a,b,c){
    discriminant= b*b-4 * a *c
    if(discriminant >0){
        root1=(-b+Math.sqrt(discriminant))/(2 *a);
        root2=(-b-Math.sqrt(discriminant))/(2*a);
        console.log(`The roots of quardatic equations are ${root1} and ${root2}`)
    }
    else if(discriminant==0){
        root1=root2=-b/(2*a)
        console.log(`The roots of quardatic equations are ${root1} and ${root2}`)
    }
    else{
        let realpart=(-b/(2 *a)).toFixed(2)
        let imaginarypart=(Math.sqrt(-discriminant)/(2*a)).toFixed(2)
        console.log(`The roots of quardatic equations are ${realpart}+${imaginarypart}i and ${realpart}-${imaginarypart}i`)
    }
      
}
solvequadequation(1,-1,0)

//3-
function printArray(a,b,c,d,e,f){
    let array=[a,b,c,d,e,f]
    console.log(array)
    for(var i=0;i<array.length;i++){
        console.log(array[i])
    }
}
printArray(2,3,4,5,6,7)

//4-
function showDateTime(){
    const now=new Date();
    const date=now.getDate();
    const month=now.getMonth()
    const year=now.getFullYear();
    const hours=now.getHours();
    const minutess=now.getMinutes();
    let todaytime=(`${date}/${month}/${year} ${hours}:${minutess}`)
    console.log(todaytime)

}
showDateTime()

//5-
function swapvalues(a,b){
    let temp=a;
    a=b;
    b=temp;
    console.log(`Value of x is ${a} and y is ${b}`)
}
swapvalues(2,3)

//6-
function reversearray(a,b,c,d,e,f){
    let arr=[a,b,c,d,e,f]
    let reversearr=arr.reverse()
    return reversearr
}
console.log(reversearray(1,2,3,4,5,6))

//7-
const changetouppercase=array=>{
    const newarray=[]
    for(const element of array){
        newarray.push(element.toUpperCase())
    }
    return newarray
}
 
const name=['kanika','kashish','aastha','kinjal','himani']
console.log(changetouppercase(name))

//8-
function additem(a){
    let fruits=['banana','watermelon','apple']
    fruits.push(a)
    return fruits
}
console.log(additem('guava'))

//9-
function removeitem(a){
    let fruits=['watermelon','apple','banana','kiwi']
    fruits.pop(a)
    return fruits
}
console.log(removeitem('banana'))

//10-
const sumofallnumbers=(...args)=>{
    let sum=0;
    for(const element of args){
         sum=sum+element
    }
    return sum
}
console.log(sumofallnumbers(1,2,3,4))

//11-
const sumofodds=(...args)=>{
    let sum=0
    for(const element of args){
        if(element%2!==0){
            sum=sum+element
        }
    }
    return sum
}
console.log(sumofodds(1,2,3,4,5))

//12-
const sumofeven=(...args)=>{
    let sum=0
    for(const element of args){
        if(element%2==0){
            sum=sum+element
        }
    }
    return sum;
}
console.log(sumofeven(1,2,4,5,6,7,8))

//13-

//14-
const elementssum=(...args)=>{
    let sum=0
    for(const elements of args){
        sum=sum+elements
    }
    return sum
}
console.log(elementssum(1,2,3))

//15-
function randomuserip(){
    let userip1=Math.floor((Math.random()*255)+1)
    let userip2=Math.floor((Math.random()*255)+1)
    let userip3=Math.floor((Math.random()*255)+1)
    let userip4=Math.floor((Math.random()*255)+1)
    let userrandomip=(`${userip1}.${userip2}.${userip3}.${userip4}`)
    return userrandomip
}
console.log(randomuserip())

//16-
var mac = "XX:XX:XX:XX:XX:XX".replace(/X/g, () => { return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16)) })
console.log(mac)

/*function macuseraddress(size){
    var letters ='0123456789ABCDEF';
    for(var i=0;i<size;i++){
        let a =letters[Math.floor(Math.random()*16)]
        let b =letters[Math.floor(Math.random()*16)]
        let c =letters[Math.floor(Math.random()*16)]
        let d =letters[Math.floor(Math.random()*16)]
        let e =letters[Math.floor(Math.random()*16)]
        let f =letters[Math.floor(Math.random()*16)]
        let abcdef=(`${a}:${b}:${c}:${d}:${e}:${f}`)
    }
    return abcdef;
}
console.log(macuseraddress(2))*/


//17-

function randomhexanumbergenerator(){
    let number=Math.floor(Math.random()*0xfffff * 1000000).toString(16)
    let num='#'+number.slice(0,6)
    return num
}
console.log(randomhexanumbergenerator())

//18-
function randomid(){
    let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
    let id=''
    for(var i=0;i<7;i++){
        id+=characters.charAt(Math.floor(Math.random()*62))
    }
    return id;
}
console.log(randomid())

//level-3

/*1-
function useridgenerator(){
    let letters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let numberofcharacter=prompt('Enter the numbers of characters you want');
    let numberofids=prompt("Enter no.of ids u want")
    let id=''
    for(var i=0;i<numberofcharacter;i++){
        for(var j=0;j<numberofids;j++){
      id+=letters.charAt(Math.floor(Math.random()*62))
    }

}
    console.log(id)
  }
useridgenerator()*/

//2-
function rgbcolorgenerator(){
    rgb1=Math.floor(Math.random()*255)+1
    rgb2=Math.floor(Math.random()*255)+1
    rgb3=Math.floor(Math.random()*255)+1
    let rgb=`rgb(${rgb1},${rgb2},${rgb3})`
    console.log(rgb)

}
rgbcolorgenerator()


//3-
function getColorArray(num) {
    var result = [];
    for (var i = 0; i < num; i += 1) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var j = 0; j < 6; j += 1) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    result.push(color);
    }
    return result;
    }
    console.log(getColorArray(5))

//4-
function rgbarray(num){
    var parinam=[]
        let rgb1=Math.floor((Math.round()*255)+1)
        let rgb2=Math.floor((Math.round()*255)+1)
        let rgb3=Math.floor((Math.round()*255)+1)
        let rgbcolors=`rgb(${rgb1},${rgb2},${rgb3})`
        parinam.push(rgbcolors)
        return parinam
    }

console.log(rgbarray(5))

//5-
const hex = '#00CD23';
const hexToRGB = hex => {
   let r = 0, g = 0, b = 0;
   // handling 3 digit hex
   if(hex.length == 4){
       console.log("only 3 digits hexa values are allowed")
   }else if (hex.length == 7){

      r = "0x" + hex[1] + hex[2];
      g = "0x" + hex[3] + hex[4];
      b = "0x" + hex[5] + hex[6];
   };

   return(`rgb(${+r},${+g},${+b})`)
}
console.log(hexToRGB(hex));

//6-
const rgbcolor={
    red:0,green:128,blue:92
}
function rgbtohex({red:r,green:g,blue:b}){
    const prefix='#'
    const hex=prefix+((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1);
    return hex;
}
console.log(rgbtohex(rgbcolor))

//8-
function shufflearray(arrays){
    let curdId=arrays.length
    while(0!=curdId){
        let randomid = Math.floor(Math.random()*curdId)
        curdId=curdId-1
        let temp=arrays[curdId]
        arrays[curdId]=arrays[randomid]
        arrays[randomid]=temp
    }
    return arrays
}
let arra=[1,2,3,4,5]
arra=shufflearray(arra)
console.log(arra)


//9-
function factorial(num){
    let fact=1;
    for(var i=num;i>=1;i--){
        fact=fact *i;
    }
    return fact
}
console.log(factorial(4))

//10-
function isEmpty(a){
    if(a.isEmpty){
        console.log("parameter is empty")
    }
    else{
        console.log("Parameter is not Empty")
    }
}
isEmpty(1,2)

//11-
const sum=(...args)=>{
    add=0
    for(const element of args){
        add=add+element;
    }
    return add;
}
console.log(sum(1,2,3,4,5))

//12-
function sumofarrayitems(arra){
    let sum=0;
    for(var i=0;i<arra.length;i++){
        sum=sum+arra[i]
    }
    return sum;
}
let array=['a','b']
console.log(sumofarrayitems(array))
    for(var j=0;j<array.length;j++){
    if(typeof array[j]=="number"){
        console.log("sum possible")
    }
    else{
        console.log("Sum not possible")
    }
    }
    
//13-
function average(numbers){
   res=0
   count=numbers.length;
   let average=0
   for(var i=0;i<numbers.length;i++){
       res=res+numbers[i]
       average=res/count
   }
   return average
}
numbers=[4,2,2,4]
console.log(average(numbers))

//14-
function modifyarray(array){
    newarr=[]
    if(array.length>=5){
        array[4]=array[4].toUpperCase() 
        }
        else {
            console.log("Item not found")
        }
        return array

    
}
let arr=['kanika','aastha','kinjal','kashish','mitali','kratika']
console.log(modifyarray(arr))

//15-

function prime(num){
    if(num===1){
        return `"Number is not prime"`;
    }
    else if (num===2){
        return `"Number is prime"`;
    }
    else{
      for(var i=2;i<num;i++){
          if(num%i===0){
              return `"Number is not prime"`;
          }
          return `"Number is prime"`;
      }
    }
}
console.log(prime(8))


//16-
const myarr=["a","b","a"]
const countUnique=myarr=>{
    const counts={}
    for(var i=0;i<myarr.length;i++){
            counts[myarr[i]]=1+(counts[myarr[i]] || 0)
    }
    return counts;
}
console.log(countUnique(myarr));



//17-
const arrmy=['1','2','3']
const countdatatype=arrmy=>{
    let first=typeof(arrmy[0]);
    for(var i=1;i<arrmy.length;i++){
        if((typeof(arr[i]))!=first)
            return `"Elements are not same"`  
        return`"Elements are same"`
    }
}
console.log(countdatatype(arrmy))
//18-
//19-
function sevenrandomnumber(){
    newarrays=[]
    for(var i=0;i<7;i++){
        newarrays.push(Math.floor(Math.random()*10)+0)

    }
    console.log(newarrays)
}
sevenrandomnumber()

//20-
function reversearray(array){
          let copyarray=array;
          console.log(`Original array:[${copyarray}]`)
          reversearrayy=[]
          for(var i=array.length-1;i>=0;i--){
              reversearrayy.push(array[i])
          }
          return reversearrayy
}
array=[1,2,3,4,5,6]
console.log(reversearray(array))











