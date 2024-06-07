function hasSubarrayWithSum(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

const arr = [2, 2, 9, 1, 0, 5];
const target = 14;
console.log(hasSubarrayWithSum(arr, target));
