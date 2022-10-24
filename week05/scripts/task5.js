/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
var today = new Date();

// Step 2: Declare another variable to hold the day of the week
var day = today.getDay();

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
//Done Above
// Step 4: Declare a variable to hold a message that will be displayed
var message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day == 0 || day == 6){
   message = "Wohoo! It's the weekend!";
}
else if (day > 6){
   message = "Error: Invalid Day";
}
else {
   message = "Hang in There!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
//Done Above
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
var anotherMessage;
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day) {
   case 0:
      anotherMessage = "Sunday"
      break;
   case 1:
      anotherMessage= "Monday"
      break;
   case 2:
      anotherMessage = "Tuesday"
      break;
   case 3:
      anotherMessage = "Wednesday"
      break;
   case 4:
      anotherMessage = "Thursday"
      break;
   case 5:
      anotherMessage = "Friday"
      break;
   case 6:
      anotherMessage = "Saturday"
      break;
   default:
      anotherMessage = "Error Invalid Day";
      break;
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').innerHTML = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').innerHTML = anotherMessage;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temples){
   
   temples.forEach(element => {
      
      
   var newArticle = document.createElement("ARTICLE");
   var h3Name = document.createElement("h3");
   h3Name = element.templeName;
   var h4Location = document.createElement("h4");
   h4Location = element.location;
   var h4Dedicated = document.createElement("h4");
   h4Dedicated = element.dedicated;
   var templeImage = document.createElement("img");
   templeImage.src = element.imageUrl;
   templeImage.alt = element.templeName;
   newArticle.appendChild(document.createTextNode(h3Name));
   newArticle.appendChild(document.createTextNode(h4Location));
   newArticle.appendChild(document.createTextNode(h4Dedicated));
   newArticle.appendChild(templeImage);
   document.getElementById('temples').appendChild(newArticle);
      
   
   });
}

var api_url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
//output(temples);
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
async function getTemples(URL){
   var response = await fetch(api_url);
   temples = await response.json();
   
   //console.log(data);
   //output(temples);

}
 getTemples(api_url);

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
document.getElementById("temples").innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy(){
   reset(); 

   getTemples(api_url);
   var sortValue = document.getElementById("sortBy").value;
   if (sortValue == "templeNameAscending"){
      temples.sort;
      output(temples);

   }
   else{
      temples.reverse();
      output(temples);
   }
   
}

// console.log(temples);
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById("sortBy").addEventListener("click", sortBy);
document.getElementById("sortBy").addEventListener("change", sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
