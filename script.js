const checkBtn = document.getElementById("check-btn");
const clearButn = document.getElementById("clear-btn");
const inputEl = document.getElementById("user-input");
const resultsEl = document.getElementById("results-div");

const numberValidator = function () {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  if (inputEl.value === "") {
    alert("Please provide a phone number");
  } else if (regex.test(inputEl.value)) {
    resultsEl.classList.remove("hidden");
    resultsEl.textContent = `Valid US number: ${inputEl.value}`;
  } else {
    resultsEl.classList.remove("hidden");
    resultsEl.textContent = `Invalid US number: ${inputEl.value}`;
  }
};

checkBtn.addEventListener("click", numberValidator);

clearButn.addEventListener("click", function () {
  resultsEl.innerHTML = "";
  inputEl.value = "";
});
