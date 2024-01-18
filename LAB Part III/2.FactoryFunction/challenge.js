function createVehicule(type, brand, model, year){
    return {
        type,
        brand,
        model,
        year,
        pub:()=> console.log(`the car is 
        ${this.type}
        ${brand}
        ${model}
        ${year}`),
    }
}

const testVehicule = createVehicule ("V8","Mercedes","SUV",2023);
console.log(testVehicule);
testVehicule.pub();