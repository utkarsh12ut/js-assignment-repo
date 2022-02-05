// This is an in-line comment.

/* This is a
multi-line comment */

// var myName;
// a=7;

// var b;

// b=7;
// b=a 

// var a=9;

var myFirstName= "utkarsh";
var myLastName="pandey";



// var a=5;
// var b=10;
// var c="I am a";


// a = a + 1;
// b = b + 5;
// c = c + " String!";



var studlyCapVar;
var properCamelCase;
var titleCaseOver;


studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);


const sum = 10 + 10;
console.log(sum);

const difference = 45 - 33;
console.log(difference);

// const quotient = 66 / 33;
// console.log(quotient);
var a=9;




 let myVar = 11;


 myVar --;

 const myDecimal = 5.7;

 const product = 2.5 * 2.0;
 console.log(product);

 const quotient = 4.4 / 2.0;

 const remainder = 11%3;

//  let a = 11;
//  let b = 9;
//  let c = 3;
 

//  a -= 6;
//  b -=  15;
//  c -=  1;

let a2 = 48;
let b = 108;
let c = 33;


a /= 12;
b /=  4;
c /=  11;



// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; 

// const myStr = "This is the start. " +  "This is the end.";

// let myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";
// console.log(myStr)


// const someAdjective = "fun";
// let myStr = "Learning to code is ";
// myStr+=someAdjective;

const myName = "utkarsh";
const myStr = "my name is "+myName+" and I am well!";const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
console.log(myStr);

/*

let lastNameLength = 0;
const lastName = "Lovelace";


lastNameLength = lastName.length;
console.log(lastNameLength);

*/
let firstLetterOfLastName = "";
const lastName11 = "Lovelace";


firstLetterOfLastName = lastName11[0];
console.log(firstLetterOfLastName);

let myStr1 = "Jello World";
myStr1="Hello World";


const lastName1 = "Lovelace";


const thirdLetterOfLastName = lastName1[2]; 

console.log(thirdLetterOfLastName);

const lastLetterOfLastName = lastName1[lastName1.length-1]; 
console.log(lastLetterOfLastName);


const lastName2 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName2 = lastName2[lastName2.length-2]; // Change this line
console.log(secondToLastLetterOfLastName2);


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myNoun+" "+myAdjective+" "+myVerb+" "+myAdverb; 
console.log(wordBlanks);

const myArray = ["hi",2];
console.log(myArray);


// const myArray2 = [[23,45],[77,88]];
// console.log(myArray2);


const myArray3 = [50, 60, 70];
const myData= myArray3[0];
console.log(myData);

const myArray4 = [18, 64, 99];

// Only change code below this line
myArray4[0]=45;

console.log(myArray4);


const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray5[2][1];

  console.log(myData2);


  const myArrayy = [["John", 23], ["cat", 2]];

// Only change code below this line
 myArrayy.push(["dog", 3])

console.log(myArrayy);

const myArray7 = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray=myArray7.pop()

console.log(myArray7);



const myArray8 = [["John", 23], ["dog", 3]];

// Only change code below this line
myArray.shift();

const removedFromMyArray2=["John", 23];
console.log(removedFromMyArray2);

const myArray9 = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray9.unshift(["Paul", 35])
console.log(myArray9);


const myList = [["Chocolate Bar", 15],["tofee", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];

console.log(myList);

function reusableFunction(){
    console.log("Hi World");
  }
  
  reusableFunction();

  function functionWithArgs(a,b){
    console.log(a+ b)
    
      }
    functionWithArgs(1,2);
    functionWithArgs(7,9);


    function minusSeven(num) {
        return num - 7;
        }
        
        
        function timesFive(num) {
        return num * 5;
        }


        const myGlobal=10;
function fun1() {
  // Assign 5 to oopsGlobal Here
   oopsGlobal=5;

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
        
