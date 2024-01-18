// Factory function is a type of function that is used 
//to create and return object. Its a design pattern hat provides 
//that provide alternative to create obj comparing to key new or constructor 

function createCar (model, years){
    return {
        model:model,
        years:years,
        intro:()=> console.log(`the car is ${this.model} from ${years}`)
    }
}

const m = createCar("Mercerdes",2023);
m.intro();