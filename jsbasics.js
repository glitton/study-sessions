// Write a JavaScript program to display the current day and time
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const today = new Date();
const day = today.getDay();
const hour = today.getHours();
const minute = today.getMinutes();
const seconds = today.getSeconds();

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const displayCurrentDay = `Today is: ${daysOfTheWeek[day]}`;
const displayCurrentTime = `Current time is: ${hour} PM : ${minute} : ${seconds}`;

console.log(displayCurrentDay);
console.log(displayCurrentTime);

console.log(`Today is ${today}`);
