var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/picture_1.jpg'){
		myImage.setAttribute('src','images/picture_2.jpg');
	} else{
		myImage.setAttribute('src','images/picture_1.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function kiminonaha() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Mozilla is cool,' + myName;
}

if(!localStorage.getItem('name')) {
	kiminonaha();
} else {
	var storeName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storeName;
}

myButton.onclick = function() {
	kiminonaha();
}