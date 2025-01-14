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
        const eventList = document.getElementById('event-list-ul');
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

// JavaScript to hide past events start
 document.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const events = document.querySelectorAll(".event");

    events.forEach(event => {
      const eventDate = new Date(event.getAttribute("data-date"));
      if (eventDate < currentDate) {
        event.classList.add("hidden");
      }
    });
  });
// Javascript to hide past events end


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
      event.style.display = 'block';
    }
  });
}

// Run the function on page load
document.addEventListener('DOMContentLoaded', checkEventDisplay);
// Function to display events based on the current day end

function showPhoneNumber() {
  // Show the phone number link
  const phoneLink = document.getElementById('phone-link');
  phoneLink.style.display = 'inline';
}

// Display daily rundown start
document.addEventListener("DOMContentLoaded", () => {
  
    const currentDate = new Date().toISOString().split('T')[0];

    const elements = document.querySelectorAll(".daily-rundown-ul");

    elements.forEach((element) => {

        const elementDate = element.getAttribute("data-date");

        if (elementDate === currentDate) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});
// Display daily rundown end

// Morning buzz header start //
window.onload = function() {
    // Get the current hour
    const currentHour = new Date().getHours();

    // Get the element with the class "morning-buzz-heading"
    const morningBuzzElement = document.querySelector('.morning-buzz-heading');

    // Check if the current time is between 4:00 AM and 9:00 AM
    if (currentHour >= 4 && currentHour < 9) {
        morningBuzzElement.style.display = 'block'; // Show the element
    } else {
        morningBuzzElement.style.display = 'none'; // Hide the element
    }
};
// Morning buzz header end //


// Get today's date in YYYY-MM-DD format
const oviedoToday = new Date().toISOString().split('T')[0];

// Get all elements with the class 'today-in-oviedo-el'
const elements = document.querySelectorAll('.today-in-oviedo-ul');

// Loop through each element and check the 'data-date' attribute
elements.forEach(element => {
  const dataDate = element.getAttribute('data-date');
  
  // Compare the 'data-date' with today's date
  if (dataDate === oviedoToday) {
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function() {
    var emergencySection = document.querySelector(".emergency-services");
    var currentHour = new Date().getHours(); 
    if (currentHour >= 21 || currentHour < 5) {
      emergencySection.style.display = "block"; 
    } else {
      emergencySection.style.display = "none"; 
    }
  });


function displayFadSpecials() {
  const today = new Date();
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  

  const currentDayOfWeek = daysOfWeek[today.getDay()];
  

  const currentDate = today.toISOString().split('T')[0];

 
  const specials = document.querySelectorAll('.fad-special');

  specials.forEach((special) => {
    const dataDate = special.getAttribute('data-date');

    
    if (dataDate === currentDate || dataDate === currentDayOfWeek) {
      special.style.display = 'flex'; 
    } else {
      special.style.display = 'none'; 
    }
  });
}
document.addEventListener('DOMContentLoaded', displayFadSpecials);


// Hamburger menu display start //
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
})
//Hamburger menu display end //

// Get the element by its ID (or any other selector)
const element = document.getElementById('headerX');

// Get the position and size of the element
const rect = element.getBoundingClientRect();

// The bottom Y-axis position relative to the viewport
const bottomPosition = rect.bottom;

console.log('Bottom Y-axis position relative to the viewport:', bottomPosition);