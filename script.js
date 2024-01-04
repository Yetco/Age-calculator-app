// Input elements
const input_day = document.querySelector(".input-day");
const input_month = document.querySelector(".input-month");
const input_year = document.querySelector(".input-year");

// Button element
const btn = document.querySelector(".btn");

// Output elements
const output_day = document.querySelector(".output-day");
const output_month = document.querySelector(".output-month");
const output_year = document.querySelector(".output-year");

// Error states
const errorDay = document.querySelector("#error-day");
const errorMonth = document.querySelector("#error-month");
const errorYear = document.querySelector("#error-year");

// Error borders
const inpD = document.querySelector("#inD");
const inpM = document.querySelector("#inM");
const inpY = document.querySelector("#inY");

// Error messages
const errorD = document.querySelector(".errorD");
const errorM = document.querySelector(".errorM");
const errorY = document.querySelector(".errorY");

// Function to check if the input is valid

let isValid = false;

// Click button
btn.addEventListener("click", () => {
  checkEmpty();
  calculateAge();
});

// Check if the input is empty
function checkEmpty() {
  if (
    input_day.value === "" ||
    input_month.value === "" ||
    input_year.value === ""
  ) {
    errorDay.textContent = "This field is required";
    inpD.style.border = "2px solid red";
    errorD.style.color = "red";
    errorMonth.textContent = "This field is required";
    inpM.style.border = "2px solid red";
    errorM.style.color = "red";
    errorYear.textContent = "This field is required";
    inpY.style.border = "2px solid red";
    errorY.style.color = "red";
  }
}

// Check if the input is valid
input_day.addEventListener("input", () => {
  const selectedDay = +input_day.value;
  const selectedMonth = +input_month.value;

  if (selectedMonth === 2) {
    if (selectedDay > 28 || selectedDay < 1) {
      errorDay.textContent = "Must be a valid day";
      inpD.style.border = "2px solid red";
      errorD.style.color = "red";
      isValid = false;
      return;
    }
  } else {
    errorDay.textContent = "";
    inpD.style.border = "2px solid hsl(0, 1%, 44%)";
    errorD.style.color = "hsl(0, 1%, 44%)";
    isValid = true;
  }

  if (
    selectedMonth === 4 ||
    selectedMonth === 6 ||
    selectedMonth === 9 ||
    selectedMonth === 11
  ) {
    if (selectedDay > 30 || selectedDay < 1) {
      errorDay.textContent = "Must be a valid day";
      inpD.style.border = "2px solid red";
      errorD.style.color = "red";
      isValid = false;
      return;
    }
  } else {
    errorDay.textContent = "";
    inpD.style.border = "2px solid hsl(0, 1%, 44%)";
    errorD.style.color = "hsl(0, 1%, 44%)";
    isValid = true;
  }

  if (
    +input_day.value < 1 ||
    +input_day.value > 31
    //   input_day.value === ""
  ) {
    errorDay.textContent = "Must be a valid day";
    inpD.style.border = "2px solid red";
    errorD.style.color = "red";
    isValid = false;
  } else {
    errorDay.textContent = "";
    inpD.style.border = "2px solid hsl(0, 1%, 44%)";
    errorD.style.color = "hsl(0, 1%, 44%)";
    isValid = true;
  }
});

input_month.addEventListener("input", () => {
  if (+input_month.value < 1 || +input_month.value > 12) {
    errorMonth.textContent = "Must be a valid month";
    inpM.style.border = "2px solid red";
    errorM.style.color = "red";
    isValid = false;
  } else {
    errorMonth.textContent = "";
    inpM.style.border = "2px solid hsl(0, 1%, 44%)";
    errorM.style.color = "hsl(0, 1%, 44%)";
    isValid = true;
  }
});

input_year.addEventListener("input", () => {
  if (+input_year.value < 1 || +input_year.value > 2024) {
    errorYear.textContent = "Must be a valid year";
    inpY.style.border = "2px solid red";
    errorY.style.color = "red";
    isValid = false;
  } else {
    errorYear.textContent = "";
    inpY.style.border = "2px solid hsl(0, 1%, 44%)";
    errorY.style.color = "hsl(0, 1%, 44%)";
    isValid = true;
  }
});

// Calculate the age
// Function to calculate age
function calculateAge() {
  if (isValid) {
    const birthDate = new Date(
      `${input_year.value}-${input_month.value}-${input_day.value}`
    );
    const currentDate = new Date();

    if (isNaN(birthDate.getTime())) {
      // Invalid date, handle accordingly
      output_year.textContent = "";
      output_month.textContent = "";
      output_day.textContent = "";
      return;
    }

    const ageInMilliseconds = currentDate - birthDate;

    const years = Math.floor(
      ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
    );
    const remainingMilliseconds =
      ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000);

    const months = Math.floor(
      remainingMilliseconds / (30.44 * 24 * 60 * 60 * 1000)
    );
    const days = Math.floor(
      (remainingMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) /
        (24 * 60 * 60 * 1000)
    );

    output_year.textContent = years;
    output_month.textContent = months;
    output_day.textContent = days;
  } else {
    output_year.textContent = "";
    output_month.textContent = "";
    output_day.textContent = "";
  }
}
