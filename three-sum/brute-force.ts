/*
Problem: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Problem in my words: return an array with 3 values in number array that add to 0. Cannot use the samee index in a single array. You can return more than one array, but the values of the array can't be identical to another arrray


Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.


Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.


Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.


Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */



// PSEUDOCODE
// what | how | why
// 0. initialize solutionArray = []
// 1. loop through array | for loop | first thing that came to mind, will work on efficiency after
// 2. if nums[i] + nums[j] + nums[k] === 0 && i != j, i != k, and j != k && [nums[i],nums[j], nums[k]] in any combination does not already match another array in solutionArray, then push to solutionArray
// 3.return solutionArray

const nums1: number[] = [-1,0,1,2,-1,-4]
const nums2: number[] = [0,1,1]
const nums3: number[] = [0,0,0]


function threeSum(nums: number[]): number[][] {
  // initialize solutionArray (output) with empty array
  const solutionArray: number[][] = []
  // sort array so I can skip elements with the same value. purpose is so solution array does not have duplicates
  const sortedArray: number[] = nums.sort((n1,n2) => n1 - n2);
  // first for loop
  for (let i = 0; i < sortedArray.length; i++) {
    // The continue statement breaks, i.e. skips, one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.
    // if i is greater than start of index and element[2] equals element[1]..., then skip
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) continue;
    // second for loop. starts at i + 1
    for (let j = i + 1; j < sortedArray.length; j++) {
      // if j is greater than start of index and element[3] equals element[2]..., then skip
      if (j > i + 1 && sortedArray[j] === sortedArray[j - 1]) continue;
      // third for loop. starts at j + 1
      for (let k = j + 1; k < sortedArray.length; k++) {
      // if k is greater than start of index and element[4] equals element[3]..., then skip
        if (k > j+1 && sortedArray[k] === sortedArray[k - 1]) continue;
        // if the sum of 3 numbers equals 0
        if (sortedArray[i] + sortedArray[j] + sortedArray[k] === 0) {
          // then push [element1, element2, element3] to solutionArray
          solutionArray.push([sortedArray[i], sortedArray[j], sortedArray[k]])
        }
      }
    }
  }
  return solutionArray
};

// time-space complexity is O(N^3)
console.log('num1 solution')
console.log(threeSum(nums1))
console.log('num2 solution')
console.log(threeSum(nums2))
console.log('num3 solution')
console.log(threeSum(nums3))