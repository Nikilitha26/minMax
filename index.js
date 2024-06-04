document.addEventListener("DOMContentLoaded", function () {
    const valuesInput = document.getElementById("values");
    const minimumInput = document.getElementById("minimum");
    const maximumInput = document.getElementById("maximum");
    const showResultsButton = document.querySelector("button");

    showResultsButton.addEventListener("click", function () {
        const values = valuesInput.value.split(",").map(Number);
        const minValue = Math.min(...values);
        const maxValue = Math.max(...values);

        minimumInput.value = minValue;
        maximumInput.value = maxValue;
    });
});
