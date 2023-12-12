function mincost(arr)
{ 
//write your code here
// return the min cost
	function sort(arr){
		arr.sort((a,b)=>{
                return a-b;
        })
	}
	let mincost=0,sum=0;
	
	while (arr.length>1) {
		sort(arr);
		let cutarr = arr.splice(0,2);
		sum = cutarr[0]+cutarr[1];
		arr.push(sum);
		mincost=mincost+sum;
	}
	return mincost;
 
}
module.exports=mincost;
