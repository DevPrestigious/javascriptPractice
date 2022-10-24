/* Project */

// APIKey required for https://api-ninjas.com/api/cars
const APIKey = "Jps2xkG29Y/nrH+sbkB14w==XHf4DrvMoNd0jJrD";
// Array to store the different models in
let models = []
// In this project, we'll show the results of two year old models. Adjust this however you'd like to get the models year.
const modelsYear = currentDate.getFullYear() - 2;


// Reset function, resets the cars div.
function reset(){
   document.getElementById("cars").innerHTML = "";
   }
   

// Fill some basic information about the car model.
function output(models){
   
   models.forEach(element => {

   var newArticle = document.createElement("ARTICLE");
   var h3Name = document.createElement("h3");
   h3Name = "Make: ";
   h3Name += capitalizeFirstLetter(element.make);
   
   var h4 = document.createElement("h4");
   h4Year = " | Year: ";
   h4Year += element.year;

   var h4Cylinders = document.createElement("h4");
   h4Cylinders = " | Cylinders: ";
   h4Cylinders += element.cylinders;

   var h4MPG = document.createElement("h4");
   h4MPG = " | MPG: ";
   h4MPG += element.city_mpg;

   var h4Displacement = document.createElement("h4");
   h4Displacement = " | Displacement: ";
   h4Displacement += element.displacement;

   newArticle.appendChild(document.createTextNode(h3Name));
   newArticle.appendChild(document.createTextNode(h4Year));
   newArticle.appendChild(document.createTextNode(h4Cylinders));
   newArticle.appendChild(document.createTextNode(h4Displacement));
   newArticle.appendChild(document.createTextNode(h4MPG));

   document.getElementById('cars').appendChild(newArticle);
   
   });
}

// /# A super function. Listens, gets, waits, put data into an array to be used later.
// Change the size of the array by changing limit in the URL below.
// https://api.api-ninjas.com/v1/cars?limit=2&model=
$(document).ready(function () {
   $('#btn').click(function () {
      model = document.getElementById('model').value
      $.ajax({
         method: 'GET',
         url: 'https://api.api-ninjas.com/v1/cars?limit=4&year='+ modelsYear + '&model=' + model,
         async: false,
         headers: { 'X-Api-Key': APIKey},
         contentType: 'application/json',
         success: function(result) {
            models = result
         },
         error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
         }
      });
      reset()
      output(models)
   });
});

// Some test, uncomment the test button in task6.html to use the log.
$('#test').click(function () {
   {
      for (var i = 0; i < models.length; i++) {
         console.log("Printing the " + i + " result.");
         console.log(models[i]);
      }
   }
   console.log("Printing Model: ");
   console.log(document.getElementById('model').value);
   reset()
   output(models)
   });