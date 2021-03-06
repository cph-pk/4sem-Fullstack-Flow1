// var declarations are hoisted but not assigned 
//-----------------------------------------------
function hoisting() {
    // 'var hasBeenInA' has been hoisted to here and declared with no values
    const a = true;
    if(a) {
        var hasBeenInA = true;
        console.log("In A")
    } 
    if(hasBeenInA) { // 'hasBeenInA' is declared, because of hoisting and is set to true
        console.log("In B")
    }
}
hoisting();


function hoisting1() {
    // 'var myCoolObject' has been hoisted to her and declared, but has no value
    console.log("Value of myCoolObject: " + myCoolObject); // 'myCoolObject' is undefined but is declared
    
    if(!myCoolObject) { // 'myCoolObject' is declared 
        var myCoolObject = {value: "Wau, I'm cool"}; // 'var myCoolObject' is first set to a value here. 
        // if you use 'let' you will be in a blockscope and 'myCoolObject' will not be defined (no hoisting)
        console.log(myCoolObject.value);
    }
}
hoisting1();

// function declaration is always hoisted
//----------------------------------------
function hoisting2() {
    f1(); // Works because all functions is hoisted
    f2(); // Try calling a function that doesn't exist

    function f1() { // All functions is hoisted
        console.log("I'm f1");
    }
    var f2 = function() { // 'var f2' is hoisted and declared, but is not a function
        console.log("Yes, but I'm f2");
    }
}
hoisting2();


// What is hoisting (exam question)
//----------------------------------------

/*

Hoisting (løfte op på dansk) means to lift a variable or a reference point to the top of the function scope. 
If there is no function it will be lifted to the top of the global scope.
If you don't want to lift a variable make use of let of const, since it will stay in the blockscope (just like we know from java).
A function will always be lifted to the top of the scope but if you have declared the function with a variable(reference point),
the reference point will be lifted but not the function itself.

The design rule for clean code when using var (before ES6) is to declare the variables at the top of the scope and the
definitions(defined) at the bottom of the scope. Then there will be no confusion about when you can call a variable.


*/