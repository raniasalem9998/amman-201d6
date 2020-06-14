'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    var summation = a + b;
    var messege1 = 'The sum of '+ a + ' and '+ b + ' is '+ summation +'.'
    return [summation , messege1];
}
sum();
// Here is the test for sum(); uncomment it to run it
testSum(4, 7);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    var multi = a * b;
    var messege2 = 'The product of '+ a + ' and '+ b + ' is '+ multi +'.'
    return [multi , messege2];
}
multiply();
// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between
//  GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers
// as separate arguments and returns an array where the first element is the sum of 
those three numbers, the second element is the product of those three numbers,  and the third and fourth
 elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. 
To do addition, use your sum() function, and to do multiplication, use your multiply() function that
 you've already created. You're going to have to be resourceful to figure out how to do this. 
 However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is
 finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(d, e, f) { //eslint-disable-line
    var sum1 = sum(d, e)[0];
    var sum2 = sum(sum1, f)[0];

    var multi1 = multiply(d, e)[0];
    var multi2 = multiply(multi1,f)[0];
    
    var messege3 = d +' and '+ e + ' and ' +f+' sum to '+sum2+'.' ;
    var messege4 = 'The product of '+d+' and '+e+' and '+f+' is '+multi2+'.' ;
    return [ sum2 , multi2 ,messege3, messege4];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
    var sumArr = testArray[0]+testArray[1]+testArray[2];
    var messege5 = '2,3,4 was passed in as an array of numbers, and 9 is their sum.';
    return [sumArr , messege5]
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code 
// between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as

its argument and returns an array whose first element is the product of those numbers,
 and the second element is a string that EXACTLY follows this example and uses the values 
 that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function.
 To do multiplication, use your multiply() function that you've already created.
  You're going to have to be resourceful to figure out how to do this. This function 
  should handle an array containing three elements. However, you may continue to use 
  the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here

function multiplyArray(multArr) { //eslint-disable-line
    // for (var i=0; i<testArray.length;i++)
    var multi = multiply(multArr[0],multArr[1])[0]; 
    var multi2 = multi * multArr [2];
    var massege6 = "The numbers "+multArr[0]+','+multArr[1]+','+multArr[2]+" have a product of "+multi2+'.';

return [multi2,massege6];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as 
its argument and returns an array whose first element is the product of those numbers, and the
second element is a string that EXACTLY follows this example and concatenates a message using 
the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * 
in this function. To do multiplication, use your multiply() function that you've already created.
You're going to have to be resourceful to figure out how to do this. However, you may continue 
to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished,
 uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line
// function multiplyAnyArray(dynamicArray) { //eslint-disable-line
// console.log(testDynamicArray.length)
// for (var i=0 ; i <= (testDynamicArray.length)-1 ; i++ ){
    function multiplyAnyArray(dynamicArray) { //eslint-disable-line
        var prod=1;
        var messege7="The numbers ";
        for (var i=0; i<dynamicArray.length;i++){
        prod = multiply(prod,dynamicArray[i])[0]; 
        if (i < dynamicArray.length -1){
            messege7 = messege7 + dynamicArray[i] + ',';
        }
            else{
                messege7 =messege7 + dynamicArray[i];
            }
        }
        
        messege7 = messege7 + ' have a product of ' + prod +'.';
        console.log(prod,messege7)
        return[prod,messege7];
    
    }
    testMultiplyAnyArray(testDynamicArray);
    
// var product = multiply(testDynamicArray[i] , testDynamicArray[i+1])[0];
// console.log(product);

// // if (i==(testDynamicArray.length)-1){
// //     var final = product * testDynamicArray[i==testDynamicArray.length]
// // }
// // console.log(final)
// var messege7 = 'The numbers 1,2,3,4,5 have a product of 120.'

// }
// console.log(messege7)
// return [product,messege7];

// funtion testMultiplyAnyArray(dynamicArray) {
//     var dynamicArray =  [1,2,3,4,5];
//     var i =0
//     while (i < dynamicArray.length) {
//         var product = multiply(dynamicArray[i] , dynamicArray[i+1])[0];
//         i++
//         if (i = (dynamicArray.length)-1){
//             var finalProduct = multiply(dynamicArray[i] , dynamicArray[i+1])[0];
//             break;
//         }
//     }
//     var messege7 = 'The numbers 1,2,3,4,5 have a product of 120.'


// return [finalProduct,messege7];

// }

// }

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
