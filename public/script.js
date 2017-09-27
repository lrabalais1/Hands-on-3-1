/* Hands-On Project 3-1
   Author: Logan Rabalais
   Date: 9/26/17
   Purpose:
   
*/
// function to add values of selected check boxes and display total
function calcTotal()
{
var itemTotal = 0; //stores a "running total" of selected items
var items = document.getElementsByTagName("input"); //creates an array of <input> elements

  
    for (var i=0; i<5; i++) //i is the counter, initialized at 1 and stops at i=5
  {
      if(items[i].checked) //check to see if each of the elements of the array is checked
      {
        itemTotal += (items[i].value *1); //if it is checked, add to the running total
      }
  }

        document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2);
  
}
var submitButton = document.getElementById("sButton");
if (submitButton.addEventListener)
{
  submitButton.addEventListener("click", calcTotal, false); 
}