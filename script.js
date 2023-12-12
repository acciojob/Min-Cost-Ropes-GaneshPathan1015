function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>{
		return a-b;
	});
	let sum = arr[0],storsum=0;
	for(let i=1;i<arr.length;i++){
		sum = sum+arr[i];
		storsum=storsum + sum;
	}
  return arr.length===1?sum:storsum;
}

module.exports=mincost;
