/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */
module.exports = function merge(nums1, m, nums2, n) {
    if (nums1.length !==m){
     nums1.splice(m,nums1.length)
    }
    console.log(nums1);
    for (let x =0;x<n;x++) {
        nums1.push(nums2[x])
    }
    for (let i = 0, endI = nums1.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (nums1[j] > nums1[j + 1]) {
                let swap = nums1[j];
                nums1[j] = nums1[j + 1];
                nums1[j + 1] = swap;
            }
        }
    }
    console.log(nums1)
};