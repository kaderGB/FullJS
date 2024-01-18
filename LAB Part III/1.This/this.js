// this refer to a current object 
//Challenge 

const obj ={
name:"kader",
age:28,
greetRegular: ()=> console.log(`hello my name is ${this.name} and i have ${this.age} years old`),
greetArrow: ()=> console.log(obj.greetRegular())
}

console.log(obj.greetArrow());

