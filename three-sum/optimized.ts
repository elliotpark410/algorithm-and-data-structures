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

const nums4: number[] = [-1,0,1,2,-1,-4]
// const nums5: number[] = [0,1,1]
// const nums6: number[] = [0,0,0]


function threeSumm(nums: number[]): number[][] {
  // sort numbers
  nums.sort((a,b) => a-b)
  // initialize solutionArray aka output
  const solutionArray: number[][] = []
  // for loop to iterate through array
  for (let i = 0; i < nums.length; i++) {
    // if index is greater than 0 and currentElement is equal to previousElement, then skip
    if (i > 0 && nums[i] === nums[i-1]) continue;

    // target is secondVal + thirdVal?
    const target = 0 - nums[i]

    // left is currentIndex+1
    let left = i+1
    // right is last index
    let right = nums.length-1
    // while last index is greater than currentIndex+1
    while(right>left) {
      // sum = valCurrentIndex+1 + valLastIndex
      const sum = nums[left] + nums[right]
      // if sum is greater than 0 - currentValue
      if (sum > target) {
        // move from end of array to left
        right--
        // if sum is less than 0 - currentValue
      } else if (sum < target) {
        // move from second index to right
        left++
      } else {
        // if sum is equal to target, push to solutionArray
        solutionArray.push([nums[i], nums[left], nums[right]])
        // ?? while firstVal equals firstVal+1,
        while(nums[left] === nums[left+1]) {
          // move index to right
        }
        // ?? while lastVal equals lastVal+1
        while(nums[right] === nums[right+1]) {
          // move index to left left
          right--
        }
        // move index right
        left++
        // move index left
        right--
      }
    }
  }
  return solutionArray
};

// time-space complexity:
console.log('num1 solution')
console.log(threeSumm(nums4))
// console.log('num2 solution')
// console.log(threeSumm(nums5))
// console.log('num3 solution')
// console.log(threeSumm(nums6))