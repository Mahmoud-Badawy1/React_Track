// arr = [5, -2, 3, 4, 10] = 20

// op = {
// 	array1: [5, 9, 10, -1, -15],
// 	array2: [4, 5, 2, -20],
// 	array3: [5, 9, -10, -15, 29],
// };
//make function that sum of arr in every key in op then sum all values of the all arrys in the op  
function sumArraysInObject(obj) {
    let totalSum = 0;

    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            let arraySum = obj[key].reduce((acc, curr) => acc + curr, 0);
            totalSum += arraySum;
        }
    }

    return totalSum;
}

// Example:
let op = {
    array1: [5, 9, 10, -1, -15],
    array2: [4, 5, 2, -20],
    array3: [5, 9, -10, -15, 29],
};

let result = sumArraysInObject(op);
console.log(`Sum of arrays in op: ${result}`);




