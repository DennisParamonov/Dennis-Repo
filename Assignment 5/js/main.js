//set up all boxes
var allBoxes = document.querySelectorAll('.box');
console.log(allBoxes);

//set up variables
var redBox = document.querySelector('.box-1');
var blueBox = document.querySelector('.box-2');
var yellowBox = document.querySelector('.box-3');
var greenBox = document.querySelector('.box-4');
var paragraph = document.querySelector('.paragraph');

//create an array of strings
var myRandomWords = ['My Therapist', 'His Banana', 'The Refrigerator', 'A Salmon', 'The Convict'];
var myRandomVerbs = [' walked', ' teleported', ' flew', ' crawled', ' crab walked'];
var myRandomAdverbs = [' quickly', ' sluggishly', ' swiftly', ' egotistically', ' wonderfully'];
var myRandomAdj = [' huge', ' humid', ' loud', ' crowded', ' gigantic'];
var myRandomNoun = [' hummer limo.', ' swamp.', ' military base.', ' chuckie cheese.', ' white house.'];




var randomNumber = Math.floor(Math.random() * myRandomWords.length);
var randomVerb = myRandomVerbs[randomNumber];
var randomAdverb = myRandomAdverbs[randomNumber];
var randomAdj = myRandomAdj[randomNumber];
var randomNoun = myRandomNoun[randomNumber];
var randomWord = myRandomWords[randomNumber];

//change background color on click
redBox.addEventListener('click', function (evt) {
	paragraph.style.color = 'black';
	document.body.style.backgroundColor = '#FFFFFF';
	
	paragraph.classList.add('paragraph');
	paragraph.classList.remove('paragraph2');
	paragraph.classList.remove('paragraph3');
	paragraph.classList.remove('paragraph4');
	
	randomNumber = Math.floor(Math.random() * myRandomWords.length);
	randomWord = myRandomWords[randomNumber];
	randomAdverb = myRandomAdverbs[randomNumber];
	randomVerb = myRandomVerbs[randomNumber];
	randomAdj = myRandomAdj[randomNumber];
	randomNoun = myRandomNoun[randomNumber];

	paragraph.innerHTML =  randomWord + randomVerb + randomAdverb + " through the" + randomAdj + randomNoun;


});








