function CalculateBMI(){
    var height = document.getElementById("height");
    var weight = document.getElementById("weight"); 
    var result = document.getElementById("result");

    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);
    if(isNaN(heightValue || isNaN(weightValue))) {
        result.innerHTML = "Please enter a valid number";
        return;
    } else{
        var bmi = weightValue / (Math.pow(heightValue / 100, 2));
        let category = ""
        if(bmi < 18.5) {
            category = "Underweight";
        } else if(bmi < 25) {
            category = "Normal";
        } else if(bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        result.innerHTML = "BMI: " + bmi.toFixed(2) + "<br>" + "Category: " + category;
        result.style.display = "block";
    }
}
