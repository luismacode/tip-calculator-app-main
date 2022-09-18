export function validationInput(ele, regExp) {
  ele.addEventListener("input", (e) => {
    const error = e.target.parentElement.firstElementChild;
    const isValid = regExp.test(e.target.value);
    if (!isValid) {
      e.target.style = "border:1px solid var(--red)";
      if (e.target.value === "0") error.textContent = "can't be zero";
      if (/[a-z]+/.test(e.target.value))
        error.textContent = "can't be a letter";
      return;
    }
    e.target.style = "border:1px solid var(--strong-cyan);";
    error.textContent = "";
  });
}
