// active link background highlight start
const windowPathname = window.location.pathname;
console.log(windowPathname);

const navLinkEls = document.querySelectorAll('.nav-link');
console.log(navLinkEls);

navLinkEls.forEach((navLink) => {
    const navLinkPathname = new URL(navLink.href).pathname;

    if(navLinkPathname === windowPathname) {
        navLink.classList.add('active');
    }
});
// active link background highlight end

const apiKey = '613183633a60b7cf8004d23d0d314a0b'; // Replace with your actual API key
const city = 'Oviedo, US'; // Replace with your city or use geolocation for dynamic fetching
const temperatureDiv = document.getElementById('temperature');

async function fetchTemperature() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`);
        const data = await response.json();
        
        if (data.main) {
            const temp = parseInt(data.main.temp);
            temperatureDiv.textContent = `${temp}°`;
        } else {
            temperatureDiv.textContent = 'Error retrieving temperature data.';
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        temperatureDiv.textContent = 'Error fetching temperature.';
    }
}

// Fetch temperature on page load
fetchTemperature();

// Update temperature every 10 minutes
setInterval(fetchTemperature, 600000);

// Sort events on event.html page start
window.onload = function () {
    // Function to sort events by date in ascending order
    function sortEventsByDate() {
        // Get the list of events
        const eventList = document.getElementById('event-list');
        const events = Array.from(eventList.getElementsByClassName('event'));

        // Sort events by date
        events.sort((a, b) => {
            const dateA = new Date(a.getAttribute('data-date'));
            const dateB = new Date(b.getAttribute('data-date'));
            return dateA - dateB;
        });

        // Clear the list
        eventList.innerHTML = '';

        // Append sorted events
        events.forEach(event => eventList.appendChild(event));
    }

    // Call the sort function on window load
    sortEventsByDate();
};
// Sort events on events.html page end

// Insert current date on header start
const today = new Date();

// Array of days and months
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Get the current day, month, date, and year
const currentDay = days[today.getDay()];
const currentMonth = months[today.getMonth()];
const currentDate = today.getDate();
const currentYear = today.getFullYear();

// Insert into the HTML
document.getElementById("date-info").innerText = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
// Insert current date on header end


// more info button on index.html page start
document.querySelectorAll('.toggle-info').forEach(button => { button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-target');
    const infoBox = document.getElementById(targetId);

    if (infoBox.style.display === "none" || infoBox.style.display === "") {
        infoBox.style.display = "block";
        this.textContent = "Hide Address";
    } else {
        infoBox.style.display = "none";
        this.textContent = "Show Info";
    }
    });
});
// more info button on index.html page end

// Daily activity list in index.html file start

// Get today's date in "YYYY-MM-DD" format

const todayActivity = new Date();
const todayYear = todayActivity.getFullYear();
const todayMonth = String(todayActivity.getMonth() + 1).padStart(2, '0'); // Add leading zero
const todayDay = String(todayActivity.getDate()).padStart(2, '0'); // Add leading zero
const todayString = `${todayYear}-${todayMonth}-${todayDay}`;

// Get all daily activity elements
const activities = document.querySelectorAll('.daily-activity');

activities.forEach(activity => {
  // Check if activity's date matches today's date
  const activityDate = activity.getAttribute('data-date');

  if (activityDate === todayString) {
    activity.style.display = 'block'; // Show if date matches
  } else {
    activity.style.display = 'none'; // Hide if date doesn't match
  }
});

// Daily activity list in index.html file end


 function showPopup(phoneNumber) {
    document.getElementById("phone-number").textContent = phoneNumber;
    document.getElementById("call-link").href = "tel:" + phoneNumber;
    document.getElementById("phone-popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("phone-popup").style.display = "none";
  }
  