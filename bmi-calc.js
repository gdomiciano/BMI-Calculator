// create an object called bmiCalculator
const bmiCalculator = {
    elementsObj: {
        // create a title property and assign a string as a value
        title: 'BMI Calcuator',
        // create a intro property and assign a string containing raw HTML as a value
        intro: '<strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.'
    },

    //add methods
    calculateBmi: () => {
        const height = document.getElementById('height').value; // select the element based on the ID
        const weight = document.getElementsByClassName('field-weight')[0].value; // select the elements based on class name
        return weight / height**2;
    },

    getBmiResult() {
        // debugger;
        //this === bmiCalculator
        const BMI = this.calculateBmi().toFixed(2);
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
    },

    saveResult () {
        if (!localStorage) return;
        const currentHistory = JSON.parse(localStorage.getItem('bmi-history'));
        const newData = {
            date: new Date(),
            height: document.querySelector('.field-height').value,
            weight: document.querySelector('.field-weight').value,
            result: document.querySelector('.result').textContent
        };
        currentHistory.push(newData)
        localStorage.setItem('bmi-history', JSON.stringify(currentHistory));
    }
}

// DRY principle = Don't Repreat Yourself Principle
// console.log(bmiCalculator)
for (const element in bmiCalculator.elementsObj) {
    obj = bmiCalculator.elementsObj;

    if (obj.hasOwnProperty(element)) {
        
        const $htmlEl = document.querySelector(`.${element}`);
        const value = obj[element];

        if(value.includes('</')) {
            $htmlEl.insertAdjacentHTML('afterbegin', value);
        } else {
            $htmlEl.textContent = value;
        }
    }
}

// create history for bmi later on
if (localStorage && !localStorage.getItem('bmi-history')) localStorage.setItem('bmi-history', JSON.stringify([]))

document.querySelector('.bmi-form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(evt);
    bmiCalculator.getBmiResult();
    bmiCalculator.saveResult();
});


// add event to validade on blur for each field
const fields = document.querySelectorAll('.field');
fields.forEach($field => {

    $field.addEventListener('blur', (evt) => {

        if (evt.target.validity.valueMissing) {
            evt.target.setCustomValidity(`Please insert your ${evt.target.id}`);
        } else if (evt.target.validity.stepMismatch) {
            evt.target.setCustomValidity(`Please insert a valid ${evt.target.id}`);
        } else {
            evt.target.setCustomValidity('');
        }

        console.log(evt)
        console.log(evt.target.className, ': needs validation on blur');

        evt.target.checkValidity();
    });
});