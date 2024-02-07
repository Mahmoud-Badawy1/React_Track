function fibonacciUsingForLoop(n) {
    let fibSequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence;
}

// Example:

let fibonacciForLoopResult = fibonacciUsingForLoop(10);
console.log(`Fibonacci Sequence using For Loop: ${fibonacciForLoopResult}`);

function fibonacciUsingRecursion(n) {
    if (n <= 1) {
        return [0, 1].slice(0, n + 1);
    }

    let fibArray = fibonacciUsingRecursion(n - 1);
    fibArray.push(fibArray[n - 1] + fibArray[n - 2]);
    return fibArray;
}

// Example:
let fibonacciRecursionResult = fibonacciUsingRecursion(10);
console.log(`Fibonacci Sequence using Recursion: ${fibonacciRecursionResult}`);
