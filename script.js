const number = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertButton.addEventListener("click", () => {
let numericValue = Number(number.value);

if (number.value === "") {
    output.textContent = "Please enter a valid number";
} else if (isNaN(numericValue)) {
    output.textContent = "Please enter a valid number";
} else if (numericValue < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
} else if (numericValue > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
} else {
    let outputNumber = [];
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" }
    ];

    for (let i = 0; i < romanNumerals.length; i++) {
        while (numericValue >= romanNumerals[i].value) {
            numericValue -= romanNumerals[i].value;
            outputNumber.push(romanNumerals[i].numeral);
        }
    }
    output.textContent = outputNumber.join("");
    
}




});