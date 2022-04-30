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






