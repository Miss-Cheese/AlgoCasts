// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // --- Solution with recursion:
    // if (str.length > 0) {
    //     let myString = str.substring(0,1)
    //     return reverse(str.substring(1, str.length)) + myString
    // } else {
    //     return ""
    // }

    // --- Solution with .reverse()
    // const arr = str.split('')
    // arr.reverse()
    // return arr.join('')

    // cleaned up version:
    // return str.split('').reverse().join('')

    // --- Solution with for loop: 
    // let reversed = ""

    // for (let character of str) {
    //     reversed = character + reversed
    // }

    // return reversed

    // --- Solution with for reduce(): 
    
    // return str.split('').reduce((reversed, character) => reversed = character + reversed, '')

    // Solution with for loop and array not using reverse()
    const arr = str.split('')
    let result = []
    
    for (let element of arr) {
        result.unshift(element)
    }

    return result.join('')
}

module.exports = reverse;

function reverseString (string) {
    // return string.split('').reverse().join('')
    
    const reversed = ''

    for (let character of string) {
        reversed = character + reversed
    }

    return reversed
}