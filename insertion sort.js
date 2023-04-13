// insertion sort algorithm
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
   // assuming first value to be the lowest, assigning the next value as current value   
      let currentValue = arr[i]
 //  comapring the current value and the previous value 
 
      for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
          // if the current value is lower than previous value, copy the previous value to the current value 
        arr[j + 1] = arr[j]
      }
        // copying arr[i] to arr[j+1]
      arr[j + 1] = currentValue
    }
    return arr
  }

  // worst case time complexity O(n^2)
  console.log(insertionSort([2, 1, 3, 7, 5]))

  // best case time complexity O(n)
  console.log(insertionSort([2,1,3,4]))
