// Hoisting

/* function hoisting() {
  const a = false;
  if (a) {
    var hasBeenInA = true;
    console.log("In A")
  }
  if (hasBeenInA) {
    console.log("In B")
  }
}

hoisting() */

// Hoisting 2
/* function hoisting() {
  const a = false;
  if (a) {
    let hasBeenInA = true;
    console.log("In A")
  }
  if (hasBeenInA) {
    console.log("In B")
  }
}

hoisting() */

// 5 Closures
 
/* function makeFunc() {
  var name = "Mozilla";
 
  function logName() {
    console.log(name);
  }
  return logName;
}
 
var f = makeFunc();
f(); */

// Udvidet version som vi lavede i klassen

/* function makeFunc() {
  var name = "Mozilla";
 
  function logName() {
    console.log(name);
  }
  function changeName(n) {
    name = n
  }
  return {
    logName,
    changeName
  };
}
 
var obj = makeFunc();
obj.logName()
obj.changeName("Hi Class")
obj.logName() */


/* function test() {
  console.log("Before Loop")

  for(let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log('i=${i}')
    }, 1000)
  }
  console.log("After Loop, I = ")
}
test() */
