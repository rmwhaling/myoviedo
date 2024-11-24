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


// Openweather api start
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
// Openweather API end

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


// Toggle address location icon on index.html page start
document.querySelectorAll('.toggle-address,.toggle-hours,.toggle-phone').forEach(locationIcon => { locationIcon.addEventListener('click', function() {
    const targetAddressID = this.getAttribute('data-target');
    const addressBox = document.getElementById(targetAddressID);

    if (addressBox.style.display === "none" || addressBox.style.display === "") {
        addressBox.style.display = "block";
    } else {
        addressBox.style.display = "none";
    }
    });
});
// Toggle location icon on index.html page end


// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const dailyEvent = daysOfWeek[new Date().getDay()];


// const dailyEvents = document.querySelectorAll('.daily-event');

// dailyEvents.forEach(weekday => {
//     const eventDays = weekday.getAttribute("data-date").split(",");

//     if (eventDays.includes(dailyEvent)) {
//         weekday.style.display = "block";
//     }
// });

// Function to display events based on the current day
function checkEventDisplay() {
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleString('en-US', { weekday: 'long' });

  const estDate = new Date(currentDate.toLocaleString('en-US', { timeZone: 'America/New_York' }));

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Combine into YYYY-MM-DD format
  const currentFullDate = `${year}-${month}-${day}`;

  // Select all news event elements
  const events = document.querySelectorAll('.todays-news');

  events.forEach(event => {
    const eventDates = event.getAttribute('data-date').split(','); // Split dates into an array
    if (eventDates.includes(currentDay) || eventDates.includes(currentFullDate)) {
      event.style.display = 'block'; // Show the event
    }
  });
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', checkEventDisplay);

function showPhoneNumber() {
  // Show the phone number link
  const phoneLink = document.getElementById('phone-link');
  phoneLink.style.display = 'inline';
}

// Pizza Friday container function start
const pizzaFriday = new Date().getDay();
const pizzaFridayContainer = document.getElementById("pizza-friday-container");

if (pizzaFriday === 5) {
    pizzaFridayContainer.style.display = "block";
} else {
    pizzaFridayContainer.style.display = "none";
}
// Pizza Friday container function end

// Sunday Brunch container start
const sundayBrunch = new Date().getDay();
const sundayBrunchContainer = document.getElementById("sunday-brunch-container");

if (sundayBrunch === 0) {
    sundayBrunchContainer.style.display = "block";
} else {
    sundayBrunchContainer.style.display = "none";
}
// Sunday Brunch container end

// Taco Tuesday container function start
const tacoTuesday = new Date().getDay();
const tacoTuesdayContainer = document.getElementById("taco-tuesday-container");

if (tacoTuesday === 2) {
    tacoTuesdayContainer.style.display = "block";
} else {
    tacoTuesdayContainer.style.display = "none";
}
// Taco Tuesday container function end
