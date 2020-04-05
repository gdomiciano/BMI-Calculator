let weight = 55;
let height = 1.67;
const BMI = weight / (height * height);


function getBmiResult(bmiResult){
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

    return result;
}
