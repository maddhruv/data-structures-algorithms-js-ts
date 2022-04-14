/**
 * 1. Start by comparing the second element with the first
 * 2. Swap if required
 * 3.
 */

// [3, 2, 7, 1]
function insertionSort(arr, n) {
  let key, j;

  for (let i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
