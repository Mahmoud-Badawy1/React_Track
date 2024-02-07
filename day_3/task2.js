// Generate a random number between 0 and 25
// Add the random number to the sum
// The fourth number is calculated to ensure the sum is 100 and to print the 4 numbers 
// عايزين نجيب اداة تعمل اربع ارقام بشكل عشوائي وبعدين نفضل نزود كل رقم بيطلع على الرقم اللى بعده بالترتيب وبعدين فى الاخر نطبع النتيجة
// let sum = 0;

// for (let i = 0; i < 4; i++) {
    
//     let randomNumber = Math.floor(Math.random() * 26); // دى ال function اللى بتعمل الاربع ارقام من 0 ل 26
    
//     sum += randomNumber;

//     console.log(`Number ${i + 1}: ${randomNumber}`);
// }


// // let fourthNumber = 100 - sum; // علشان نطلع كل الارقام اللى بيتعملها generate

// // console.log(`Number 4: ${fourthNumber}`);
// // console.log(`Sum: ${sum + fourthNumber}`);
// console.log(sum)
//===========================================================

// عايزين نجيب اداة تعمل اربع ارقام بشكل عشوائي وبعدين نفضل نزود كل رقم بيطلع على الرقم اللى بعده بالترتيب
// وبعدين نعمل الرقم الرابع او نجبره انه يكمل باقى الارقام اللى طلعت علشان يساوى 100 و فى الاخر نطبع النتيجة


function generateNumbers(num) {
let sums = 0;

for (let i = 0; i < 4; i++) {
    let randomNumber;

    if (i === 3) {
        // علشان نتأكد ان الرقم الرابع هيخلي المجموع يساوى 100
        randomNumber = num - sums;
    } else {
        // دى لأول 3 ارقام علشان يعملهم بطريقة عشوائية
        randomNumber = Math.floor(Math.random() * (26 - 1 + 1)) + 1;
    }

    sums += randomNumber;

    console.log(`Number ${i + 1}: ${randomNumber}`);
}

console.log(`Sum: ${sums}`);
}

// Example:
generateNumbers(200);
generateNumbers(100);
