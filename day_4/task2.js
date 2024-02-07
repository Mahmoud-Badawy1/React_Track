// arr = [5, -2, 3, 4, 10] = 20

// sum of elements of arr
function sumArray(arr) {
    let sum = 0;

    for (let element of arr) {
        sum += element;
    }

    return sum;
}

// Example usage:
let arr = [5, -2, 3, 4, 10];
let result = sumArray(arr);

console.log(`Sum of elements in the array: ${result}`);
