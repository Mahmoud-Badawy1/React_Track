// we need to do a loop to print all numbers < 23 if the number that will print divisable by 3 print fizz not the number and if the number that divisable by 5 print buzz not the number
// do this two times 1 with for loop and 1 with while loop and you can use only 3 if and one || without using else or else if or &&

// Using for loop
// for (let i = 1; i < 23; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         if (i % 3 === 0) console.log('Fizz');
//         if (i % 5 === 0) console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// //-----------------------------------------------------
// for (let i = 1; i < 23; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         if (i % 3 === 0) console.log('Fizz');
//         if (i % 5 === 0) console.log('Buzz');
//     }
//     if (!(i % 3 === 0 || i % 5 === 0)) {
//         console.log(i);
//     }
// }
// //-------------------------------------------------
// let i = 27;

// while (i > 0) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         if (i % 3 === 0) console.log('Fizz');
//         if (i % 5 === 0) console.log('Buzz');
//     } else {
//         console.log(i);
//     }

//     i++;
// }
// //----------------------------------------------------



// for (let i = 1; i < 23; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         if (i % 3 === 0) {
//          console.log('Fizz');
//         if (i % 5 === 0) console.log('Buzz');}
//     }
//     if (!(i % 3 === 0 || i % 5 === 0)) {
//         console.log(i);
//     }
// }

// let num = 15; 
// let str = "";
// while(num > 0){
// if(num % 3 == 0 || num % 5 == 0 ){
//     if(num % 3 == 0){
//     str += "fizz";
//     }
//    if(num % 5 == 0){
//             str +="buzz";
//         }
//     console.log(str); 
//     str = "";  
//     num -=1;
//     continue;
// }
// console.log(num);
// num -=1;
// }
// من واحد ل 10 ما عدا اللى يقبل القسمه على 3
// // i want you to print all numbers without numbers that divisable by 3 from 1 to 10
// let num = 15;

// while (num > 0) {
//     let str = "";

//     if (num % 3 === 0) {
//         str += "fizz";
//     }

//     if (num % 5 === 0) {
//         str += "buzz";
//     }

//     console.log(str || num);

//     num -= 1;
// }

// let num = 10;

// while (num > 0) {
//     if (num % 3 == 0) {
//         num -= 1;
//         continue;
//     }

//     console.log(num);

//     num -= 1;
// }

//-----------------------------------------------------------------------
function printNumbers(num) {
    while (num > 0) {
        let str = "";

        if (num % 3 === 0) {
            str += "fizz";
        }

        if (num % 5 === 0) {
            str += "buzz";
        }

        console.log(str || num);

        num -= 1;
    }
}

// Examples :
printNumbers(15);
console.log("================================================================")
printNumbers(20);
console.log("================================================================")
printNumbers(25);
console.log("================================================================")
printNumbers(30);
