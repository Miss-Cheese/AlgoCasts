// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // Solution #1
    // const strArray = str.split(' ')
    // const capArray = []

    // for (let element of strArray) {
    //     capArray.push(element[0].toUpperCase() + element.slice(1))
    // }

    // return capArray.join(' ')


    // Solution #2
    let result = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
           result += str[i].toUpperCase()
        } else {
            result +=str[i]
        }
    }

    return result
}

module.exports = capitalize;
