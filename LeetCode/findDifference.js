/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const unique1 = [...set1].filter((x) => !set2.has(x));
  const unique2 = [...set2].filter((x) => !set1.has(x));

  return [unique1, unique2];
};

console.log(findDifference([1, 2, 3], [2, 4, 6])); //    [ [ 1, 3 ], [ 4, 6 ] ]
