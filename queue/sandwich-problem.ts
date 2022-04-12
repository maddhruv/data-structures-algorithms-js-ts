/**
 * @ref https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */

import Queue from ".";

const countStudents = (
  students: Array<0 | 1>,
  sandwiches: Array<0 | 1>
): number => {
  const queue = new Queue(students);

  // O(n^2)
  sandwiches.forEach((sandwich) => {
    const theStudent = queue.dequeue();

    if (theStudent !== sandwich) {
      queue.enqueue(theStudent);
    }
  });

  return queue.size();
};

// [1,1,1,0,0,1] [1,0,0,0,1,1] => 3
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]) === 3);
