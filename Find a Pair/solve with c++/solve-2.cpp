bool findPair(vector<int> arr, int k){
  sort(arr.begin(), arr.end());
  int left = 0, right = arrLength-1;
  while(left < right){
    if(arr[left] + arr[right] == k) return true;
    else if(arr[left] + arr[right] < k) left++;
    else right--;
  }
  return false;
}

