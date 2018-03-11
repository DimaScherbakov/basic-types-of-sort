var arr = [2,1,53,8,7,2]

function SelectionSort(arr){
	var i=0,j=0,min,minNum,temp,
		len = arr.length;
	for(j;j<len;j+=1){		
	min = arr[j];
	minNum = j;
	for(i=i+j;i<len;i+=1){
		if(min>arr[i]) {min= arr[i];minNum = i}
	}
	{
		temp = arr[j];
		arr[j] = min;
		arr[minNum] = temp;
		i=0;
	}
	}
	return arr
}

console.log(SelectionSort(arr));