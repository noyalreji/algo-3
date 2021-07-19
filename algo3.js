// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
	for (var i in arr) 
    return arr[i];
}
console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));

// Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

function doesTriangleFit(brick, hole) {
	//console.log(brick);
	//console.log(hole);
	for(let i=0;i<brick.length;i++){
		if(brick[i] <= hole[i]){
			
		}
		else{
			return false;
		}
	}
	if(isTriangle(hole)){
		return true;	
	}
	else{
		return false;
	}
}

function isTriangle(hole){
	if(hole[0]+hole[1] > hole[2] && hole[1]+hole[2] > hole[0] && hole[0]+hole[2] > hole[1]){
		return true;
	}
	return false;
}
console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));