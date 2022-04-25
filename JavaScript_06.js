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

//level2

//2-
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words=text.split(' ')
console.log(words)
console.log(words.length)

//3-
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
shoppingCart.splice(4,1)
console.log(shoppingCart)
shoppingCart[3]='Green Tea'
console.log(shoppingCart)

//4-
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
let check=countries.includes('Ethiopia')  
if(check==true)
{
    console.log('ETHIOPIA')
}
else{
    console.log(countries.unshift('Ethiopia'))
}

//5-

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let check1=webTechs.includes('Sass')  
if(check1==true)
{
    console.log('Sass is a CSS preprocess')
}
else{
    const check2=(webTechs.unshift('Sass'))
    console.log(webTechs)
}

//6-

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

//level-3

//1-
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//sorting
let sorttt=(ages.sort())
console.log(`Sorted array of age is :${sorttt}`)
//min and max
let minvalue = (Math.min.apply(Math,ages))
let maxvalue=(Math.max.apply(Math,ages))
console.log(`Min value is :${minvalue}`)
console.log(`Max value is :${maxvalue}`)
//median
let sorted = ages.sort()
if(sorted.length % 2 ==0)
{
    const first = sorted[sorted.length /2 - 1]
    const second = sorted[sorted.length /2]
    console.log((first + second)/2);

}
else{
    const mid = Math.floor(sorted.length /2)
    console.log(mid)
}
//average
var i =0
sum =0
for(i =0;i<ages.length;i++)
{
    sum = sum +ages[i]
}
const avg=(sum/ages.length)
console.log(`The average is :${avg}`)

//range
let range = maxvalue - minvalue
console.log(`The range is : ${range}`)

//compare
let minavg = Math.abs(minvalue-avg)
let maxavg=Math.abs(maxvalue-avg)
console.log(minavg==maxavg)

//slice fisrt ten countries
console.log(countries.slice(0,10))

//2-
startindex=0
lastindex=countries.length-1
midindex=startindex+(lastindex-startindex)/2
console.log(`Mid index :${midindex} and the mid element is:${countries[midindex]}`)

//3-
console.log(countries.length%2==0)
countries.unshift('India')
console.log(countries)
let array1=(countries.slice(0,6))
let array2=(countries.slice(6))
console.log(array1)
console.log(array2)

