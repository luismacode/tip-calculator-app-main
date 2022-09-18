export function resetValues(reset, ...inputs) {
  reset.setAttribute("disabled", "");
  inputs.forEach((input) => {
    input.value = "";
  });
}
export function resetStyles(...inputs) {
  inputs.forEach((input) => {
    input.style = "border:none";
  });
}
