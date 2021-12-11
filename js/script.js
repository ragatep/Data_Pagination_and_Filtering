/*******************************************
Treehouse FSJS Techdegree:
Project 2 - Data Pagination and Filtering
Student: Ryan Agatep
*******************************************/

// Number of students shown per page
const itemsPerPage = 9;

/*******************************************
The showPage Function
This function will create and insert HTML 
elements for a set of nine students per page.
********************************************/

function showPage(list, page) {

  // Create the index start and end for the loop.
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = (page * itemsPerPage);
  
  // Select the UL element student-list class and clear its innerHTML property.
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

  // Build the student cards' HTML elements by iterating though 
  // the length of the student's list.
  let studentItem = '';
  for (let i = 0; i < list.length; i++){
    if(i >= startIndex && i < endIndex ){
      studentItem += `
        <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">${list[i].registered.date}</span>
        </div>
      </li>`;
    }
  }
  studentList.insertAdjacentHTML('beforeend', studentItem);
 }

/********************************************
The addPagination function
This function will create and insert the HTML 
elements needed for the page buttons
*********************************************/

function addPagination(list) {

  // Use some basic math that rounds a number up to the next 
  // largest integer to create a variable to calculate the number 
  // of pages needed.
  const numOfPages = Math.ceil(list.length / itemsPerPage)

  // Select the UL element link-list class and clear its innerHTML property.
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  // Build the page buttons element by interating through 
  // the numOfPages starting at 1.
  for (i = 1; i <= numOfPages; i++) {
    let button = `
    <li>
       <button type="button">${i}</button>
    </li>`;
    linkList.insertAdjacentHTML('beforeend', button);
  }

  // Variable to store NodeList of DOM buttons
  const buttons = document.querySelectorAll('button');

  // The active class is added to the first pagination button
  // when the application loads.
  buttons[0].classList.add("active");

  // An event listener on linkList that sets a button to active 
  // when clicked and displays the number of students for that page.
  // No other elements should register on the click event.
  linkList.addEventListener('click', (e) => {
    // TODO: refactor and maybe create a function named setAction(e). 
    // Project Warm up - Where's the Action
    if (e.target.tagName === 'BUTTON') {
      for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active');
      }
      const buttonTarget = e.target;
      buttonTarget.classList.add('active');
      showPage(list, buttonTarget.textContent);

      //console.log(buttonTarget.textContent);
      //console.log(buttonTarget);
    }   
  });
}

// Call functions
showPage(data, 1);
addPagination(data);