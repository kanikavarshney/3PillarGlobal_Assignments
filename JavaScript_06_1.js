//level1
//1-
const dogy = {}
//2-
console.log(dogy);
/*/3-
const dog = {
    Name:'Marie',
    legs:4,
    color:['black','white','pink'],
    age:6,
    bark:'woof',
    getbarksound : function(){
        return `${this.bark}${this.bark}`
    }
}

//4-
console.log(dog.Name)
console.log(dog.legs)
console.log(dog.age)
console.log(dog.color)
console.log(dog.bark)

//5-
dog ["breed"]="Akita"
dog.getdogInfo = function(){
let dogname=this.Name
let colour=this.color.slice(0,1)
let barking = this.getbarksound
let statement=`My dog name is ${dogname}.\nThe color of dog is ${colour}.\nThe breed of my dog is ${breed}.\nMy dog do the sound ${barking}`
return statement
}
console.log(dog)
console.log(dog.getdogInfo())
*/

//level2

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

//1-


