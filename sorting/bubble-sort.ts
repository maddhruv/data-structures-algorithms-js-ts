/**
 * 1. Start by comparing the first two elements
 * 2. Swap them if required
 * 3. Continue till the end
 * 4. Repeat the process
 * @ref https://www.section.io/engineering-education/sorting-algorithms-in-js/bubble-sort.png
 */

/**
 * Time - O(n^2)
 * Space - O(n)
 */
function bubbleSort(arr: any[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 4, 1]));
