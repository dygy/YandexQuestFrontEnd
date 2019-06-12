module.exports = function(nums, k) {
    for (let x = 0;x<nums.length;x++){
        for (let y = 0;y<nums.length;y++){
            if (y!==x){
                if (nums[x]+nums[y]===k){
                    return true
                }
            }
        }
    }
    return false
};