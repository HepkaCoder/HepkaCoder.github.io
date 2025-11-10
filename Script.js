const input = document.getElementById("fname");
const output = document.querySelector(".Amout p");
const beforeTaxBtn = document.querySelector(".BeforeTaxButton");
const afterTaxBtn = document.querySelector(".AfterTaxButton");
const TextRobuxTitle = document.querySelector(".TextRobuxTitle")

let isBeforeTax = true;

function updateDisplay() {
    const value = parseFloat(input.value) || 0;
    const result = isBeforeTax ? value / 0.7 : value * 0.7;
    const rounded = Math.round(result);
    output.textContent = `${rounded.toLocaleString()} Robux`;

    const textResult = isBeforeTax ? "You would need:" : "You will get:";
    TextRobuxTitle.textContent = textResult
}

input.addEventListener("input", updateDisplay);

beforeTaxBtn.addEventListener("click", () => {
    isBeforeTax = true;
    beforeTaxBtn.style.transform = "scale(1.03)";
    afterTaxBtn.style.transform = "scale(1)";
    afterTaxBtn.style.backgroundColor = "rgb(9, 37, 58)";
    beforeTaxBtn.style.backgroundColor = "rgb(37, 158, 251)";
    updateDisplay();
});

afterTaxBtn.addEventListener("click", () => {
    isBeforeTax = false;
    beforeTaxBtn.style.transform = "scale(1)";
    afterTaxBtn.style.transform = "scale(1.03)";
    beforeTaxBtn.style.backgroundColor = "rgb(9, 37, 58)";
    afterTaxBtn.style.backgroundColor = "rgb(37, 158, 251)";
    updateDisplay();
});

updateDisplay();


const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});
