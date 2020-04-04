document.querySelector("#holiday-begin-selector").addEventListener("change", (event) => {
  const days = calcTime(event.target.value);
  const daysElement = document.querySelector("#days");
  daysElement.innerText = days;
  days < 5 ? daysElement.classList.add("alert") : daysElement.classList.remove("alert");
});

window.addEventListener("load", () => {
  document.querySelector("#holiday-begin-selector").value = currentDatePlusFive();
  document.querySelector("#days").innerText = calcTime(currentDatePlusFive());
});

function calcTime(e) {
  const targetDate = e;
  const days = Math.round((new Date(targetDate) - new Date()) / (1000 * 60 * 60 * 24));
  return days;
}

function currentDatePlusFive() {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  const currentDateISO = currentDate.toISOString().slice(0, 10);
  return currentDateISO;
}