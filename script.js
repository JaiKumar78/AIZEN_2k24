const register = () => {
    // window.location.href = "https://conoscenza2024.stjosephstechnology.ac.in/registration/";
    window.open("https://conoscenza2024.stjosephstechnology.ac.in/registration/", "_blank");
}

document.querySelector('.register').onclick = register;

// Set the date we're counting down to
const countdownDate = new Date("2024-09-28");

// Update the countdown every 1 second
const interval = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown items
    document.getElementById("days").innerHTML = days + '<br>Days';
    document.getElementById("hours").innerHTML = hours + '<br>Hours';
    document.getElementById("minutes").innerHTML = minutes + '<br>Minutes';
    document.getElementById("seconds").innerHTML = seconds + '<br>Seconds';

    // Display the number of days in the h2 tag
    document.getElementById("days-text").innerText = days;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "The event has passed!";
        document.querySelector("h2").innerHTML = "The event has passed!";
    }
}, 1000);

// Get all slide elements
const slides = document.querySelectorAll('.slide');

// Get all popup elements
const popups = document.querySelectorAll('.popup');

// Get all close button elements
const closeButtons = document.querySelectorAll('.close-btn');

// Function to open the respective popup
slides.forEach((slide, index) => {
    slide.onclick = function() {
        popups[index].style.display = 'flex';
    }
});

// Function to close the popup
closeButtons.forEach((button, index) => {
    button.onclick = function() {
        popups[index].style.display = 'none';
    }
});

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    popups.forEach(popup => {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Target the section by its ID
    const targetSection = document.getElementById('events-section');

    // Target the button
    const triggerbtn = document.getElementById('event-btn');
    // Example: Scroll to the targeted section
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    triggerbtn.addEventListener('click', (event) => {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
        event.preventDefault();
    })
});
