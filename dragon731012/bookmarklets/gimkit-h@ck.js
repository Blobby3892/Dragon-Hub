alert("not mine view owner here https://github.com/non-reai press ; to save answer and press u to auto answer"); var socket = null;
var lastDataSent = null;
var using = null;
var answer = false;
alert("Started.");

const nativeSend = window.WebSocket.prototype.send;
window.WebSocket.prototype.send = function(data) {
	nativeSend.call(this, data);
	if (data != 2) {
		lastDataSent = data;
	}
	socket = this;
};

document.onkeydown = (e) => {
	if (e.repeat) {
		return;
	}
	if (e.key == ";") {
		using = lastDataSent;
		alert("Saved.");
	} else if (e.key == "u") {
		if (answer) {
			answer = false;
		} else {
			answer = true;
		};
	};
};

async function answerQuestion() {
	if (using && answer) {
		socket.send(using);
	};
	await new Promise(resolve=>{
		setTimeout(resolve,Math.random() * (2000 - 500) + 500);
	});
	answerQuestion();
};

answerQuestion();
