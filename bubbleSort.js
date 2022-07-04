const arr1 = [5, 9, 1, 3, 7, 2, 4, 8, 6]
const arr2 = [5, 9, 1, 'asd', 8, 6]

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

console.log(bubbleSort(arr1))