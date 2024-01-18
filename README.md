General Concepts 
--------------------- Type & Conversion ---------------------

1. TypeOf
console.log (typeOf val);

2. toString
let Str = 12;
Str = Str.toString;
console.log(typeof Str);

3. parseFloat
i = parseFloat(i);




Type conversion 
Let b = ’54’; 
1. String to number 
b = parseint(b);
String to number 2 
b = +b;
String to number 3 
b = Number(b);

2. Number to string 
b = b.toString();
Number to string 
b = String(b);





--------------------- Control Flow ---------------------
Falsy value in js
(Null, undefined, NaN, false, 0, -0, ‘’, ‘’ ‘’ , (empty quotes))

Comparaison operator 
Relationnel operator
Equality operator 

Let msg = ‘bonjour’;
msg += ‘cava’;
Output : bonjour cava 


--------------------- Array ---------------------
let StrArr = ["C#",[12,"nodejs"],true,2];
console.log(StrArr[1][1]);

//push::Add element at the end of the array
StrArr.push("Python");
console.log(StrArr);

//pop():: remove element at the end of the array 
StrArr.pop();
console.log(StrArr);

//shift()::remove the element at from start
StrArr.shift();
console.log(StrArr);

//unshift::add element to start;
StrArr.unshift("GO");
console.log(StrArr);


//Slice :: give the element in intervalle;
console.log(StrArr.slice(2,3));


//reverse():: reverse element order;
StrArr.reverse();
console.log(StrArr);

//sort():: Align element per value;
console.log(StrArr.sort());


//join():: Insert character between elements;
console.log(StrArr.join("|"));

--------------------- Object ---------------------
let car = {
    type:"v6",
    modele:"benz",
    color:"black"
}
console.log(typeof car);
console.log((car.modele="Toyota"));
console.log(car);
car.identity=322;
car["paint"]="red";
console.log(car);

--------------------- Function ---------------------

Double function 



function showFunction(fn){
    const value1 = 232345;
    const value2 = 89789;
    const value3 = value1 + value2;
    fn(value3);
}

showFunction (function(value3){
    console.log(value3);
});


function grett(cb){
    
    const Strvalue = "market";
    cb(Strvalue);
}

grett (function cb(Strvalue){
    console.log(Strvalue);
});


function globalCalc(list1,list2){
    const tab1 = ["tomate","karot"];
    const tab2 = ["veste","soxes"];
    list1(tab1);
    list2(tab2);
}

globalCalc(function list(tab1){
    console.log(tab1);
},function list2(tab2){
    console.log(tab2);
});

--------------------- Method ---------------------

function greet(){
    return person.name;
}
const person = {
    name:"kader",
    greet
}
console.log(person.greet());



const car ={
    type:"v8",
    model:"Mercedes",
    serial:"KJHK2187Y781787181",
    year:2021,
    info:function(){
        console.log('the car is,'+ car["type"]+car["model"]+car["serial"]+car["year"]);
    }
}
console.log(car.info());

--------------------- Json ---------------------
JSON Format 
{
    "type":"v8",
    "model":"Mercedes",
    "serial":"KJHK2187Y781787181",
    "year":2021,
    "carsmodels":["bentley","astonmartins"]
}


JSON.stringfy():: transform object into json 
JSON.parse():: transform json into object

const car= {
    type:"v8",
    model:"Mercedes",
    serial:"KJHK2187Y781787181",
    year:2021,
    carsmodels:["bentley","astonmartins"],
}
console.log(car);
const jsonStrinfy = JSON.stringify(car);
console.log(jsonStrinfy);

const jsonPars = JSON.parse(jsonStrinfy);
console.log(typeof jsonStrinfy);


--------------------- Date ---------------------

To get actual Date;
const currentdate = new Date();
console.log(currentdate);



To change Date format
date.toDateString();
date.toJSON();
date.toLocaleString();


to set new date value
setDate() and getDate();


to get date that you want

const date = new Date();
date.setDate(date.getDate() + 1);
console.log(date);


To setInterval() to repeat the instruction every second or ...

setInterval(()=>{
    console.log("i will be back every 5 seconds"),10000
})



setTimeOut will execute the code after the time given but once 
setTimeout(()=> console.log("i'm comming"),3000
)






const date = new Date();
const current = date;


const date = new Date();
const year = date.getFullYear();
const months = date.getMonth();
const Day = date.getDay();
console.log(year);
console.log(months);
console.log(Day);


console.log(date);
console.log(date.toDateString());
console.log(date.toJSON());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
console.log(date);


const currentdate = new Date();
console.log(currentdate);


const interv = setInterval(()=>{
  console.log("joe")
},3000)

//setTimeout(()=> console.log("i'm comming"),3000
//)


//Stop interval after 10 seconds
setTimeout(()=>{clearInterval(interv);
    console.log("i will stop after 10")},10000) 



--------------------- Litteral ---------------------
const Add = 3;
 console.log(`${Add}`);

--------------------- Enhanced Object ---------------------
Enhanced Object litterals are a set of enhancements to the syntax for defining objects in js. These enhancements make it more convenient and consise to define object properties and methods.

introduce by ES6 JS

function user (name,age,work){
    return{
        name,
        age,
        work
    };
}
const user1 = user("kader",23,"developer");
const user2 = user("karim",43,"Driver");
console.log(user1 , user2);



let lib = {
    sum:(a,b)=> a+b,
    mult:(a,b)=> a*b,
}
console.log(lib.sum(3,2));
console.log(lib.mult(4,4));



var a= 1;
var b= 2;
var c= 5;

var obj={
    a,
    b,
    c,
}
console.log(obj);


--------------------- Spread Operators ---------------------
The spread operator is a new additions to the set of operators in JS ES6;

It takes in an iterable (e.g array) and expands it into individual element.

Used to make shallow copies of JS Objects.

Using this operator makes the code concises and enhances its readability.


const Arr1 = ["one","two","three"];
const Arr2 = ["four","five"];
const concat = [...Arr1,...Arr2];
console.log(concat);


//ADD ELEMENT ON ARRAY WITH SPREAD
let peoples = ["aziz","rema","chris"];
let Allpeps = ["ali",...peoples,"antoine"];
console.log(Allpeps);




const giveMe4=(a,b,c,d) => {
    console.log('a',a);
    console.log('b',b);
    console.log('c',c);
    console.log('d',d);
}

const testArr = ["red","green","yellow","purple"];
giveMe4(2,3,2,5);
giveMe4(...testArr);  //...Spread operator 



const user = {
    username:"kadergb",
    password: 3990900,
}
console.log(user);
const cloneUser = {...user};
console.log(cloneUser);


--------------------- Destructuring ---------------------
Destructing allows us to unpak values from data-structures (array, object) into separate distincts variables. 

const foo = ["one","two","three"];
const [one] = foo;
console.log(one);


let a, b;
[a=5, b=3] = [];
console.log(a);




//Array destructuring 
const [a, ...b]=["one","two","three"];
console.log(a);
console.log(b);



const colors = ["hi",12,true,["learn"]];
const [color1,color2,color3]=colors;
console.log(color1);


//Object destructuring
const Obj = {
    name:"kader",
    IsPerson:true,
    age:28
}
const {name} = Obj;
console.log (name);


//Object destructuring & rest operator
const {a,b, ...rest} = {a:"kader",b:"karim",c:"jimmy",d:"kabirou"};
console.log(rest);





//Function destructuring
const Obj = {
    name:"kader",
    IsPerson:true,
    age:28
}

function ready (Obj){
    console.log(`${Obj.name}`);
    console.log(`${Obj.IsPerson}`);
    console.log(`${Obj.age}`);
}
ready(Obj);





//Second example
const options = {
    title:"My Menu",
    items:["item1","item2"],
}

function show({title, height: h=100,width:w=100,items:[item1, item2]} ){
    console.log(`${title} ${h} ${w}` );
    console.log(item1);
}
show(options);






--------------------- Ternary operators ---------------------
condition ? exprifTrue : exprifFalse; replace only if else not if else if ;


const money = true;

const balancechecker = money === true? 'buy products':"they should bring money";
console.log(balancechecker);



--------------------- For in ---------------------
const Object = {
    a:1,
    b:2,
    c:3
};

for(keys in Object){
    console.log(keys, Object[keys]);
}


const Arr=["a","b","c"];

for(index in Arr){
    console.log(index, Arr[index]);
}







--------------------- For of ---------------------
const Array1 = ["kader",true,23];
for (const array of Array1) {
    console.log(array); 
}


//with string 

const text="hello";
for (const t of text) {
    console.log(t);
    
}







--------------------- map ---------------------
/map() methode creates a new array populated with the results 
//of calling a provided function on every element in the calling Array 


const Arr = [2, 543, 3];

double = Arr.map((num) => num *3);
console.log(double);


let peoples = [{name:"kader", age:12},{name:"karim", age:12},{name:"qadr", age:12}];

const results = peoples.map((people) =>{
    return [people.name, people.age];
});
console.log(results);







--------------------- filter ---------------------
let random = [234,90,76];

const mult = random.map((randoms) => randoms *10);

console.log(mult);





const Roads = [
    {name:"ktia", distance: 12},
    {name:"qsd", distance: 198},
    {name:"ior", distance: 102},
    {name:"kat", distance: 2}
]

console.log(Roads.filter((road) => road.distance >100));








--------------------- Find ---------------------
const Roads = [
    {name:"ktia", distance: 12},
    {name:"qsd", distance: 198},
    {name:"ior", distance: 102},
    {name:"kat", distance: 2}
]

console.log(Roads.find((road) => road.distance = 12));









--------------------- Every & Some ---------------------
const Roads = [
    {name:"ktia", distance: 12},
    {name:"qsd", distance: 198},
    {name:"ior", distance: 102},
    {name:"kat", distance: 2}
]

const Every = Roads.every((road) => road.distance >3);
const Some = Roads.some((road) => road.distance >3);
console.log(Every);
console.log(Some);











--------------------- DOM Selector ---------------------
//getElementbyTagName;
//GetElementsbyClassName;
//GetElementsbyID;
//Queryselector;
//QuerySelectorAll;

const h1element = document.getElementsByTagName("h1");
console.log(h1element);






--------------------- DOM Text ---------------------
//InnerText;
//textContent;
//InnerHtml;

const p = document.querySelector("p");
//console.log(p.innerText); give the text
//console.log(p.textContent); give the text 
//console.log(p.innerHTML); give the content with tag includes.

//p.innerHTML= "this is my innerhtml";




--------------------- DOM Classes ---------------------
//ClassList
//Add()
//remove()
//Toggle() if the class didn't exist toggle() will create it and if its exist toggle() will remove it;

const hustle = document.querySelector("h1");
hustle.classList;
//hustle.classList.add("style");
//hustle.classList.remove("style");
//console.log(hustle.classList);
hustle.classList.toggle("code");



--------------------- DOM Get & Set ---------------------
//href;
//value;
//type;
//getAttribute(attrName);
//setAttribute(attrName,value);

const a = document.querySelector("a");
//console.log(a.href="www.youtube.com");
const input = document.querySelector("input");
//console.log((input.value="hello"));
console.log((input.type="password"));


//getAttribute();
console.log(input.getAttribute("type"));


//SetAttribute()
console.log(input.setAttribute("type","email"));




--------------------- DOM Style ---------------------
const contain = document.querySelector(".container");
console.log(contain);
contain.style.height="400px";
contain.style.backgroundColor="red";



