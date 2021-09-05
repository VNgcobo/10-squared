//get values from page
//controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //convert user input to integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //validate user input
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //call displayNumbers
        displayNumbers(numbers);
    } else{
        alert("You must enter a number!"); 
    }
}

//generate the numbers
//logic function
function generateNumbers(sValue, eValue){
    let numbers = [];

    //get values from startValue to endValue
    for(index = sValue; index <= eValue; index++){
        //loop from sValue until index = eValue
        numbers.push(index);
    }
    return numbers;
}

//display the numbers
//view function
function displayNumbers(numbers){
  //loop over the array
  let templateRows = "";

  for(i = 0; i < numbers.length; i++){
      let className = "even";

      if(number % 2 == 0){
          className = "even";
      } else{
          className = "odd";
      }

      templateRows += `<tr><td ${className}>${results}</td></tr>`
  }
  document.getElementById("results").innerHTML = templateRows;
}