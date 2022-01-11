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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = [...document.querySelectorAll(".deadline-format h4")];

// ! Finding curr date instead of hardcording it
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// ! formatting 2 -> 02
const format = (item) => {return (item < 10) ? `0${item}` : item;};

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const day = futureDate.getDate();
const hour = format(futureDate.getHours());
const minute = format(futureDate.getMinutes());

giveaway.innerHTML = `giveaway ends on ${weekday}, ${day} ${month} ${year}, ${hour}:${minute} Am`;

// ! Future time in ms
// TODO: CountDown

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  let t = futureTime - today;

  // Terminating setinterval if crossed deadline
  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
  
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  // calculate all values
  let days = Math.floor(t / oneDay);
  t -= days * oneDay;
  let hours = Math.floor(t / oneHour);
  t -= hours * oneHour;
  let minutes = Math.floor(t / oneMinute);
  t -= minutes * oneMinute;
  let seconds = Math.floor(t / 1000);


  // set Values array
  const values = [days, hours, minutes, seconds];
  items.forEach((item, idx) => {
    item.innerHTML = format(values[idx]);
  });
  if(t < 0) {
    clearInterval(countdown);
  }
}

// Countdown 
let countdown = setInterval(getRemainingTime, 1000);



















