const calculateBmi = function () { 
    let weight = document.getElementById('weight').value;
    let height = document.getElementsByClassName('field-height')[0].value;
    
    return weight / (height**2) 
};

function getBmiClass () {
    const bmiResult = calculateBmi();
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