var arr = [2,5,1,1,4];

console.log(bubleSort(arr));

function bubleSort(arr){
	var i,temp,exchange=true
		len = arr.length;
while(exchange){
	exchange = false;	
	for(i=0; i<len; i+=1){
		if(i!= len){
			// console.log("arr["+i+"] :"+arr[i])
			if(arr[i]>arr[i+1]){
				exchange = true;
				temp = arr[i+1];
				arr[i+1] = arr[i];
				arr[i] = temp;
			}
		}
	}
}
	return arr
}
