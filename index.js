function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid weight and height values.";
        return;
    }

    var bmi = weight / (height * height);
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
}
