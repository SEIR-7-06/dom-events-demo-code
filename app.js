// SELECT DOM ELEMENTS
const buttonEl = document.getElementById('button');
const inputEl = document.getElementById('input');
const ulEl = document.getElementById('comments-list');

// ANATOMY OF AN EVENT LISTENER
// domElement.addEventListener('eventType', function () {});
// - addEventListener is called on the dom element you want to add an event listener to
// - addEventListener takes 2 arguments
// -- type of event we want to listen for - for example 'click'
// -- callback function - the function to call when the event is triggered


///////////////////////////////////////////////////////////
// Listen for when a user clicks on the button
// Goal: When a user clicks the button, add a new comment
// to the list
buttonEl.addEventListener('click', function (event) {
  // Psuedocode
  // Step 1: Get the value typed into the input (store in variable)
  const inputVal = inputEl.value;
  // Step 2: Create an LI element
  const newComment = document.createElement('li');

  // Step 2a: Add a "comment" class to the LI
  newComment.setAttribute('class', 'comment');
  // newComment.classList.add('comment');

  // Step 3: Insert the input value into the new LI
  newComment.textContent = inputVal;
  // console.log(newComment);

  // Step 4: Append the LI element to the page inside the UL
  ulEl.append(newComment);

  // Step 5: Clear out the input
  inputEl.value = '';
});


///////////////////////////////////////////////////////////
// Goal: When someone clicks on a comment, delete that comment
// Referred to as "Event Delegation"
ulEl.addEventListener('click', function (event) {
  console.log(event.target);

  // event.target.style.color = 'red';
  event.target.remove();

  // console.log('Clicked on the UL element!!!')
});


///////////////////////////////////////////////////////////
// Extra Credit:
// Goal: When the user presses the "Enter" key on the input
// Add a new comment to the list

// Listen for a 'keypress' event on our input element
inputEl.addEventListener('keypress', function (event) {
  // console.log(event);

  // console.log(event.code);

  // If the 'Enter' key was pressed, add comment to the list
  if (event.code === 'Enter') {
    // Step 1: Get the value typed into the input (store in variable)
    const inputVal = inputEl.value;
    // Step 2: Create an LI element
    const newComment = document.createElement('li');

    // Step 2a: Add a "comment" class to the LI
    // newComment.setAttribute('class', 'comment');
    newComment.classList.add('comment');

    // Step 3: Insert the input value into the new LI
    newComment.textContent = inputVal;

    // console.log(newComment);
    // Step 4: Append the LI element to the page inside the UL
    ulEl.append(newComment);

    // Step 5: Clear out the input
    inputEl.value = '';
  }
})