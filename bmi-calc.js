let weight = parseFloat(prompt("Insert your weight (kg):"));
let height = parseFloat(prompt("Insert your height (m):"));

if (typeof weight != Number || typeof height != Number) {
    console.log("Invalid input!");
}
  
const calculateBmi = function (w, h) { return w / (h**2) };

function getBmiClass (bmiResult) {
    let result; 

    if (bmiResult < 18.5) {
        result = `Your BMI is ${bmiResult}, this means that you are underweight`;
    } else if (bmiResult > 18.5 && bmiResult < 25) {
        result = `Your bmiResult is ${bmiResult}, this means that you have a normal weight`;
    } else if (bmiResult > 25 && bmiResult < 30) {
        result = `Your bmiResult is ${bmiResult}, this means that you are overweight`;
    } else if (bmiResult > 30) {
        result = `Your BMI is ${bmiResult}, this means that you are obese`;
    } else {
        result = 'Sorry, something went wrong. Try again later.'; 
    }

    console.log(result);
}

const result = calculateBmi(weight, height);
getBmiClass(result);

(function() {
    const result2 = 'new bmi ' + 100 / (1.95**2)
    console.log(result2)
})();