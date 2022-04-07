/*
 * Conditionals, Functions, Scope and Loops.
 */

//Equals
let equals = 1 === 1;
console.log(equals);

//Greater than
 let greaterThan = 5 > 1;

//Less Than
let lessThan = 2 < 10;

//Greater than Equals
let greaterThankEq = 5 >= 5;

//Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 3.10;
let storeB = 4.40;


function compareStorePrices (storeA, storeB) {
    let storeAISLower = storeA < storeB;
    if (storeAISLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

//compareStorePrices(10, 5);
//compareStorePrices(7, 10);

function squareNum (number) {
    let squared = number * number
    return squared;
}
let squaredNumber = squareNum(4);
console.log(squaredNumber);

/*...*/
/*...*/
/*...*/

let x = 10
//global scope
function addNumbers (n, m, x) {
    //function scope
    console.log(x);
    //block scope
    let b;
    if (1===1) {
        b = 8;
    }
    console.log(b);
    return n + m;
}
//addNumbers(2, 3,8 );
//console.log(x)
addNumbers(1, 2, 10);

/*...*/
/*...*/
/*...*/
/*...*/
//               0, 1, 2, 3, 4, 5, 6
let ourArray =  [1, 2, 3, 4, 5, 6, 7];
let newArr = ourArray[4];
console.log(newArr[0]);

//loops
//for(counter; comp; incr)
/*let arrLen = ourArray.length;
for (let i = 0; i<arrLen; i++){
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('j is equal to: ' + j);
    }
}
/*...*/
/*...*/
/*...*/
/*...*/
/*...*/
let z = 0
while (z<10) {
    console.log('Ran');
    z = z + 1;
}
