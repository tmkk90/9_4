﻿function drawTree (rows) {
	for (i=0; i<=rows; i++){
	var star ="";
		for (j=0; j<=i; j++) {
		star += '*';
		}
	console.log(star)
	}
}


drawTree(4) 