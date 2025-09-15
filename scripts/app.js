// variables
const completeButtons = document.getElementsByClassName("complete-button");
const taskNumber = document.getElementById("task-number");
const numberHeader = document.getElementById("number-header");
const activityHistoryBox = document.getElementById("activity-history-box");
// show current date and time on the site
const today = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const currentDay = days[today.getDay()];
const currentDate = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
// show current date and time on the show date section
document.getElementById("show-day").innerText = `${currentDay},`;
document.getElementById(
  "show-date"
).innerText = `${currentDate} ${currentYear}`;
// list of deadlines
const deadlines = [
  "2025-01-10",
  "2025-02-20",
  "2025-03-30",
  "2025-04-20",
  "2025-05-30",
  "2025-06-10",
];
// deadline time function
function setDeadline(dateString) {
  const date = new Date(dateString);
  const option = { day: "numeric", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-US", option);
}
// set different date as deadline in the card
const setDateTime = document.getElementsByClassName("date-time");
for (let i = 0; i < setDateTime.length; i++) {
  const element = setDateTime[i];
  element.innerText = setDeadline(deadlines[i]);
}
// convert into number of the tasks number
let convertedTaskNumber = parseInt(taskNumber.innerText);
let convertedNumberHeader = parseInt(numberHeader.innerText);
let activityLog;
// set event handler to the complete button
for (const completeButton of completeButtons) {
  completeButton.addEventListener("click", function () {
    // increase task value
    taskNumber.innerText++;
    // decrease header value
    numberHeader.innerText--;
    // get activities name from the activity boxes
    let headerText =
      completeButton.parentNode.parentNode.querySelector(
        ".cart-header"
      ).innerText;
    // get real time and show the message
    const option = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    const realTime = today.toLocaleTimeString("en-US", option);
    // make a dynamic message box in the activity log section and show the message
    const div = document.createElement("div");
    const p = document.createElement("p");
    div.style.backgroundColor = "#F4F7FF";
    div.style.padding = "12px";
    div.style.borderRadius = "12px";
    div.style.marginBottom = "16px";
    p.style.fontSize = "16px";
    p.style.opacity = "70%";
    div.appendChild(p);
    activityHistoryBox.appendChild(div);
    p.innerText = `You have completed the task ${headerText} at ${realTime}`;
    // disable completed button
    completeButton.style.opacity = "40%";
    completeButton.disabled = true;
  });
}
// clear activity when click on the clear history button
const clearHistory = document.getElementById("clear-history");
clearHistory.addEventListener("click", function () {
  activityHistoryBox.style.display = "none";
});
// change body background color when click on the color pallet
document.getElementById("theme-button").addEventListener("click", function () {
  // random number generate 0-255
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  // fixed opacity
  const a = 0.1;
  // RGBA format
  const randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  // RGB format
  const randomColorBtn = `rgb(${r}, ${g}, ${b})`;
  // change body background
  document.body.style.backgroundColor = randomColor;
  document.body.style.backgroundColor.opacity = "10%";
  // change button background
  clearHistory.style.backgroundColor = randomColorBtn;
  for (const completeButton of completeButtons) {
    completeButton.style.backgroundColor = randomColorBtn;
  }
});
