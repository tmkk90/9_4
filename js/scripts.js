var getButtons = document.getElementsByClassName('button');
console.log(getButtons);
console.log(getButtons.length);

for (i=0; i<getButtons.length; i++) {
	console.log(getButtons[i].innerText);
}