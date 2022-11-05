bool findPair(int* arr, int arrLength, int k){
  for(int i = 0; i < arrLength; i++){
    for(int j = i+1; j < arrLength; j++){
      if(arr[i] + arr[j] == k) return true;
    }
  }
  return false;
}

