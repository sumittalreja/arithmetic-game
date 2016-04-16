document.addEventListener('DOMContentLoaded', init);
var answerArr = [];

var correct = "Correct";
var incorrect = "Incorrect. The answer is ";
function init() {
	clearAnswer();
	clearMessage();
	var first = document.getElementById('firstNum');
	var second = document.getElementById('secondNum');
	first.textContent = getRandomNum();
	second.textContent = getRandomNum();

	document.getElementById('answerPad').addEventListener('click', selectedNums);
	document.getElementById('submit').addEventListener('click', submitAnswer);
	document.getElementById('clear').addEventListener('click', clearAnswer);
	document.getElementById('skip').addEventListener('click', skipIt);	
}




function getRandomNum () {
	var randomNum = Math.floor(Math.random()*101);
	return randomNum;
};

function selectedNums() {
	if(event.target.matches('button')) {
		var number = event.target.textContent;
		answerArr.push(number);
		var answer = answerArr.join('');
		var inputBox = document.getElementById('answerBox');
		inputBox.textContent = answer;	
	}
	return answer;
}

function submitAnswer() {
	var message = document.getElementById('message');
	var answer = document.getElementById('answerBox').textContent;
	var first = document.getElementById('firstNum').textContent;
	var second = document.getElementById('secondNum').textContent;
	if (Number(answer) === Number(first) + Number(second)) {
		message.textContent = correct;
	} else {
		message.textContent = incorrect + (Number(first) + Number(second));
	}
	var timeoutID = window.setTimeout(init, 2000);
}

function clearAnswer() {
	var inputBox = document.getElementById('answerBox');
	inputBox.textContent = "";
}

function clearMessage() {
	message.textContent = "";
}

function skipIt() {
	clearAnswer();
	clearMessage();
	init();
}
	