
// (
    //     function () {
    
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

//     }
// )();