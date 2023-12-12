const getHigherValue = (arr) => {
	let higher = arr[0];
    for(i=1; i < arr.length ;i++){
        if(arr[i].value > higher.value) higher = arr[i];
    }

	return higher;
}

module.exports = { getHigherValue }