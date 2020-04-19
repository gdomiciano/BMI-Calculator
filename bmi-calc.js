// create an object called bmiCalculator
const bmiCalculator = {
    elementsObj: {
        // create a title property and assign a string as a value
        title: 'BMI Calcuator',
        // create a intro property and assign a string containing raw HTML as a value
        intro: '<strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.',
        'long-desc': '<strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.<strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.<strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres.<strong>Body mass index (BMI)</strong> is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m<sup>2</sup>, resulting from mass in kilograms and height in metres. '
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

// DRY - don't repreat yourself
console.log(bmiCalculator)
for (const element in bmiCalculator.elementsObj) {
    obj = bmiCalculator.elementsObj
    if (obj.hasOwnProperty(element)) {
        
        const $htmlEl = document.querySelector(`.${element}`);
        const value = obj[element]

        if(value.includes('</')) {
            $htmlEl.insertAdjacentHTML('afterbegin', value);
        } else {
            $htmlEl.textContent = value
        }
    }
}


// -------- can be removed from below, it is here fore reference ----------- //
// // get the h1 element based on the classname from the DOM and assign it to a $title constant
// const $title = document.querySelector('.title')

// // assign the value from the title property from the bmiCalcuator object to the text xcontent og the h1's element
// $title.textContent = bmiCalculator.title


// // get the p element based on the classname from the DOM and assign it to a $intro constant
// const $intro = document.querySelector('.intro')

// //add the value from the intro property to the $intro element using the insertAdjacentHTML method available to any html element inside the DOM 
// // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// $intro.insertAdjacentHTML('afterbegin', bmiCalculator.intro);



