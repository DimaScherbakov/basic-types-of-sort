var arr = [5,1,2,3,2];

function insertionSort(arr){
	var i,j,temp,
		exchange=true,
		len = arr.length;
	while(exchange){
	exchange = false;
	for(i=1;i<len;i+=1){
		for(j=i-1;j>=0;j-=1){
			if(arr[i]<arr[j]){
				exchange = true;
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}	
	}

	return arr;
}

console.log(insertionSort(arr));