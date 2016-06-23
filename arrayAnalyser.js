var nums = [7, -3, 0, 12, 44, -5, 3, 234234, 32423];
var vals = {
	odds: nums.length,
	negative: 0,
	average: 0,
	median: 0,
};
var temp = 0
for (i=0; i<nums.length; i++) {
	temp += nums[i];
	if (nums[i]%2 === 0) {
		vals.odds -= 1
	}
	if (Math.sign(nums[i]) === -1) {
		vals.negative += 1
	}
};
var nums2 = nums.sort(function(a, b){return a-b});
if (nums.length % 2 !== 0) {
	var h = ((nums.length/2)+0.5);
	vals.median = nums2[h]
		} else {
	var j = (nums.length/2);
	var k = (j+1);
	vals.median = ((nums2[j]+nums2[k])/2);
};
var temp2 = (temp / nums.length)
vals.average = temp2.toFixed(2);
console.log(vals);
