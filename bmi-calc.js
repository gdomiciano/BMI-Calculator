//create basic Object
let bmiCalculator = {
    elementsObj: {
        title: 'BMI Calculator',
        intro: '<strong>Body Mass Index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.',
    },

    // add methods
    calculateBmi() {
        const height = document.getElementById('height').value; // select the element based on the ID
        const weight = document.getElementsByClassName('field-weight')[0].value; // select the elements based on class name
        return weight / height**2;
    },

    getBmiResult() {
        // use this to access another property ot method from th object
        // this === bmiCalculator
        const BMI = this.calculateBmi();
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
}

console.log(bmiCalculator.elementsObj)
for (const element in bmiCalculator.elementsObj) {
    console.log(element)

    if (bmiCalculator.elementsObj.hasOwnProperty(element)) {

        const $htmlElement = document.querySelector(`.${element}`);
        // check if it is raw html content
        if(bmiCalculator.elementsObj[element].includes('</')) {
            $htmlElement.insertAdjacentHTML('afterbegin', bmiCalculator.elementsObj[element]);
        } else {
            $htmlElement.textContent = bmiCalculator.elementsObj[element];
        }

    }
}
