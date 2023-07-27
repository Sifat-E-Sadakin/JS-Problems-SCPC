const prompt = require("prompt-sync")()

let  twoSumSortedArray = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const currentSum = arr[left] + arr[right];
      if (currentSum === target) {
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
  
  // Example usage:
  const sortedArray = [1, 3, 5, 7, 9, 11];
  const targetValue = prompt('Target value : ')
  const result = twoSumSortedArray(sortedArray, parseFloat(targetValue));
  console.log(result); 
  