/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
// Approach 1 (BRUTE FORCE)
// TC: O(N^2)
// SC: O(N)
var twoSum1 = function(nums, target) {
    for(let i=0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [].concat(i, j);
            }
        }
    }
};

// Approach 2: Two Pass Hash
// TC: O(N)
// SC: O(N)
var twoSum2 = function(nums, target) {
    var map = {};
    nums.forEach((num, index) => {
        map[num] = index;
    });

    for(let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (map[compliment] !== undefined && i !== map[compliment]) {
            return [i, map[compliment]]
        }
    }
};

// Approach 3: One pass hash
// TC: O(N)
// SC: O(N)
var twoSum3 = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (map[compliment] !== undefined) {
            return [i, map[compliment]];
        } else {
            map[nums[i]] = i;
        }
    }
};