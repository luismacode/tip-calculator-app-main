import { validationInput } from "./validation.js";
import { calculateTip, calculateTotal } from "./calculation.js";
import { resetStyles, resetValues } from "./reset.js";

const bill = document.getElementById("bill");
const people = document.getElementById("people");
const reset = document.getElementById("reset");
const options = document.querySelectorAll(".button-option");
const optionCustom = document.getElementById("custom");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");

validationInput(bill, /^\d+\.\d{1,2}$/);
validationInput(people, /^[1-9][0-9]*$/);
validationInput(optionCustom, /^[1-4][0-9]%$|^[1-9]%$|50%/);

options.forEach((opt) => {
  opt.addEventListener("click", (e) => {
    options.forEach((opt) => {
      opt.classList.remove("button-option--selected");
    });
    opt.classList.add("button-option--selected");
    if (bill.value && people.value) {
      let tipPerPerson = calculateTip(bill.value, opt.innerText, people.value);
      let totalPerPerson = calculateTotal(
        bill.value,
        opt.innerText,
        people.value
      );
      tipAmount.textContent = tipPerPerson;
      totalAmount.textContent = totalPerPerson;
      reset.removeAttribute("disabled");
    }
  });
});

optionCustom.addEventListener("input", () => {
  if (bill.value && people.value) {
    let tipPerPerson = calculateTip(
      bill.value,
      optionCustom.value,
      people.value
    );
    let totalPerPerson = calculateTotal(
      bill.value,
      optionCustom.value,
      people.value
    );
    tipAmount.textContent = tipPerPerson;
    totalAmount.textContent = totalPerPerson;
    reset.removeAttribute("disabled");
  }
});

reset.addEventListener("click", (e) => {
  resetValues(reset, bill, people, optionCustom);
  resetStyles(bill, people, optionCustom);
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
});
