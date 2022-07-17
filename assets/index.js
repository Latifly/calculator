const displayValue = document.querySelector("#display-value");
const button = document.querySelectorAll("button");

displayValue.textContent = 0;

let isFromEqual = false;
let temp = 0;

button.forEach((btn) => {
  btn.addEventListener("click", function () {
    let value = parseFloat(btn.dataset.value);

    if (isNaN(value)) value = btn.dataset.value;

    switch (value) {
      case "double0":
        displayValue.textContent += "00";
        return;
      case "BS":
        if (displayValue.textContent.length - 1 === 0) {
          displayValue.textContent = "0";
          return;
        }
        displayValue.textContent = displayValue.textContent.slice(0, -1);
        return;
      case "C":
        displayValue.textContent = 0;
        return;
      case "=":
        console.log(displayValue.textContent);
        console.log(temp);
        displayValue.textContent = eval(temp);
        isFromEqual = true;
        return;
      default:
        if (isNaN(value) && isNaN(displayValue.textContent.slice(-1))) return;
        if (displayValue.textContent === "0") displayValue.textContent = "";
        if (isFromEqual && !isNaN(value)) {
          displayValue.textContent = "";
        }

        isFromEqual = false;

        displayValue.textContent += value;
        temp = displayValue.textContent.replaceAll("X", "*");
        temp = temp.replaceAll("%", "/100");
        return;
    }
  });
});
