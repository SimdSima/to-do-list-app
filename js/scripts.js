function newItem() {

  //javascript
  //1. Adding a new item to the list of items: 

  // jQuery Code
  // Step 1: store each <li> element in a variable:
  let li = $('<li></li>');
  /* Step 2: getting input values from the index page using val() since index page has 
  <input type="text" name="ListItem" id="input"/>*/
  let inputValue = $('#input').val();
  // Step 3: append the value into another element li
  li.append(inputValue);

  // Step 4: conditional statement:
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  /*old JavaScriptcode:
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
 
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = document.querySelector('#list');
    list.appendChild(li);
  }
    */

  //2. Crossing out an item from the list of items by clicking on it:

  function crossOut() {
    li.toggleClass("strike");
}

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  /*old JavaScriptcode:
    function crossOut() {
      li.classList.toggle("strike");
    }
 
    li.addEventListener("dblclick",crossOut);
       */

  //3(i). Adding the delete button "X": 

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  /*old JavaScriptcode:
 let crossOutButton = document.createElement("crossOutButton");
 crossOutButton.appendChild(document.createTextNode("X"));
 li.appendChild(crossOutButton);
 
 crossOutButton.addEventListener("click", deleteListItem);
*/

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    // to hide an element need to add the class delete to it:
    li.addClass("delete");
  }

  /*old JavaScriptcode:
   function deleteListItem(){
     li.classList.add("delete")
   }
*/

  // 4. Reordering the items:
  $('#list').sortable();
}