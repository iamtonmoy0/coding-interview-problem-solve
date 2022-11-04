// Time complexity: O(nlogn)
// Space complexity: O(1) if you are allowed to modify the input, O(n) else


function findPair(arr,k){
	arr = arr.sort((a,b)=>a-b);
	left = 0,right =arr.length-1;
	while(left<right){
		if(left[i] = right[i] ==k) return true;
		else if(left[i] + right[i] <k) left++;
		else right--;
	}
	return false
}
