//1.

// const rem=0;
// rem++;
// rem++;
// console.log(rem);

//ans-----Type error

//...................................................................

//2.How to find minimum value

const price=[35,66,234,56,88,90,22];

console.log(Math.min(...price));

//ans------Math.min(...price)

//...................................................................

//3.

var num=0;
console.log(num++);
console.log(num++);

//ans-----0,1

//....................................................................

//4.

let arr1=[1,2,3]
let arr2=arr1;
arr1.push(4);
console.log(arr1);
console.log(arr2);

//ans-----[1,2,3,4,5] [1,2,3,4,5]

//......................................................................

//5.


function multiply(a,b){
    return a*b
}

console.log(multiply(5))


//ans-----NaN

//..........................................................................

//6.

const arra1=['one','two'];
const arra2=[...arra1,'three','four','five']

console.log(arra2);

//ans-----['one','two','three','four','five']

//...........................................................................

//7.ES6 published in

//ans-----2015

//..............................................................................

//8.How to get this output {x:1,y:2,z:3}

const obj1={x:1,y:2};
const obj2={z:3};
const obj3={...obj1,...obj2}

console.log(obj3)

//...............................................................................

//9.

// console.log(a);
// let a=6;

//ans-----Referrence error

//...............................................................................

//10.

function a(){
    console.log("Hi");
}

function b(){
    console.log("Fabevy")
}

a(b);

//ans-----Hi

//.................................................................................

//11.

function sum(x,y,z){
    console.log(x+y+z)
}
const num1=[1,3,4,5]
sum(...num1);

//ans-----8

//..................................................................................

//12.ES6 stands for

//ans-----ECMAScript 6

//...................................................................................

//13.Correct syntax of async/await

//ans------async function A(){let m=await(b)}

//....................................................................................

//14.

function multi(a,b=1){
    return a*b
}

console.log(multi(5,2));

//ans-----10

//......................................................................................

//15.

const speed="quick";
console.log(`The ${speed} brown fox jumps over the lazy dog`);

//ans-----The quick brown fox jumps over the lazy dog

//.......................................................................................

//16.

function multip(a,b=3){
    return a*b
}

console.log(multip(5));

//ans-----15

//.........................................................................................

//17.

let person={name:"Linda"}
const members=[person];
person=null;
console.log(person);

//ans-----null

//..........................................................................................

//18.

function greet(name,greeting,message=`${greeting} ${name}`){
    return[name,greeting,message]
}
console.log(greet('David','Hi'));

//ans-----['David','Hi','Hi David]

//...........................................................................................

//19.How many stages are there in promise

//ans-----3(pending,fulfill,reject)

//............................................................................................

//20.

let funct=function(...args){
    console.log(args);
}
funct(3);
funct(4,5,6);

//ans-----[3] [4,5,6]










