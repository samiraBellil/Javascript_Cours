//Digital clock program

//Difining updateTime function

function updateTime() {
  //Getting curent time and date
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, 0);
  // hours AM or PM
  const maridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds} ${maridiem}`;
  // Displaying the time
  document.getElementById('clock').textContent = timeString;
}
updateTime();
// Calling showTime function at every second
setInterval(updateTime, 1000);
