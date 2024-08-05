let gender = prompt("Please enter your gender (male/female):");
let weight = Number(prompt("Enter your weight in kilograms:"));
let height = Number(prompt("Enter your height in centimeters:"));
let age = Number(prompt("Enter your age in years:"));

let bmr;

if (gender === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
} else if (gender === "female") {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
} else {
    alert("Invalid gender input");
    bmr = null;
}

if (bmr !== null) {
    alert("Your Basal Metabolic Rate (BMR) is " + bmr.toFixed(2) + " calories per day.");
}