/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let personalInfo = {name: 'Alexander Dohms', 
            photo: 'images/profile.png', 
            favoriteFoods: ['Pizza', 'Sushi', 'Cereal'],
            hobbies: ['Guitar', 'Learning', 'Excercising'],
            placesLived:  [
            {
               "place" : "Florida" ,
               "length" : "18yrs"
            }, 
            {
               "place" : "Italy",
               "length" : "2yrs"
            }, 
            {
               "place" : "Idaho",
               "length" : "2yrs"  
            },
            {
               "place" : "Colorado",
               "length" : "1yr"
            },
            {
               "place" : "Utah",
               "length" : "1yr"
            },
            {
               "place" : "Russia",
               "length" : "2yr"
            },
            {
               "place" : "England",
               "length" : "1yr"
            } 
            ]     
}
// Step 2: Inside of the object, add a property named name with a value of your name as a string
//Done above
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
//Done Above
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
//Done Above
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
//Done Above
// Step 6: Add another property named placesLived with a value of an empty array
//Done Above
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
//Done Above
// Step 8: For each property, add appropriate values as strings
//Done Above
// Step 9: Add additional objects with the same properties for each place you've lived
//Done Above

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = personalInfo.name;
// console.log(personalInfo.name, "test");
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('src', personalInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
// document.querySelector('img').setAttribute('Photo', personalInfo.photo);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Create an array of li elements to append to the ul
var liElementsFood = [];

for (let i = 0; i < personalInfo.favoriteFoods.length; i++ ) {
   
   liElementsFood[i] = document.createElement("li" + i);
   liElementsFood[i].appendChild(document.createTextNode(" " + personalInfo.favoriteFoods[i]));
   document.getElementById("favorite-foods").appendChild(liElementsFood[i]);
     
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//Done above

// Step 6: Repeat Step 4 for each hobby in the hobbies property
var liElementsHobbies = [];

for (let i = 0; i < personalInfo.hobbies.length; i++) {
   liElementsHobbies[i] = document.createElement("li" + i);
   liElementsHobbies[i].appendChild(document.createTextNode(" " + personalInfo.hobbies[i]));
   document.getElementById("hobbies").appendChild(liElementsHobbies[i]);
}
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
//Done above

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
var dtPlaces = [];
var ddLengths = [];

for (let i = 0; i < personalInfo.placesLived.length; i++) {

   dtPlaces[i] = document.createElement("dt" + i);
   dtPlaces[i].appendChild(document.createTextNode(" " + personalInfo.placesLived[i].place));
   document.getElementById("places-lived").appendChild(dtPlaces[i]);
   
   ddLengths[i] = document.createElement("dd" + i);
   ddLengths[i].appendChild(document.createTextNode(" " + personalInfo.placesLived[i].length));
   document.getElementById("places-lived").appendChild(ddLengths[i]);
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
//Done above