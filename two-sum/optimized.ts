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


// intializing variable and type
const numss = [7,11,15,6,2,3,8] as number[]
const targett = 9 as number

// creating a HashMap type to tell the compiler which property names a given object can have
// [Key : number] is saying that the key will be what I want it to be, specifically, a number
interface HashMap {
  [key : number ] : number
}

// intuitive solution is to find the index of a and b by doing a + b = targetValue
// optimizing the solution so that if targetValue - a = b exists in a hashmap, then return the index of a and b
function twoSummm(nums: number[], target: number): number[] {
  // intializing hashmap with type created and giving it a value of empty object
  const hashmap: HashMap = {};
  // for loop to iterate through nums array
  // first iteration of for loop will run the else statement and add all numbers in nums array as a key and the corresponding value as the index
  for (let i = 0; i < nums.length; i++) {
    // need to get the currentValue
    // i = index of current value
    const currentValue = nums[i]
    // initialize targetValue as target - currentValue because it will look for the targetValue in hashmap
    const targetValue = target - currentValue

    // create if statement to see if targetValue is in hashmap
    if (targetValue in hashmap) {
      // if targetValue is in hashmap, then return the value of hashmap[targetValue] i.e. index of targetValue and the currentValue index
      return [hashmap[targetValue as number], i as number]
      // else, if targetValue is not in hashmap, then add the currentValue, i.e. number in number array, as a key in hashmap with the value of currentValue index
    } else {
      hashmap[currentValue] = i
    }
  }
  // if the for loop returns falsy, then return an empty array with type number[]
  return [] as number[]
}

console.log(twoSummm(numss, targett))
