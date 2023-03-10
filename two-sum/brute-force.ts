// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
*/

const nums = [11,15,6,7,2] as number[]
const target = 30 as number

function twoSum(nums: number[], target: number): number[] {
  // what | how | why
  // 1. loop through array | for loop | first thing that came to mind, will work on efficiency after
  // 2. loop through array again to compare two indexes | nested for loop | first thing that came to mind, will work on efficiency after
  // 3. if the addition of two numbers === target, then return answer | if statement
  let answer: number[] = [];

  // error handling 
  // !nums checks whether num is falsy or undefined
  // need to be !nums before nums.length <= 0
  if (!nums || nums.length <= 0) {
    return []
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      const current = nums[i]
      const compare = nums[j]
      if (current + compare === target) {
        answer = [i, j]
      }
    }
  }
  return answer
};

console.log(twoSum(nums, target))