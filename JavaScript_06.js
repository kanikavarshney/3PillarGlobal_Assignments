//level-1

//1-
const arr=Array();
console.log(arr);

//2-
const arrr=Array(1,2,3,4,5,6);
console.log(arrr);

//3-
const arrrr=Array(1,2,3,4,5,6);
console.log(arrrr.length);

//4-
const aarr=Array(1,2,3,4,5,6,7);
console.log(aarr[0]);
console.log(arr[3]);
let lastindex=(aarr.length-1);
console.log(aarr[lastindex]);

//5-
const mixedDataTypes=[20,'Kanika',true,10.5,{country:"India",city:"Aligarh"},{skills:['HTML','CSS','JAVASCRIPT','REACT']}]
console.log(mixedDataTypes.length)

//6-
const ITCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

//7-
console.log(ITCompanies)

8//-
let aa =ITCompanies.length;
console.log(`The number of companies:${aa}`)

//9-
console.log(ITCompanies[0])
console.log(ITCompanies[3])
let lastindexx=ITCompanies.length-1
console.log(ITCompanies[lastindexx])

//10-
console.log(ITCompanies[0])
console.log(ITCompanies[1])
console.log(ITCompanies[2])
console.log(ITCompanies[3])
console.log(ITCompanies[4])
console.log(ITCompanies[5])
console.log(ITCompanies[6])

//11-
ITCompanies[0]='FACEBOOK'
ITCompanies[1]='GOOGLE'
ITCompanies[2]='MICROSOFT'
ITCompanies[3]='APPLE'
ITCompanies[4]='IBM'
ITCompanies[5]='ORACLE'
ITCompanies[6]='AMAZON'
console.log(ITCompanies)

//12-
let ab=(ITCompanies.join())
console.log(`${ab} are big IT Companies.`)

//13-
let abb=ITCompanies.includes('Facebook')
if(abb==true)
{
  console.log(abb)
}
else{
  console.log("Company is not found")
}

//14-

//15-
console.log(ITCompanies.sort())

//16-
console.log(ITCompanies.reverse())

//17-
console.log(ITCompanies.slice(0,3))

//18-
console.log(ITCompanies.slice(4,7))

//19-
console.log(ITCompanies.slice(3,4))

//20-
let a =(ITCompanies.splice(0,1))
console.log(ITCompanies)

//21-
ITCompanies.splice(3,1)
console.log(ITCompanies);

//22-
ITCompanies.splice(6)
console.log(ITCompanies);

//23-
ITCompanies.splice(0)
console.log(ITCompanies);