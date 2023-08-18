/*
I)
  A.
    1. Use '=' operator
    2. Use '=' operator
    3. let var1 = 0;
        let var2 = var1;
    4.  Declaring is 'let, const, var' and saying this exists.
        Assigning is giving it a value with a equals sign.
       **** Defining is 'TO DO'
    5. A outline/blueprint of your code and logic before writing. It is to streamline your ideas i.e. planning out your flexbox in a grid.
    6. Depending on the complexity of your problem, the more complex it is the more time is needed to spend on planning out the problem.



  B.
    1. 
  */
let firstVariable;
// 2.
firstVariable = 'Hello World';
// 3.
firstVariable = 123;
// 4.
let secondVariable = firstVariable;
// 5.
secondVariable = 'Im hungry'
// 6.
console.log(firstVariable);
//Should be 123 **TO DO FIX THIS AREA**
// 7. 
let yourName = 'BlackPink';
let expression = 'Hello, my name is ';
let greeting = expression + yourName;
console.log(greeting)

// C.
// 1.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(!false || false); 
console.log(e == "Kevin");
console.log(a + b == c);
console.log(a * a == d);
console.log(48 == '48');

// D. 

let animal = "cow";
if(animal == "cow"){
    console.log("mooooo");
}else{
    console.log("Hey! You're not a cow");
}

// E.

let personAge = 15;

if(personAge >= 16){
    console.log("Here are the keys!");
}else{
    console.log("Sorry, you're too young");
}

// II. 

// A.

for(let i = 0; i < 11; i++){
    console.log(i);
}

for(let i = 10; i < 401; i++){
    console.log(i);
}

for(let i = 12; i < 4001; i += 3){
    console.log(i);
}

// B. 

for(let i = 1; i < 101; i++){

    if(i % 2 == 0){
        console.log(i, " <--- is an even number");
    }else{
        console.log(i);
    }
    
}

// C.

for(let i = 0; i < 101; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("I found a ", i, " Three is a crowd. High five!");
    }else if(i % 5 == 0){
        console.log("I found a ", i, " High five!");
    }else if(i % 3 == 0){
        console.log("I found a ", i, " Three is a crowd.");
    }
}

// D. 

let bank_account = 0;

for(let i = 1; i < 11; i++){
    bank_account += i;
}

console.log(bank_account);

let bankAccountDoubled = 0;

for(let i = 1; i < 101; i++){
    bankAccountDoubled = bankAccountDoubled + i * 2;
}

console.log(bankAccountDoubled);

/* III.

A. 
    1. Elements or items
    2. The elements will not always be in order, but the indexes will always be from 0 ... length of array - 1
    3. list of all types (ie: grocery, parking spots, movies)

*/

// B.
const quotes = ["Quoth the raven", "nevermore", "something something"];

// C. 

const randomThings = [1, 10, "Hello", true];

console.log(randomThings[0]);
randomThings[2] = "World";
// we check via console logging
console.log(randomThings[2]);

// D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

console.log(ourClass[2]);
ourClass[4] = "Octocat";
ourClass.push("Cloud City");

console.log(ourClass);

