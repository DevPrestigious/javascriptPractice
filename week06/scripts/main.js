// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();


function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }
 