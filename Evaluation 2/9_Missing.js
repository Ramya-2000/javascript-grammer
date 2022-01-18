const findMissingNumber = (arr) => {
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i - 1] !== i) {
        return i;
      }
    }
  }
  const arr = [1, 2, 3,5];
  console.log(findMissingNumber(arr));