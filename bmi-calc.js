
(
    function () {
        const height = parseFloat(prompt("Insert your height (m):"));
        const weight = parseFloat(prompt("Insert your weight (kg):"));

        const calculateBmi = function(w, h) {
            return w / h**2
        }

        function getBmiResult(BMI) {
            let result = 'Your BMI is';
            
            if (BMI < 18.5) {
                result = `${result} ${BMI}, this means that you are underweight`;
            } else if (BMI > 18.5 && BMI < 25) { 
                result = `${result} ${BMI}, this means that you have a normal weight`;
            } else if (BMI > 25 && BMI < 30) {
                result = `${result} ${BMI}, this means that you are overweight`;
            } else if (BMI > 30) {
                result = `${result} ${BMI}, this means that you are obese`;
            } else {
                result = 'Sorry, something went wrong. Try again later.'; 
            }

            console.log(result)
        }

        getBmiResult(calculateBmi(weight, height));
    }
)();