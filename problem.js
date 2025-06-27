
function product(nums) {
    let output = [];
    let left = 1;
    let right = 1;

    for (let i = 0; i < nums.length; i++) {
        output[i] = left;
        left *= nums[i];
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

   return output;
}

console.log(product([2,4,6,8,10])); 


