'keypress'

const buttonEl = document.getElementById('button');
const inputEl = document.getElementById('input');
const ulEl = document.getElementById('comments-list');

// Add an event listener to our button
// We want to listen for when someone clicks our button
//              name of the event, callback function
buttonEl.addEventListener('click', function () {
  console.log('Someone clicked on the button!!!');

  console.log(inputEl.value);
  // Psuedocode
  // Step 1: Get the value typed into the input (store in variable)
  const inputVal = inputEl.value;
  // Step 2: Create an LI element
  const newComment = document.createElement('li');

  console.log(newComment);
  // Step 3: Insert the input value into the new LI
  newComment.textContent = inputVal;

  console.log(newComment);
  // Step 4: Append the LI element to the page inside the UL
  ulEl.append(newComment);

  // Step 5: Clear out the input
  inputEl.value = '';
});

inputEl.addEventListener('keypress', function () {
  console.log('Pressed a key');
})