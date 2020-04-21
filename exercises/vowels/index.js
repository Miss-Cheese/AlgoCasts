// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // Solution #1 - quick and dirty

    // let vowelArray = []
    // for (let element of str.toLowerCase()) {
    //     if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u')
    //     vowelArray.push(element)
    // }

    // return vowelArray.length


    // Solution #2
    // let count = 0
    // const vowelList = ['a', 'e', 'i', 'o', 'u']

    // for (let char of str.toLowerCase()) {
    //     if (vowelList.includes(char)) {
    //         count++
    //     }
    // }

    // return count


    // Solution with RegEx
    const matches = str.match(/[aeiou]/gi) // match method returns 'null' if no matches are found, so keep that in mindg

    return matches ? matches.length : 0
}

module.exports = vowels;
