// Make a program to find factorila of 10
// 1- using while loop
let factorial = 1;
let i = 1;
let number = 10;
while (i <= number) {
    factorial *= i;
    i++;
}

console.log(`Factorial of ${number} is: ${factorial}`);


//2- using for loop



for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`Factorial of ${number} is: ${factorial}`);

