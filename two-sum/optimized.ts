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

const nums = [7,11,15,6,2] as number[]
const target = 9 as number
// interface is used to create a type
interface HashMap {
  // when defining a key in interface, always add bracket
  // key: value type number:number
  [key : number ] : number
}

function twoSumm(nums: number[], target: number): number[] {
  // what | how | why
  // pseudocode
  // hash map: o(1) time-complexity which is very good
  /*
  hashmap {
    11: true,
    15: true
    16: true
    7: true
    2: true
  }
  */
  const hashmap: HashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i]
    const targetValue = target - currentValue
    if (targetValue in hashmap) {
      // get the index of targetValue
      return [hashmap[targetValue], i]
    } else {
      hashmap[currentValue] = i
    }
  }
  // if line 49 is falsy, then default result is line 57
  return [] as number[]
};

console.log(twoSumm(nums, target))