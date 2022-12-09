function removeDuplicates(arr){
	let visited ={};
	for(element of arr)
	visited[element] =true
	return Object.keys(visited).map(x =>parseInt(x));

}
