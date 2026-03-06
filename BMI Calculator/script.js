function calculateBMI() {

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;

let bmiText = document.getElementById("bmiValue");
let categoryText = document.getElementById("category");

if(height === "" || weight === "" || height <= 0 || weight <= 0){
alert("Please enter valid height and weight");
return;
}

let heightMeter = height / 100;

let bmi = weight / (heightMeter * heightMeter);

bmi = bmi.toFixed(2);

bmiText.innerText = bmi;

let category = "";

categoryText.className = "";

if(bmi < 18.5){
category = "Underweight";
categoryText.classList.add("underweight");
}
else if(bmi < 25){
category = "Normal Weight";
categoryText.classList.add("normal");
}
else if(bmi < 30){
category = "Overweight";
categoryText.classList.add("overweight");
}
else{
category = "Obese";
categoryText.classList.add("obese");
}

categoryText.innerText = category;

}

function resetForm(){

document.getElementById("height").value = "";
document.getElementById("weight").value = "";
document.getElementById("bmiValue").innerText = "--";
document.getElementById("category").innerText = "";

}