//Excercise 1
console.log("*** Ex 1 ***");
const array = ["Alex", "Per", "Morten", "Mick", "J-P"];

function myCallback(arr) {
  let callbackArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      callbackArray.push(arr[i]);
    }
  }
  console.log(callbackArray);
}

function myFilter(arr, callback) {
  callback(arr);
}

myFilter(array, myCallback);

//with the array filter() method
const newArray = array.filter((value) => value.length > 4);

console.log(newArray);

//Excercise 2
console.log("*** Ex 2 ***");
const numbers = [1, 2, 3, 4, 5];

function MyMapCallback(arr) {
  const test = [];
  for (let i = 0; i < arr.length; i++) {
    test.push(arr[i] + 1);
  }
  console.log(test);
}

function myMap(arr, callback) {
  callback(arr);
}

myMap(numbers, MyMapCallback);

//with the array map() method
const newMapArray = numbers.map((n) => n + 1);

console.log(newMapArray);

//Excercise 3
console.log("*** Ex 3 ***");
console.log("Filter prototype: ")

//Prototype with filter

Array.prototype.myFilterP = function () {
  let callbackArray = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 4) {
      callbackArray.push(names[i]);
    }
  }
  console.log(callbackArray);
};

let names = ["Lars", "Peter", "Jan", "Bo"];

names.myFilterP();

//Prototype with map

console.log("Map prototype: ")
Array.prototype.MyMapP = function () {
    const test = [];
    for (let i = 0; i < numbers.length; i++) {
      test.push(numbers[i] * 2);
    }
    console.log(test);
  }

  numbers.MyMapP();
