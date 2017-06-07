//module.exports = function reverseArr(arr) {
function reverseArr(arr) {
	 /* YOUR CODE HERE */ 
	 
	 let startInd = 0;
	 let endInd = arr.length-1;
	 let temp;
	 while (startInd < endInd){
	 	temp = arr[startInd];
	 	arr[startInd]=arr[endInd];
	 	arr[endInd]=temp;
	 	startInd++;
	 	endInd--;
	 }
}

//const arr = [1,2,3];
const arr = [1,2,3,4,5,6,7];
reverseArr(arr);
console.log(arr) // [3,2,1];


// 5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

// ```js
// const arr = [1,2,3];
// reverseArr(arr);
// console.log(arr) // [3,2,1];
// ```