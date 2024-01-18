function BuildPerson (name, age, gender){
    this.name = name,
    this.age = age,
    this.gender = gender,
    this.Info = ()=> console.log(`${name},${age},${gender} `) 
}

const person1 = new BuildPerson("kader",23,"Male");
console.log(person1);
person1.Info();

