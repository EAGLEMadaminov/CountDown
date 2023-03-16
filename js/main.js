const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const elGiveAway = document.querySelector(".giveaway");
const elDeadline = document.querySelector(".deadline");
const elItems = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2023, 11, 5, 9, 30, 0);
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 9, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let date = futureDate.getDate();
let day = futureDate.getDay();
let month = futureDate.getMonth();

elGiveAway.textContent = `giveaway ends on ${weeks[day]}, ${date} ${months[month]} ${year} ${hours}:${mins}am `;

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minuts = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin) / 1000);
  const values = [days, hours, minuts, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }
  elItems.forEach((item, index) => {
    item.textContent = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countDown);
    elDeadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}
let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
