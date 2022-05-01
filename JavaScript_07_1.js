//level-1
//1-
for(i=0;i<=10;i++){
    console.log(i)
}

let ii=0
while (ii<=10){
    console.log(ii)
    ii++
}

let iii=0
do{
    console.log(iii)
    iii++
}while(iii<=10)


//2-
for(iiii=10;iiii>=0;iiii--){
    console.log(iiii)
}

let iiiii=10
while(iiiii>=0){
    console.log(iiiii)
    iiiii--
}

let iiiiii=10
do{
    console.log(iiiiii)
    iiiiii--
}
while(iiiiii>=0)


//3-
n=[1,2,3,4,5,6]
for(a=0;a<=n;a++){
    console.log(a)
}

//4-
for(var i=1; i<=7; i++){
    console.log("#".repeat(i));
 }

 //5-
for(var i=0;i<=10;i++){
    console.log(`${i} * ${i} = ${i*i}`)
}

//6-
for(var i=0;i<=10;i++){
    console.log(`${i}  ${i*i}  ${i*i*i}`)
}

//7-
for(var i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}


//8-
for(var i=0;i<=100;i++){
    if(i%2!==0){
        console.log(i)
    }
}

//9-
for(var i=0;i<=100;i++){
    if(i%i==0 && i%1==0){
        console.log(i)
    }
}


//10-
for(var i=0;i<=100;i++){
    flag=0
    for(var j=2;j<i;j++){
        if(i%j==0){
           flag=1
        }
    }
    if(i>1 && flag==0){
        console.log(i)
    }
}


//11-
sum=0
for(var i=0;i<=100;i++){
    sum=sum+i;
}
console.log(sum)

//12-
sum1=0
sum2=0
for(var i=0;i<=100;i++){
    if(i%2==0){
    sum1+=(i)
    }
    if(i%2!==0){
        sum2+=(i)
    }
}
console.log(`The sum of all even numbers from 0 to 100 if ${sum1}.And the sum of all odd numbers from 0 to 100 if ${sum2}.`)

//13-

const array_length=10
const randomArray=[]
for(var i=0;i<array_length;i++){
    randomArray.push(Math.random())
}
console.log(randomArray)

//14-
var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) 
    arr.push(r);
}
console.log(arr);

//15-
let chararr=(Math.random()+1).toString(36).substring(6)
console.log(chararr)


/*level-2

//1-
let as =prompt("Enter the string length you want")
let chararray=(Math.random()+1).toString(36).substring(`${as}`)
console.log(chararray)*/

//2-
const randomhexnumber=()=>{
    let num=(Math.random()* 0xfffff * 1000000).toString(16);
    return '#'+ num.slice(0,6);
};
console.log(randomhexnumber())

//3-
const rgbcolornumber=()=>{
    let rgb1=Math.floor((Math.random()*255)+1)
    let rgb2=Math.floor((Math.random()*255)+1)
    let rgb3=Math.floor((Math.random()*255)+1)
    return `rgb(${rgb1}, ${rgb2}, ${rgb3})`
}
console.log(rgbcolornumber())

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

  //4-
  let upper=[]
  for(var i=0;i<countries.length;i++){
    upper.push(countries[i].toUpperCase())
    console.log(upper)
  }

//5-
let arrlength=[]
for(var i=0;i<countries.length;i++){
    arrlength.push(countries[i].length)
}
console.log(arrlength)

//6-

let full=[]
for(var i=0;i<countries.length;i++){
    full.push([countries[i],countries[i].slice(0,3).toUpperCase(),countries[i].length])
}
console.log(full)

//7-

let land=[]
for(var i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        land.push(countries[i])
        }
}
console.log(land)

//8-
let sub=[]
for(var i=0;i<countries.length;i++){
    if(countries[i].endsWith('ia'))
    sub.push(countries[i])
}
console.log(sub)

//9-
 let big=[]
 for(var i=0;i<countries.length;i++)
     {
         if(countries[i].length>=8){
           big.push(countries[i])
         }
        }
    console.log(big)

    //10
    let five=[]
    for(var i=0;i<countries.length;i++){
        if(countries[i].length<=5){
            five.push(countries[i])
        }
    }
    console.log(five)

    const webTechs = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB'
      ]

      //11-
      let larg=[]
          for(var i=0;i<webTechs.length;i++){
              if(webTechs[i].length>=10){
                  larg.push(webTechs[i])
              }
          }
      console.log(larg)

      //12-

      let web=[]
    for(var i=0;i<webTechs.length;i++){
       web.push([webTechs[i],webTechs[i].length])
    }
    console.log(web)

    //13-
    let MernStack=["MongoDB","Express","React","Node"]
    for(const tech of MernStack){
        console.log(tech[0])
    }

    //14-
    let newarr=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
    for(var i=0;i<newarr.length;i++){
        console.log(newarr[i])
    }

    //15-

    let fruit=['banana', 'orange', 'mango', 'lemon']
    for(var i=fruit.length;i>=0;i--){
        console.log(fruit[i])
    }

    //16-
    let fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
     for(var i=0;i<fullStack.length;i++){
         for(var j=0;j<fullStack.length;j++){
             let rr=(fullStack[j])
             for(var k=0;k<rr.length;k++){
                console.log(rr[k])
            }
         }
        }
    
        //level-3

       /*1-(shallow copy)
       let countries1=countries
       console.log(countries1)
        countries.push('India')
        console.log(countries)
        console.log(countries1)*/

        //2-(deep copy)
       let countries2=[...countries]
       console.log(countries2)
       countries.push('India')
       console.log(countries2)
          let sortedcountries=(countries2.sort())
          console.log(sortedcountries)

//3-
console.log(webTechs.sort())
console.log(MernStack.sort())

//4-
let landd=[]
for(var i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        landd.push(countries[i])
    }
}
console.log(landd)

//7-
let four=[]
for(var i=0;i<countries.length;i++){
    if(countries[i].length<=4){
        four.push(countries[i])
    }
}
console.log(four)

//8-
let two=[]
for(var i=0;i<countries.length;i++){
    if(countries[i].length>=2){
        two.push(countries[i])
    }
}
console.log(two)


//9-
let stored=[]
for(var j=0;j<countries.length;j++){
    stored.push(countries[j].toUpperCase())
}
let reverse=[]
for(var i=stored.length;i>=0;i--){
    reverse.push(stored[i])
}
console.log(reverse)
ṇ