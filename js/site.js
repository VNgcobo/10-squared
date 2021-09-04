//get values from page
//control function

function getValues(){
    //get values from the page(Document Object Model Manipulation - get values and store them in a variable)
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
   
    //convert user input to integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //error handling: validate user input
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter numbers");
    }

}

//generate numbers from the startValue to the endValue
//logic function
function generateNumbers(sValue, eValue){

    let numbers = [];

    //want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++){
        //this execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}

//display numbers to the page and mark even numbers bold\
//display function
function displayNumbers(numbers){
    //loop over array
    let templateRows = "";

    for(let i = 0; i < numbers.length; i++){

        let className = "even";
        let number = numbers[i];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;

    }

    document.getElementById("results").innerHTML = templateRows;
}