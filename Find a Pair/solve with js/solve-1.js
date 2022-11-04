
// Time complexity: O(n²)
// Space complexity: O(1)




function findPair(arr,k){
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; i+1 < arr.length; j++) {
			if(arr[i] + arr[j] == k) return [i,j];
		}
			
		}
		return false;
	}

	