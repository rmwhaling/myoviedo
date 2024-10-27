
    // function openTime() {
    //     const button = document.getElementById('myButton');
    //     const now = new Date();
    //     const start = new Date();
    //     const end = new Date();

    //     // Set the time for 7:30 PM and 7:45 PM
    //     start.setHours(19, 39, 0); // 7:30 PM
    //     end.setHours(19, 40, 0);   // 7:45 PM

    //     // Check if the current time is between 7:30 PM and 7:45 PM
    //     if (now >= start && now <= end) {
    //         button.style.backgroundColor = 'green';
    //     } else {
    //         button.style.backgroundColor = 'red';
    //     }
    // }

    // openTime();

    // function refreshPage() {
    //     location.reload();
    // }

    // setInterval(refreshPage, 5000);

function openTime() {
    const hour = new Date();
    const minute = new Date();
    const openHour = hour.getHours();
    const openMinute = minute.getMinutes();
    const button = document.getElementById('myButton');

    if (openHour >= 8 && openHour <= 17) {
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
    }
}

openTime();
setInterval(openTime, 60000);












