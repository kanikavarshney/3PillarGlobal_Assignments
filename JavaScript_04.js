//Exercise (Level 1)

//1-
let challenge = '30 Days Of JavaScript'

//2-
console.log(challenge)              ///print 30 Days Of JavaScript

//3-
let str = 'JavaScript'
  console.log(str.length)          ///print 10

//4-
let stri = 'JavaScript'
console.log(stri.toUpperCase())     ///print JAVASCRIPT

//5-
let strin = 'JAVASCRIPT'
console.log(strin.toLowerCase())     ///javascript

//6-
let stringg = 'JavaScript'
console.log(stringg.substring(4,10))   ///Script

//7-
let stringgg = '30 Days Of JavaScript'
console.log(stringgg.substring(3,21))   ///Days Of JavaScript

//8-
let stringggg = 'JavaScript'
console.log(stringggg.includes('Script')) /// true

//9-
let stringgggg = '30 Days Of JavaScript'
console.log(stringgggg.split())            ///["30 Days Of JavaScript"]

//10-
let s = '30 Days Of JavaScript'
console.log(s.split(' '))         /// splits with space  ["30", "Days", "Of", "JavaScript"]

//11-
let social ='Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'
console.log(social.split(','))        ///["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//12-
let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript','Python'))

//13-
let st = '30 Days Of JavaScript'
console.log(st.charAt(15))            ///print S

//14-
let stt = '30 Days Of JavaScript'
console.log(stt.charCodeAt(11))

//15-
let strr = '30 Days Of JavaScript'
console.log(strr.indexOf('a'))         

//16-
let strii = '30 Days Of JavaScript';
console.log(strii.lastIndexOf('a'));    ///15

//17-
let strioo = 'You cannot end a sentence with because because because is a conjunction';
console.log(strioo.indexOf('because')) ;    ///48

//18-
let inn = 'You cannot end a sentence with because because because is a conjunction';
console.log(inn.indexOf('because'))  ;   ///32

//19-
let because = 'You cannot end a sentence with because because because is a conjunction';
console.log(because.indexOf('because')) ;    ///48

//20-let string = ' 30 Days Of JavaScript '
console.log(string.trim())   ;               ///'30 Days Of JavaScript'

//21-
console.log(string.startsWith('30'))  ;       ////true

//22-
console.log(string.endsWith('JavaScript'))   ///true

//23-
let stro = '30 Days Of JavaScript'
console.log(stro.match('a'))             ///gives index of a 

//24-
  let pehla = '30 Days Of';
   let dusra = 'JavaScript';
   let challen = pehla  + dusra;
   console.log(challen);

//25-  
   let rep = '30 Days Of JavaScript'
console.log(rep.repeat(2))

//Level-2


//1-console.log('/'There is no exercise better for the heart than reaching down and lifting people up./' by John Holmes teaches us to help one another.');

//2-console.log('/"Love is not patronizing and charity isn/'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don/'t just give money but reach out your hand instead./"');

//3-
let aa ='10'
  let bb = 10
console.log(typeof(aa))    //////string
console.log(typeof(bb))    ////number

//now to make them equal either we make 10 a string by adding '10' or make the string to 10 bu removing ''.
let ab ='10';
  let ba = '10';
console.log(typeof(ab))  ;  //////string
console.log(typeof(ba))  ;  ////string

//4-
let num='9.81'
  let numFloat = parseFloat(num);
console.log(Math.round(numFloat));

//5-
let aaa ='Python';
console.log(aaa.includes('on'));
let bbb= 'Jagron';
console.log(bbb.includes('bbb'));

//6-
let ja = 'I hope this course is not full of jargon.'
console.log(ja.includes('jagron'));

7//-
let randomNumRoundToFloor = Math.floor(Math.random()*100)
console.log(randomNumRoundToFloor) 

//8-
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(50, 100)
console.log(rndInt)

//9-
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndIntt = randomIntFromInterval(50, 100)
console.log(rndIntt)

//10-
let first = 'JavaScript'
   let firstLetter = first[0]
   console.log(firstLetter)       ///prints J

let second = 'JavaScript'
   let secondLetter = second[1]
   console.log(secondLetter)       ///prints a

//11-
console.log('1 1 1 1 1\n2 3 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

//12-
let sub = 'You cannot end a sentence with because because because is a conjunction'
console.log(sub.substr(31,23))             ///////prints because because because


//level3

//1-
let patt ='Love is the best thing in this world. Some found their love and some are still looking for their love.';
  let patternn = /love/gi;
  console.log(patt.match(patternn))

//2-
let pat ='You cannot end a sentence with because because because is a conjunction'
  let pattern =/because/gi
console.log(pat.match(pattern))
//3-
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

console.log(sentence.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &isal@so $the $resu@lt of &love& of tea&ching',' '));

//4-
let sumi = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

 let a = (sumi.substring(9,13));
 let b = (sumi.substring(42,47));
 let c = (sumi.substring(67,72));
 console.log(`The sum of ${a},${b} and ${c} is ${a+b+c}`);
 
 
