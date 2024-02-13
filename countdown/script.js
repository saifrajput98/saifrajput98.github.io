let currentDate = new Date();

let targetDate = new Date(2024, 6, 31, 12, 0, 0);

let updateCountdown = function () {
  let currentDate = new Date();
  let difference = targetDate - currentDate;
  console.log(difference);

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(difference / (1000 * 60 * 60));
  let minutes = Math.floor(difference / (1000 * 60));
  let seconds = Math.floor(difference / 1000);

  document.querySelector(".days").textContent = days;
  document.querySelector(".hours").textContent = hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".seconds").textContent = seconds;

  if (difference < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").textContent = "The event has started!";
  }
};

const interval = setInterval(updateCountdown, 1000);
