
const d = new Date();
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString(); d.toDateString();
  const formattedString = dateString.replace(", ", " - ⏰ Time: ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
