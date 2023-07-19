
function getResult() {
     var Content = parseInt(document.getElementById("Content").value);
     var Vocabulary = parseInt(document.getElementById("Vocabulary").value);
     var Pronunciation = parseInt(document.getElementById("Pronunciation").value);
     var Fluency = parseInt(document.getElementById("Fluency").value);
     var Grammar = parseInt(document.getElementById("Grammar").value);

     var getPoints = document.getElementById("Points");
     Points.value  = Content + Vocabulary + Pronunciation + Fluency + Grammar;
	Points.value = parseFloat(Points.value).toFixed(0);

     var getPercent = document.getElementById("Percent");
     Percent.value = (Points.value / 50) * 100;
	Percent.value = parseFloat(Percent.value).toFixed(0);

     var getFinalGrade = document.getElementById("FinalGrade");
	if (Percent.value >= 70) { FinalGrade.value = (3/30) * (Percent.value - 70) + 4;
		FinalGrade.value = parseFloat(FinalGrade.value).toFixed(1);
		document.getElementById("FinalGrade").style.color = "blue";
		document.getElementById("FinalGrade").style.background = "lightblue"; 
		document.getElementById("FinalGrade").style.transition = "background 1.2s"; }
	else if (Percent.value <= 9) { FinalGrade.value = "0.0"; document.getElementById("FinalGrade").style.color = "black"; }
	else if (Percent.value <= 69) { FinalGrade.value = (3/70) * (Percent.value) + 1;
		FinalGrade.value = parseFloat(FinalGrade.value).toFixed(1)
		document.getElementById("FinalGrade").style.color = "red"; 
		document.getElementById("FinalGrade").style.background = "pink";
		document.getElementById("FinalGrade").style.transition = "background 1.2s"; }

       var setAudioSwitch = document.getElementById("audio-switch");
	if (document.getElementById('audio-switch').checked == true && Percent.value == 100) {
		setBlueAudio = document.getElementById('BlueAudio'),
		document.getElementById("BlueAudio").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 101 ) {
		setErrorAudio = document.getElementById('ErrorAudio'),
		document.getElementById("ErrorAudio").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 95) {
		setPoints20 = document.getElementById('Points20'),
		document.getElementById("Points20").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 90) {
		setPoints19 = document.getElementById('Points19'),
		document.getElementById("Points19").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 85) {
		setPoints18 = document.getElementById('Points18'),
		document.getElementById("Points18").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 80) {
		setPoints17 = document.getElementById('Points17'),
		document.getElementById("Points17").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 75) {
		setPoints16 = document.getElementById('Points16'),
		document.getElementById("Points16").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 70) {
		setPoints15 = document.getElementById('Points15'),
		document.getElementById("Points15").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 65) {
		setPoints14 = document.getElementById('Points14'),
		document.getElementById("Points14").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 60) {
		setPoints13 = document.getElementById('Points13'),
		document.getElementById("Points13").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 55) {
		setPoints12 = document.getElementById('Points12'),
		document.getElementById("Points12").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 50) {
		setPoints11 = document.getElementById('Points1'),
		document.getElementById("Points11").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 45) {
		setPoints10 = document.getElementById('Points10'),
		document.getElementById("Points10").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 40) {
		setPoints09 = document.getElementById('Points09'),
		document.getElementById("Points09").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 35) {
		setPoints08 = document.getElementById('Points08'),
		document.getElementById("Points08").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 30) {
		setPoints07 = document.getElementById('Points07'),
		document.getElementById("Points07").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 25) {
		setPoints06 = document.getElementById('Points06'),
		document.getElementById("Points06").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 20) {
		setPoints05 = document.getElementById('Points05'),
		document.getElementById("Points05").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 15) {
		setPoints04 = document.getElementById('Points04'),
		document.getElementById("Points04").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 11) {
		setPoints02 = document.getElementById('Points02'),
		document.getElementById("Points02").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value == 10 ) {
		setRedAudio = document.getElementById('RedAudio'),
		document.getElementById("RedAudio").play(); }
	else if (document.getElementById('audio-switch').checked == true && Percent.value >= 1 && Percent.value <= 9 ) {
		setErrorAudio = document.getElementById('ErrorAudio'),
		document.getElementById("ErrorAudio").play(); }
}
