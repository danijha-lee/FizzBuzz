function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    
    let errorState = false;
    let errorMsg = "";


    if (isNaN(fizzValue) || isNaN(buzzValue)) {
        errorState = true;
        errorMsg += "Please use numbers<hr/>";

    }

   
    if (fizzValue > 200 || fizzValue < 1 || buzzValue > 200 || buzzValue < 1) {
        errorState = true;
        errorMsg += "1 and 200 are the limit<hr/>"
    }

    if (errorState) {
        Swal.fire(
            'Something went wrong',
            `${errorMsg}`,
            'error'
        )
        return;
    }
}

function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];

    for (let index = 1; index <= 100; index++) {

        if (index % fizzValue == 0 && index % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if (index % fizzValue == 0) {
            returnArray.push('Fizz');
        } else if (index % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(index);
        }
    }
    return returnArray;
}

function displayData(fbArray) {
    let tableBody = document.getElementById('results');

    let templateRow = document.getElementById('fbTemplate');

    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll('td');
        rowCols[0].textContent = fbArray[index];
        rowCols[1].textContent = fbArray[index + 1];
        rowCols[2].textContent = fbArray[index + 2];
        rowCols[3].textContent = fbArray[index + 3];
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }
}