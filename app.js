const buttonEl = document.getElementById('button');
const inputEl = document.getElementById('input');
const ulEl = document.getElementById('comments-list');



// When someone clicks on a comment, delete that comment
// Event delegation
ulEl.addEventListener('click', function (event) {
  console.log(event.target);

  // event.target.style.color = 'red';
  event.target.remove();

  console.log('Clicked on the UL element!!!')
});

// Add an event listener to our button
// We want to listen for when someone clicks our button
//              name of the event, "callback" function
buttonEl.addEventListener('click', function (event) {
  // Psuedocode
  // Step 1: Get the value typed into the input (store in variable)
  const inputVal = inputEl.value;
  // Step 2: Create an LI element
  const newComment = document.createElement('li');

  // Step 2a: Add a "comment" class to the LI
  // newComment.setAttribute('class', 'comment');
  newComment.classList.add('comment');

  console.log(newComment);
  // Step 3: Insert the input value into the new LI
  newComment.textContent = inputVal;

  console.log(newComment);
  // Step 4: Append the LI element to the page inside the UL
  ulEl.append(newComment);

  // Step 5: Clear out the input
  inputEl.value = '';
});



inputEl.addEventListener('keypress', function (event) {
  // console.log(event);

  // console.log(event.code);

  if (event.code === 'Enter') {
    // Step 1: Get the value typed into the input (store in variable)
    const inputVal = inputEl.value;
    // Step 2: Create an LI element
    const newComment = document.createElement('li');

    // Step 2a: Add a "comment" class to the LI
    // newComment.setAttribute('class', 'comment');
    newComment.classList.add('comment');

    console.log(newComment);
    // Step 3: Insert the input value into the new LI
    newComment.textContent = inputVal;

    console.log(newComment);
    // Step 4: Append the LI element to the page inside the UL
    ulEl.append(newComment);

    // Step 5: Clear out the input
    inputEl.value = '';
  }

  // console.log('Pressed a key');
})