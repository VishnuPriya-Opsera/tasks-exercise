// insertion sort algorithm
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
    
      for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }

  // worst case time complexity O(n^2)
  console.log(insertionSort([2, 1, 3, 7, 5]))

  // best case time complexity O(n)
  console.log(insertionSort([2,1,3,4]))
