function bubbleSortUsingForLoop(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example:
let unsortedArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArrayForLoop = bubbleSortUsingForLoop(unsortedArray.slice());
console.log(`Bubble Sort using For Loop: ${sortedArrayForLoop}`);


function bubbleSortUsingRecursion(arr, n) {
    if (n === 1) {
        return arr;
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            // Swap elements if they are in the wrong order
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    return bubbleSortUsingRecursion(arr, n - 1);
}

// Example:

let sortedArrayRecursion = bubbleSortUsingRecursion(unsortedArray.slice(), unsortedArray.length);
console.log(`Bubble Sort using Recursion: ${sortedArrayRecursion}`);

// let unsortedArray = [64, 34, 25, 12, 22, 11, 90];

// function bubbleSortSinglePass(arr, i, n) {
//     if (i === n - 1) {
//         return arr;
//     }

//     for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             // Swap elements if they are in the wrong order
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }

//     // Call the function recursively for the next pass
//     return bubbleSortSinglePass(arr, i + 1, n);
// }
// console.log(bubbleSortSinglePass(unsortedArray,0,unsortedArray.length))

// function bubbleSortUsingRecursion(arr, n) {
//     if (n <= 1) {
//         return arr;
//     }

//     // Call the separate function for a single pass
//     arr = bubbleSortSinglePass(arr, 0, n);

//     // Call the function recursively for the next pass
//     return bubbleSortUsingRecursion(arr, n - 1);
// }

// // Example:


// // Perform bubble sort using recursion
// let sortedArrayRecursion = bubbleSortUsingRecursion(unsortedArray.slice(), unsortedArray.length);
// console.log(`Bubble Sort using Recursion: ${sortedArrayRecursion}`);
