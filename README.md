# BMI-Calculator
Body Mass Index Calculator project




BMI Calculator
This is a simple BMI calculator web application built using HTML, CSS, and JavaScript. The application allows users to enter their height and weight, and calculates their BMI based on the input.


# How to Use
To use the BMI calculator, simply open the index.html file in your web browser. You will see a form with two input fields: one for height (in centimeters) and one for weight (in kilograms). Enter your height and weight into the form, and click the "Calculate" button to see your BMI.

The BMI calculator will display your BMI value, as well as a message indicating whether you are underweight, normal weight, overweight, or obese based on your BMI. If you want to calculate your BMI again, simply enter new values into the form and click the "Calculate" button again.

# Files
The following files are included in this project:

*index.html*: The main HTML file for the BMI calculator.
*style.css*: The CSS file that styles the BMI calculator.
*script.js*: The JavaScript file that handles the BMI calculation and result display.
How it Works
The BMI calculator uses the following formula to calculate BMI:

### BMI = weight / (height / 100)^2
In the script.js file, we retrieve the values of the height and weight input fields and calculate the BMI using this formula. We then display the BMI value and the corresponding weight status message on the webpage using JavaScript DOM manipulation.