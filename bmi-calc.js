let weight = 55;
let height = 1.67;
const BMI = weight / (height * height);
let result; 


if (BMI < 18.5) {
    result = `Your BMI is ${BMI}, this means that you are underweight`;
} else if (BMI > 18.5 && BMI < 25) {
    result = `Your BMI is ${BMI}, this means that you have a normal weight`;
} else if (BMI > 25 && BMI < 30) {
    result = `Your BMI is ${BMI}, this means that you are overweight`;
} else if (BMI > 30) {
    result = `Your BMI is ${BMI}, this means that you are obese`;
} else {
    result = 'Sorry, something went wrong. Try again later.'; 
}

console.log(result)