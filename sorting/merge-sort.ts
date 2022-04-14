/**
 * First split the whole array into halves
 * Start merging with merging
 * @ref https://www.section.io/engineering-education/sorting-algorithms-in-js/merge_sort.png
 */
/**
 * Time - O(n * logn)
 */

function merge(left: number[], right: number[]) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return arr.concat(left, right);
}

function mergeSort(arr: number[]) {
  const middlePoint = arr.length / 2;

  if (arr.length === 1) {
    return arr;
  }

  const left = arr.splice(0, middlePoint);

  return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort([2, 5, 1, 10, -1]));
