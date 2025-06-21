// Get elements
const logBtn = document.getElementById('logWakeBtn');
const wakeList = document.getElementById('wakeList');

// Load previous wake times from localStorage
let wakeTimes = JSON.parse(localStorage.getItem('wakeTimes') || '[]');

// Display all wake times
function displayWakeTimes() {
  wakeList.innerHTML = '';
  wakeTimes.forEach(time => {
    const li = document.createElement('li');
    li.textContent = time;
    wakeList.appendChild(li);
  });
}

// Log current time when button is clicked
logBtn.addEventListener('click', () => {
  const now = new Date();
  const timeString = now.toLocaleString();
  wakeTimes.push(timeString);
  localStorage.setItem('wakeTimes', JSON.stringify(wakeTimes));
  displayWakeTimes();
});

// Initial display
displayWakeTimes();
