document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();


    // my addition
    const eventType = document.getElementById('eventType')

    
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventDescription = document.getElementById('eventDescription').value;

    const eventList = document.getElementById('events');

    const li = document.createElement('li');
    li.innerHTML = `<strong>${eventName}</strong> on ${eventDate} at ${eventTime}<br>${eventDescription}`;

    eventList.appendChild(li);

    // Clear the form
    document.getElementById('eventForm').reset();
});
