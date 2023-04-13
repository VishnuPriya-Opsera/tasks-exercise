// optimised bubble sort algorithm
function bubbleSort(arr) {
  
    let i, j;
    let len = arr.length;
  
    let isSwapped = false;
  
    for (i = 0; i < len; i++) {
  
        isSwapped = false;
  
        for (j = 0; j < len; j++) {
          //comparing the consecutive numbers
            if (arr[j] > arr[j + 1]) {
              // swapping of consecutive numbers
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
  
        // IF no two elements were swapped by inner loop, then break 
        if (!isSwapped) {
            break;
        }
    }
  
    // Print the array
    console.log(arr)
}
  
let arr = [243, 45, 23, 356, 3, 5346, 35, 5];
  
// calling the bubbleSort Function
bubbleSort(arr)

// best case, time complexity:O(n)
bubbleSort([54,67,89,121,345])

// worst case, time complexity : O(n^2)
bubbleSort([987,765,543,321,21,1])

