// const input = [
// 	[8, 1, 6],
// 	[3, 5, 7],
// 	[4, 9, 2],
// ];

const magicMatrix = (arr) => {
	let data = [];
	let data2 = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (data[i] == undefined && data2[i] == undefined) {
				data.push(arr[i][j]);
				data2.push(arr[j][i]);
			} else {
				data[i] = data[i] + arr[i][j];
				data2[i] = data2[i] + arr[j][i];
			}
		}
	}

	let result = false;
	for (let index = 0; index < data.length - 1; index++) {
		if (data[index] === data[index + 1]) {
			result = true;
		} else {
			result = false;
		}
	}

	for (let index = 0; index < data2.length - 1; index++) {
		if (data2[index] === data2[index + 1]) {
			result = true;
		} else {
			result = false;
		}
	}

	return result;
};

// console.log(magicMatrix(input));
module.exports = magicMatrix;

