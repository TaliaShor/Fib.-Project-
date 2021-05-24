
document.getElementById('buttonOne').addEventListener('click', function() {


    const inputNumber = document.getElementById('numberInput');
    

    if (parseInt(inputNumber.value) > 50) {
        document.querySelector('.results-wrapper').innerHTML = '';
        document.getElementById('errorMessage').innerHTML = `Can't be larger than 50`;
    
    } else if (inputNumber.value == 42) {
        document.querySelector('.results-wrapper').innerHTML = '';
        document.getElementById('serverError').innerHTML = 'Server Error: 42 is the meaning of life';
    } 

    else {
        document.getElementById('errorMessage').style.display ='none';
        document.getElementById('serverError').style.display ='none';
        document.getElementById('loaderSymbol').style.display = 'none';
        let result = fibonacci(parseInt(inputNumber.value));
        document.querySelector('.results-wrapper').innerHTML = result;
    }
})
    
function fibonacci(x) { 

    let z = 1;
    let y = 0;
    let sum;
    for (let i = 0; i < x; i++) { 
        sum = z + y; 
        z = y; 
        y = sum; 
    }

    return y;

    }

