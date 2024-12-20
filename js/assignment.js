"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution");
const willMeetResolutionElement = document.getElementById("will-meet-resolution");
const submissionBtn = document.getElementById("submission-btn");

// Declare your variables here.
const resolution = "Learn JavaScript";
const currentYear = new Date().getFullYear();
let willMeetResolution = true;

function updateYear() {
    // Updated the year in the output
    yearElement.innerText = currentYear;
}

function updateResolution() {
    // Updated the resolution text in the output
    resolutionElement.innerText = resolution;
    willMeetResolutionElement.innerText = willMeetResolution ? "Yes, I will!" : "Maybe next time.";
}

function render() {
    // Called functions to update all elements
    updateYear();
    updateResolution();
}

submissionBtn.addEventListener("click", function () {
    // Rendered the updated values when the button is clicked
    render();
});
