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
        const height = document.getElementById('height').value;
        const weight = document.getElementsByClassName('field-weight')[0].value;
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
    }
}

// DRY - don't repreat yourself
// console.log(bmiCalculator)
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

//Add event to the form
document.querySelector('.bmi-form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    // console.log(evt);
    bmiCalculator.getBmiResult();
    saveResult();
    loadHistory();
});

const fields = document.querySelectorAll('.field');
fields.forEach($field => {
    $field.addEventListener('blur', (evt) => {
        const $target = evt.target;
        if ($target.validity.valueMissing) {
            $target.setCustomValidity(`Please insert your ${$target.id}`);
        } else if ($target.validity.stepMismatch) {
            $target.setCustomValidity(`Please insert a valid ${$target.id}`);
        } else {
            $target.setCustomValidity('');
        }
        // console.log(evt, "needs validation")
        $target.checkValidity()
    });
})
// this can be a function expression or an array function
function saveResult() {
    if (!localStorage) return;
    // get current history
    const currentHistory = JSON.parse(localStorage.getItem('bmi-history'));

    //save the user data in object
    const newData = {
        date: new Date(),
        height: document.querySelector('.field-height').value,
        weight: document.querySelector('.field-weight').value,
        result: document.querySelector('.result').textContent
    };
    console.log(newData)
    //add the user data to the current history
    currentHistory.push(newData);
    console.log(currentHistory)

    //update the localstorage with the new object in it
    localStorage.setItem('bmi-history', JSON.stringify(currentHistory))
}
// this can be a function expression or an array function
function loadHistory() {
    if (localStorage && !localStorage.getItem('bmi-history')) {
        localStorage.setItem('bmi-history', JSON.stringify([]))
    }

    //get the data back from local storage
    const historyList = JSON.parse(localStorage.getItem('bmi-history'))
   
    
    // select the element that will load the data in the html
    const $history = document.querySelector('.history')
    $history.innerHTML = ''
    
    
    //load the data to that html (array)
    historyList.forEach((item) => {
        // format date to be in a readable version for the user
        const formattedDate = new Date(item.date).toDateString()
        
        //create a template for the html data (<li>)
        const template = `<li>${formattedDate}: Based on height ${item.height}m and weight ${item.weight}kg \n${item.result} </li>`;
        $history.insertAdjacentHTML('afterbegin', template);
    })
    //give the latest result a classs to make it load the css
    const $lastListItem = $history.querySelector('li:first-child')
    // $lastListItem.className = 'bold'
    $lastListItem.classList.add('bold')

}

loadHistory();
