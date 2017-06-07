Array.prototype.map = function (val, arrNew=[]) { 
	/* YOUR CODE HERE */ 
	//const arrNew = []; 
	for(let i=0;i<val.length;i++){
		arrNew.push[val[i]*val[i]];
	}
	return arrNew;
}

const arr = [1,2,3];
console.log(arr.map((val) => val * val)); // [1,4,9]

// function(val){
// 	val*val
// }
/* 1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/