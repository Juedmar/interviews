
var SelectOnePlay = document.getElementById('selectone'),
  SelectPairsPlay = document.getElementById('selectpairs'),
	audios = document.querySelectorAll('audio');
var ClearPlay = document.getElementById('ClearButton'),
	clear = document.querySelectorAll('audio');
console.log(audios);

SelectOnePlay.addEventListener('mousedown', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  document.getElementById("clearsound").muted = true;
  document.getElementById("audio").muted = false;
  audio.play();
}); }, false);

SelectPairsPlay.addEventListener('mousedown', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  document.getElementById("clearsound").muted = true;
  document.getElementById("audio").muted = false;
  audio.play();
}); }, false);

ClearPlay.addEventListener('mousedown', function() {
[].forEach.call(clear, function(audio) {
  // do whatever
  document.getElementById("audio").muted = true;
  document.getElementById("clearsound").muted = false;
  audio.play();
}); }, false);
