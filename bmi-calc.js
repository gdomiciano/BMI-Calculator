//create basic Object
let bmiCalculator = {
    title: 'BMI Calculator',
    introduction: '<strong>Body Mass Index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.'
}

// replace simple string content using object
let $title = document.querySelector('.title')
$title.textContent = bmiCalculator.title

// replace raw HTML using insertAdjacentHTML
let $intro = document.querySelector('.intro')
console.log({$intro}) // check available methods inside the element
$intro.insertAdjacentHTML('afterbegin', bmiCalculator.introduction)


const calculateBmi = function() {
        const height = document.getElementById('height').value; // select the element based on the ID
        console.log(height)
        const weight = document.getElementsByClassName('field-weight')[0].value; // select the elements based on class name
        console.log(weight)
    return weight / height**2;
}

function getBmiResult() {
    const BMI = calculateBmi();
    let result = 'Your BMI is';
    let color = 'black';

    if (BMI < 18.5) {
        color = 'red'
        result = `${result} ${BMI}, this means that you are underweight`;
    } else if (BMI > 18.5 && BMI < 25) { 
        color = 'green'
        result = `${result} ${BMI}, this means that you have a normal weight`;
    } else if (BMI > 25 && BMI < 30) {
        color = 'orange'
        result = `${result} ${BMI}, this means that you are overweight`;
    } else if (BMI > 30) {
        color = 'red' 
        result = `${result} ${BMI}, this means that you are obese`;
    } else {
        result = 'Sorry, something went wrong. Try again later.'; 
    }

    let p = document.querySelector('.result');
    p.textContent = result;
    p.style.color = color;
}