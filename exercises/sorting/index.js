// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let stopIndex = arr.length - i - 1
       for (let j = 0; j < stopIndex; j++) {
         if (arr[j] > arr[j + 1]) {
             let max = arr[j]
             arr[j] = arr[j + 1]
             arr[j + 1] = max
         }
       }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
}

function mergeSort(arr) {

    if (arr.length === 1) {
        return arr
    }

    const center = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, center)
    const rightArr = arr.slice(center)

    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

function merge(left, right) {
    const results = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }

    return [...results, ...left, ...right]

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
