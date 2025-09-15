// variables
const completeButtons = document.getElementsByClassName(" complete-button");
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

// document.getElementById("date-time").innerText = setDeadline("2025-09-20");
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
    activityLog = headerText;
    // add activities in the box
    activityHistoryBox.innerHTML = `
            <div>
                <p>You have completed the task ${activityLog} at </p>
            </div>
        `;
  });
}
