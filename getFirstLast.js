let newArr = [];
function firstLast(arr) {
	let arrLen = arr.length;
	newArr.push(arr[0])
	newArr.push(arr[arrLen - 1]);
	return newArr;
}

const array = [1, 2, 3, true, "ok"];
let valArr = firstLast(array);
console.log(valArr);