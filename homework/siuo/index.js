function bubbleSortConcept1(arr) {

    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }

  let unsortedArr = [5, 8, 3, 1, 2];

console.log(bubbleSortConcept1(unsortedArr));