const obj={fname:'Jaya', lname:'Shukla'};
const obj2={...obj, age:26};

console.log(obj2); // {fname:'Jaya', lname:'Shukla', age:26};
console.log(obj); // {fname:'Jaya', lname:'Shukla'};

===========================================================

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

=============================================================

//Convert number to string
let num = 123;

let str1 = num + '';
let str2 = String(num);
let str3 = `${num}`;
let str4 = JSON.stringify(num);
let str5 = `${+num}`;


console.log(str1, typeof str1); // "123" "string"
console.log(str2, typeof str2); // "123" "string"
console.log(str3, typeof str3); // "123" "string"
console.log(str4, typeof str4); // "123" "string"
console.log(str5, typeof str5); // "123" "string"

==================================================================

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Helper function to sort the characters of a string
    const sortString = (str) => str.split('').sort().join('');
  
    return sortString(str1) === sortString(str2);
  }
  
  const val1 = 'abcdy';
  const val2 = 'yncda';
  
  const result = areAnagrams(val1, val2);
  console.log(result); // false
  
===============================================================================

let arrNum = [1, 3, 2, 5, 4, 7];

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        // Each pass through the array guarantees that the largest element in the
        // remaining unsorted portion will be moved to the end, so we can decrease n
        n--;
    } while (swapped);

    return arr;
}

let sortedArray = bubbleSort(arrNum);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 7]

===============================================================================

const name = {
    firstName: “Santosh”,
    lastName: “Sharma”, 
  }

  const printFullName = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from "+ hometown+", " + state)
  }

  let name2 = {
    firstName: "Akshay",
    lastName: "Saini"
  }
  //name.printFullName();
  //name.printFullName.call(name2);
  printFullName.call(name2, "Dehradun", "uttrakhand");
  printFullName.apply(name2, ["Dehradun", "uttrakhand"]);
  let printMyName=printFullName.bind(name2, "Dehradun", "uttrakhand");
  printMyName();

=====================================================================================

class EventEmitter{
    constructor(){
        this.events={};
    }
     subscribe(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName]=[];
        }
       this.events[eventName].push(callback);
        return {unsubscribe : ()=>{
            this.events[eventName]=this.events[eventName].filter(cb=>cb !== callback )
        }
    }}
     emit(eventName, args=[]){
        if(!this.events[eventName]){
            return [];
        }
        const callbacks=this.events[eventName];
        const result= callbacks.map(callback=>callback(...args));
        return result;
    }
}

const emitter1 = new EventEmitter();
emitter1.emit("firstEvent"); // [], no callbacks are subscribed yet
emitter1.subscribe("firstEvent", function cb1() { return 5; });
emitter1.subscribe("firstEvent", function cb2() { return 6; });
console.log(emitter1.emit("firstEvent")); // [5, 6], returns the output of cb1 and cb2
//Example 2:
const emitter2 = new EventEmitter();
emitter2.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
console.log(emitter2.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
console.log(emitter2.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]
//Note that the emit method should be able to accept an OPTIONAL array of arguments.
//Example 3:
const emitter3 = new EventEmitter();
const sub = emitter3.subscribe("firstEvent", (...args) => args.join(','));
console.log(emitter3.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
sub.unsubscribe(); // undefined
console.log(emitter3.emit("firstEvent", [4, 5, 6])); // [], there are no subscriptions


=======================================================================================

//1 question
const labels = [];
labels[-1] = "abcd";
console.log(labels);
//output=[] --->In your code, labels[-1] = "abcd" adds a property -1 to the labels array
// object. This property is not considered an array element and does not affect the 
//array's length. The array remains empty in terms of elements, but it has a custom 
//property with the key -1.

//2nd question
let arrVal = [2, 6, 2, 1];
// Convert array to Set to remove duplicates, then convert Set back to array
let uniqueArr = [...new Set(arrVal)];
console.log(uniqueArr); // Output: [2, 6, 1]

//3rd Question
//IIFE benefits and drawbacks
//While IIFEs are a useful tool in certain scenarios, their drawbacks include potential 
//impacts on readability, maintainability, reusability, testability, and error handling. 
//With the advent of modern JavaScript 
//features like ES6 modules and block-scoped variables (let and const), many of the 
//use cases for IIFEs can be addressed more effectively using these newer constructs.

//tree-shaking
//Tree shaking is an essential optimization technique in modern JavaScript development,
// helping to reduce bundle sizes and improve application performance. By leveraging static 
//analysis and the ES6 module system, developers can ensure that only the necessary code
// is included in the final build, leading to more efficient and performant web applications.

//OutputBasedQuest
obj1={a:10};
const obj2=obj1;
obj2.a=20;
console.log(obj1);
console.log(obj2);
let obj1;
//Uncaught ReferenceError: Cannot access 'obj1' before initialization"


=======================================================================================

function deepCopy(obj) {
  // Check if the input is an object or an array, otherwise return the value directly
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create a new object or array depending on the input type
  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively copy each property
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const obj = {
  fName: "Santosh",
  lName: "Sharma",
  address: {
    city: {
      cityName: "Bangalore",
      placeToVisit: ["Coorg", "Munnar"],
    },
  },
};

const deepCopiedObj = deepCopy(obj);

// Modifying the deep copy to show that it's indeed a deep copy
deepCopiedObj.address.city.cityName = "Lucknow";
deepCopiedObj.address.city.placeToVisit.push("Nainital");

// Original object remains unchanged
console.log(obj.address.city.cityName); // Output: 'Bangalore'
console.log(obj.address.city.placeToVisit); // Output: ["Coorg", "Munnar"]

// Deep copied object reflects the changes
console.log(deepCopiedObj.address.city.cityName); // Output: 'Lucknow'
console.log(deepCopiedObj.address.city.placeToVisit); // Output: [["Coorg", "Munnar", "Nainital"]


//2nd Method==>
    const original = {
        a: 1,
        b: {
          c: 2,
          d: [3, 4]
        }
      };
      
      const deepCopy = JSON.parse(JSON.stringify(original));
      deepCopy.b.c = 3;
      console.log(original.b.c); // Output: 2
      console.log(deepCopy.b.c); // Output: 3
      


=======================================================================================

import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const exchangeRate = 0.85; // Hard-coded exchange rate USD to EUR

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const convertCurrency = () => {
    const convertedAmount = amount * exchangeRate;
    return convertedAmount.toFixed(2); // Round to 2 decimal places
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <form>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label>From Currency:</label>
          <select value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD</option>
           <option value="EUR">EUR</option>
		   <option value="INR">INR</option>
          </select>
        </div>
        <div>
          <label>To Currency:</label>
          <select value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="EUR">EUR</option>
            {/* Add more currencies as needed */}
          </select>
        </div>
      </form>
      <div className="conversion-result">
        <p>
          Converted Amount: {amount && convertCurrency()} {toCurrency}
        </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;



=======================================================================================

/* let multiply=function(x,y){
console.log(x*y);
} */
/* let multiplyByTwo=multiply.bind(this,2);
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5); */

let multiply=function(x){
    return function(y){
    console.log(x*y);
    }
    }
    let multiplyByTwo=multiply(2);
    multiplyByTwo(3);
    let multiplyByThree=multiply(3);
    multiplyByThree(3);

//for multiple arguments
function multiply(x) {
  let product = x;

  function innerFunction(y) {
      product *= y;
      return innerFunction;
  }

  innerFunction.valueOf = function() {
      return product;
  };

  return innerFunction;
}

// Example usage:
console.log(multiply(2)(7)(3)(5)(4).valueOf()); // Output: 840

=======================================================================================

//recursion
function sum(a){
	return function innerSum (b){
    if(b){
    return sum(a+b)
    }
    else return a;
  
  }
  
}
const output=sum(1)(2)(3)(4)(5)(6)(7)(10)();
console.log(output);

//output:38


=======================================================================================

//print 1 to 5 after 1 sec of delay
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  } 

=======================================================================================

//console through closure
function add() {
  let counter = 0;

  function inner() {
    counter++;
    return counter;
  }

  return inner;
}

const myCounter = add();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

//const str='ABC AND XYZ ABC WXY AND'; find second occurance of ABC


=======================================================================================
Custom Hook

import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {    
      try {
       setLoading(true);
       setError(null);
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;



//Used in component
import React from 'react';
import useFetch from './useFetch'; // Adjust the path based on your file structure

const App = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

==============================================================

//Mocking-->Mocking involves creating fake objects or functions that simulate the
// behavior of real objects or functions. This is useful when you want to isolate 
//the code you are testing from external dependencies. Mock objects can be programmed 
//to return specific values or to throw exceptions, and you can use them to verify that 
//your code interacts with them in the expected way.
// Import the module to be tested
import fetchData from './fetchData';
import { getData } from './api';

jest.mock('./api'); // Mock the api module

test('fetchData should return data', async () => {
  // Arrange: Set up the mock to return specific data
  getData.mockResolvedValue({ data: 'mock data' });

  // Act: Call the function under test
  const result = await fetchData();

  // Assert: Verify the result
  expect(result).toEqual('mock data');
  // Verify interaction with the mock
  expect(getData).toHaveBeenCalledTimes(1);
});


//Spying---> Spying involves keeping track of the interactions with real objects 
//or functions without changing their behavior. A spy can record information about how
// a function was called (e.g., the arguments it was called with, how many times it was
// called). Spies are useful when you want to observe the behavior of your code without
// modifying it.
// Import the module to be tested
import fetchData from './fetchData';
import { getData } from './api';

test('fetchData should call getData with correct arguments', async () => {
  // Arrange: Spy on the getData function
  const getDataSpy = jest.spyOn(api, 'getData');

  // Act: Call the function under test
  await fetchData();

  // Assert: Verify the interaction with the spy
  expect(getDataSpy).toHaveBeenCalled();
  expect(getDataSpy).toHaveBeenCalledWith('expected argument');

  // Clean up: Restore the original function
  getDataSpy.mockRestore();
});



import React, { useState } from 'react';

// Array of countries
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "India",
  "Germany",
  "France",
  "Japan",
  "China",
  "Brazil"
];

const CountryDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <label htmlFor="country">Choose a country:</label>
      <select id="country" value={selectedCountry} onChange={handleChange}>
        <option value="" disabled>Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
      {selectedCountry && <p>You selected: {selectedCountry}</p>}
    </div>
  );
};

export default CountryDropdown;


=======================================================================================

/* const mySet = new Set([1,1,1, 2, 3, 3, 4]); */
/* console.log(Array.from(mySet)); */
/* console.log([...mySet]); */
const arr=[2,6,4,9,3,2,7,3,6];
const newArray=arr.filter((num,index,array1)=>{
	return index === array1.indexOf(num);
})
console.log(newArray);
//[2, 6, 4, 9, 3, 7]

//2nd way
const arr1= [4,5,6,4,5,8];
let output=[];
for(let i=0;i<arr1.length;i++){
	if(arr1.indexOf(arr1[i]) === i ){
  	output.push(arr1[i]);
  }
}

console.log(output);//[4, 5, 6, 8]


=======================================================================================

const str='accessibility';
const objectVal={};
for(let i=0; i<str.length;i++ ){
    let char= str[i];
    if(objectVal[char]){
objectVal[char] += 1;
    }else{
        objectVal[char]=1;
    }
}
console.log(objectVal);
// output:{
//     a: 1,
//     b: 1,
//     c: 2,
//     e: 1,
//     i: 3,
//     l: 1,
//     s: 2,
//     t: 1,
//     y: 1
//   }
// const str = "mobility";
// const charCount = {};

// // Iterate through each character in the string
// for (let i = 0; i < str.length; i++) {
//     const char = str[i];
    
//     // If the character already exists in the charCount object, increment its count
//     // Otherwise, initialize its count to 1
//     if (charCount[char]) {
//         charCount[char]++;
//     } else {
//         charCount[char] = 1;
//     }
// }

// console.log(charCount); output:{
//   'm': 1,
//   'o': 1,
//   'b': 1,
//   'i': 1,
//   'l': 1,
//   't': 1,
//   'y': 1
// }


=======================================================================================


const arr=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "red",
		value: "#000"
	}
]
const uniqueArr = arr.filter((obj, index, self) =>
    index === self.findIndex((t) => (
        t.color === obj.color
    ))
);

console.log(uniqueArr);

===============================================================


import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;



=======================================================================================


const num=[2,4,3,1,8,7];
const evenNum=num.filter(num=>num%2===0);
console.log(evenNum);

============================================
const oddNum=num.filter(num=>num%2!==0);
console.log(oddNum);

//Sum of numbers
const sumOutput=num.reduce((prevVal,currVal)=>prevVal+currVal);
console.log(sumOutput);

//Factorial of a number

const number=prompt('Enter your number');
let fact=1;
for(let i=1; i<=number;i++){
    fact=fact*i;
}
console.log(fact);


=======================================================================================

const str = 'stress';

function firstNonDuplicateChar(str) {
  // Step 1: Create an object to store character counts
  const charCount = {};

  // Step 2: Populate character counts
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 3: Find the first non-duplicate character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-duplicate character is found
}

console.log(firstNonDuplicateChar(str)); // Output: "t"


=======================================================================================

function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
//1
//2
//3

=======================================================================================


var y =1;
var x = function(){
  console.log(y);
  var y=3;
  console.log(y)
}
console.log(y)
x();

// 1
// undefined
// 3


=======================================================================================


const arr1=[{name:'jaya', age:26, city:'Lucknow'}, {name:'jaya2', age:27, city:'Kanpur'},{name:'jaya3', age:28, city:'Lucknow'}];
const output=arr1.map((val, index, arr)=> 
val.city === 'Lucknow' ? [...arr, val.address='abc'] : [...arr, val.address='xyz']  

);
console.log(output);
// const arr1=[{name:'jaya', age:26, city:'Lucknow'}, {name:'jaya2', age:27, city:'Kanpur'},{name:'jaya3', age:28, city:'Lucknow'}];
// const output=arr1.map((val,index,arr)=>{ 
// val.city === 'Lucknow' ? val.address='abc': val.address='xyz';
// return arr;
// });
// console.log(output);
// output======>>>>
// [[{
//     address: "abc",
//     age: 26,
//     city: "Lucknow",
//     name: "jaya"
//   }, {
//     address: "xyz",
//     age: 27,
//     city: "Kanpur",
//     name: "jaya2"
//   }, {
//     address: "abc",
//     age: 28,
//     city: "Lucknow",
//     name: "jaya3"
//   }], [circular object Array], [circular object Array]]


===============================================


function convertArray(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += 2) {
      const sum = arr[i] + (arr[i + 1] || 0); // Add arr[i] and arr[i+1] if exists
      result.push(sum);
    }
    
    return result;
  }
  
  const array =  [3, 6, 3, 87, 3, 23, 2, 2, 6, 8];
  const output = convertArray(array);
  console.log(output); 
  

//const output = [9, 90, 26, 4, 14];

//2nd Question
let students = [
    { name: 'alix', age: 21 },
    { name: 'john', age: 22 },
    { name: 'dust', age: 21 },
    { name: 'flae', age: 25 },
    { name: 'alison', age: 22 },
  ];
  
  const output2 = {};
  
  for (let i = 0; i < students.length; i++) {
    if (output2[students[i].age]) {
      output2[students[i].age].push(students[i]);
    } else {
      output2[students[i].age] = [students[i]];
    }
  }
  
  console.log(output2);
  
  // Output should be:
  // {
  //   '21': [
  //     { name: 'alix', age: 21 },
  //     { name: 'dust', age: 21 },
  //   ],
  //   '22': [
  //     { name: 'john', age: 22 },
  //     { name: 'alison', age: 22 },
  //   ],
  //   '25': [
  //     { name: 'flae', age: 25 },
  //   ],
  // }
  

  //Question 3
  const input = [
    { name: 'jaya', score: [2, 4, 1, 2] },
    { name: 'jay', score: [1, 4, 1, 2] },
    { name: 'jazz', score: [1, 1, 1, 2] }
  ];
  
  function calculateAverageScores(data) {
    const output = {};
    
    data.forEach(person => {
      const total = person.score.reduce((acc, curr) => acc + curr, 0);
      const average = total / person.score.length;
      output[person.name] = average.toFixed(1); // Format to 1 decimal place
    });
  
    return output;
  }
  
  const result = calculateAverageScores(input);
  console.log(result); // {"jaya": "2.3", "jay": "2.0", "jazz": "1.3"}
  
===========================================



const num=[20,21,455,45,3456,1];
const MaxNum=num.reduce((prev,curr)=>{
    return prev<curr?curr:prev;
});
console.log(`Max number is : ${MaxNum}`);

const MinNum=num.reduce((prev,curr)=>{
    return prev>curr?curr:prev;
});
console.log(`Min number is : ${MinNum}`);

//through loop Max number
const arr = [1, 3, 7, 2, 5, 10, 6];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max); // 10

=======================================

//Second Largest Value

const MaxVal=Math.max(...num);
console.log(MaxVal);
const valIndex=num.indexOf(MaxVal);
const newVal=num.splice(valIndex,1);
const newMaxVal=Math.max(...num);
console.log(newMaxVal);

//Difference in find & filter
const emp=[
    {name:'Jaya', age:26},
    {name:'Rachit', age:27},
    {name:'chun', age:10},
    {name:'Khushi', age:60},
    {name:'Jazz', age:40}
]
const outputArr=emp.filter(ele=>ele.age>30);
console.log(outputArr);

const outputArrFind=emp.find(ele=>ele.age>30);
console.log(outputArrFind);

//Find missing numbers in an array
arrVal=[6,2,1,4,5,7,10,9];
const missingArray=[];
const minVal=Math.min(...arrVal);
const maxVal=Math.max(...arrVal);
for(let i=minVal; i<maxVal; i++){
    if(arrVal.indexOf(i)<0){
        missingArray.push(i);
    }   
}
console.log(missingArray);




//swapping of 2 variables
let a=4, b=6;
[a,b]=[b,a];
console.log(a,b);

//Merging of an array
const arr=[2,5,63,8,12,54], arr2=[4,7,66,4,32,46];
const output=[...arr, ...arr2];
const sorted1=output.sort((a,b)=>a-b);
console.log(sorted1);
const resultant=arr.concat(arr2,99);
const sorted2=resultant.sort((a,b)=>a-b);
console.log(sorted2);

//Comparing two arrays
const arr1 = [2, 5, 3, 21];
const array2 = [5, 3, 21, 2];
const outputArray= arr1.length === array2.length && arr1.every(item=>array2.includes(item));
console.log(outputArray);
// output:true

//intersection of two arrays
const arr11=[2,5,3,21,4,3,21,45,45,45], array21=[5,3,21,2];
const resultVal=arr11.filter(item=>array21.includes(item));
console.log([...new Set(resultVal)]);
// const output=arr11.filter((ele,index,arr)=>array21.includes(ele) && index === arr.indexOf(ele) );

//Capitiatization
const input=prompt("Enter your string");
const val=input.split(" ");
const outputStr=val.map(ele=>ele.charAt(0).toUpperCase()+ ele.slice(1));
console.log(outputStr.join(" "));


===================================================

const str=prompt('Enter your name');
const nametoarray=str.split("");
const reverseName=nametoarray.reverse();
const joinName=reverseName.join("");
console.log(joinName);



const name='Welcome to this javascript interview.';
 let output=name.split(" ").map(ele=>ele.split('').reverse().join('')).join(" ");
 console.log(output);
 
 //"emocleW ot siht tpircsavaj .weivretni"


function reverseString(str) {
    // Initialize an empty string to hold the reversed string
    let reversed = '';
  
    // Loop through the string from the end to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
      // Append each character to the reversed string
      reversed += str[i];
    }
  
    // Return the reversed string
    return reversed;
  }
  
  // Example usage
  const originalString = "hello";
  const reversedString = reverseString(originalString);
  console.log(reversedString); // Output: "olleh"
  

//   const val='Jaya Shukla';
// let newVal='';
// for (let i=val.length-1; i>=0;i--){
// 	newVal= newVal+ val[i];
// }
// console.log(newVal);
//OUTPUT==>>>"alkuhS ayaJ"





const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]
const citrus2 = fruits.slice(1, 1); // []
console.log(fruits); // ["Banana", "Orange", "Lemon", "Apple", "Mango"]
console.log(citrus); // ["Orange", "Lemon"]
console.log(citrus2); // []
const newFruits = fruits.splice(1, 3, "Grapes", "Cherry"); // ["Orange", "Lemon", "Apple"]
console.log(fruits); // ["Banana", "Grapes", "Cherry", "Mango"]
console.log(newFruits); // ["Orange", "Lemon", "Apple"]


//Quest2
function a() {
    alert("A!");
   
    function b() {
      alert("B!");
    }
   
    return b();
  }
   
  var s = a();
  alert("break");
  s();
//output ->An alert with the message "A!".
//An alert with the message "B!".
//An alert with the message "break".
//A TypeError because undefined is not a function.  

//ques3
const fetchNamesWithThen = () => {
	console. log("Then: Start")
 
	fetch(nameUrl)
		.then(resp =>resp.json())
		.then(data => data.forEach(name =>{
			console.log("Then: inside the last .then")
			const li = document.createElement ("li")
			li.textContent = name.name;
			container.appendChild(li)
			}));
	console. log("Then: End of function")
}
 
 
console.log("Before fetch call")
fetchNamesWithThen()
console.log("After fetch call")
//"Before fetch call" is printed to the console.
//"Then: Start" is printed to the console.
//"Then: End of function" is printed to the console.
//"After fetch call" is printed to the console.
//After the data is fetched and parsed, for each name in the data,
// "Then: inside the last .then" is printed to the console.
// This happens asynchronously, after the initial synchronous log messages.

//Ques4

const fetchNamesWithAwait = async () => {
	console.log("Async: Start");
	let response = await fetch(nameUrl);
	console.log("Async: after first await...");
	let data = await response.json();
	console.log("Async: after second await...");
 
	data.forEach(name =>{
		console.log("Async: after second await and inside forEach...")
		const li = document.createElement ("li")
		li.textContent = name.name;
		container.appendChild(li)
		});
	console. log("Async... End of function");
}
 
 

console.log("Before fetch call")
fetchNamesWithAwait()
console.log("After fetch call")

//Before fetch call
//Async: Start
//After fetch call
//Async: after first await...
//Async: after second await...
//Async: after second await and inside forEach...
//Async: after second await and inside forEach...
//...
//Async... End of function



========================================================


import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const timerRef = useRef(null);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setTimeElapsed(0);
  }

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  function formatTime() {
    let hours = Math.floor(timeElapsed / 3600);
    let minutes = Math.floor((timeElapsed % 3600) / 60);
    let seconds = Math.floor(timeElapsed % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime()}</p>
      <button
        onClick={start}
        style={{
          padding: "10px 10px",
          margin: "5px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Start
      </button>
      <button
        onClick={stop}
        style={{
          padding: "10px 10px",
          margin: "5px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Pause
      </button>
      <button
        onClick={reset}
        style={{
          padding: "10px 10px",
          margin: "5px",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;




============================================

Array.prototype.myMap = function (callback, thisArg) {
  var arr = this; // The array calling the map function
  var result = []; // Array to hold the results

  for (let i = 0; i < arr.length; i++) {
    result.push(callback.call(thisArg, arr[i], i, arr)); // Call the callback with thisArg and push the result
  }

  return result; // Return the resulting array
};

// Test the polyfill
const arrVal = [1, 2, 3, 4];
const output = arrVal.mymap((ele) => ele + 1);
console.log(output); // [2, 3, 4, 5]

//Question 2
var x;
console.log(x); //undefined
function sum() {
  console.log(x); // undefined
  var x = 10;
  console.log(x); //10
}
sum();
x = 30;
console.log(x); //30

//Question 3
for (var i = 0; i < 3; i++) {
    (function(i) { // Create a closure to capture the current value of i
      setTimeout(() => console.log(i), 1000);
    })(i); // Pass the current value of i to the immediately invoked function expression
  }
  

==================================


import { useState } from "react";

const ToDoList = () => {
  const [val, setVal] = useState("");
  const [list, setList] = useState([]);

  const clickHandler = () => {
    if (val.trim().length !== 0) setList([...list, val]);
    setVal("");
  };

  const deleteHandler = (id) => {
    const newList = list.filter((ele, index) => id !== index);
    setList(newList);
  };

  return (
    <>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={clickHandler}>Submit</button>
      <p>Your Entered List</p>
      <ul>
        {list.map((ele, index) => (
          <li key={index}>
            {ele}
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;




// MyComponent.js
import React from 'react';

const MyComponent = () => (
  <div>
    <h1 data-testid="heading">Welcome to Jest Testing</h1>
    <button data-testid="button">Click Me</button>
  </div>
);

export default MyComponent;


//Testing

// MyComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import MyComponent from './MyComponent';

test('renders the heading and button', () => {
  // Render the component
  render(<MyComponent />);

  // Select the heading element using getByTestId
  const headingElement = screen.getByTestId('heading');
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent('Welcome to Jest Testing');

  // Select the button element using getByTestId
  const buttonElement = screen.getByTestId('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Click Me');
});
