const checkBtn = document.getElementById("check-btn");
const clearButn = document.getElementById("clear-btn");
const inputEl = document.getElementById("user-input");
const resultsEl = document.getElementById("results");

const numberValidator = function () {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (inputEl.value === "") {
    alert("Please provide a phone number");
  } else if (regex.test(inputEl.value)) {
    resultsEl.textContent = `Valid US number: ${inputEl.value}`;
  } else {
    resultsEl.textContent = `Invalid US number: ${inputEl.value}`;
  }
};

checkBtn.addEventListener("click", numberValidator);

clearButn.addEventListener("click", function () {
  resultsEl.textContent = "";
  inputEl.value = "";
});
