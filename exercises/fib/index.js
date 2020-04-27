// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
// first dab at the solution with while loop
//     let fibArray = [0, 1]

//     while (fibArray.length <= n) {
//         let nextNumber = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
//         fibArray.push(nextNumber)
//     }

//    return fibArray[n]

// Solution with for loop
//     const results = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         const a = results[i - 1]
//         const b = results[i - 2]
//         results.push(a + b)
//     }
//     return results[n]
// }

// Solution with recursion & memoization
function momoize(fn) {
    const cache = {}

    return function(...args) {
        if (cache[args]) {
            return cache[args]
        } 

        const result = fn.apply(this, args)
        cache[args] = result

        return result
    }
}

function fib(n) {
    if (n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}


fib = momoize(fib)

module.exports = fib;