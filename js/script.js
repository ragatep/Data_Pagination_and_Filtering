
/******************************************
Treehouse FSJS Techdegree:
Project 2 - Data Pagination and Filtering
Student: Ryan Agatep
******************************************/

console.log(data);

// Number of students shown per page
const itemsPerPage = 9;


/****************************************************************************
The showPage Function
This function will create and insert HTML elements for a set of nine students per page.
****************************************************************************/

function showPage(list, page) {

  console.log(list);
  console.log(page);
  console.log(list.length);

  // Create the index start and end range for the loop based on the number of students per page.
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = (page * itemsPerPage);

  console.log(startIndex);
  console.log(endIndex);
  
  // Select the UL element student-list class and make sure that its innerHTML property is empty.
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

  // Build the student cards' HTML elements by iterating though the length of the student's list.

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

/************************************************************************** 
The addPagination function
This function will create and insert the HTML elements needed for the page buttons
**************************************************************************/

function addPagination(list) {

  // Use some basic math that rounds a number up to the next largest integer to create a variable to calculate the number of pages needed.
  const numOfPages = Math.ceil(list.length / itemsPerPage)
  console.log(numOfPages);

  // Select the UL element link-list class and make sure that its innerHTML property is empty.
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  // Build the page buttons element by interating through the numOfPages starting at 1.
  for (i = 1; i <= numOfPages; i++) {
    let button = `
    <li>
       <button type="button" id="pages">${i}</button>
    </li>`;
    linkList.insertAdjacentHTML('beforeend', button);
  }

  // Get the first linkList button HTML element and set it to active.
  const firstButton = document.querySelector('.link-list button');
  firstButton.classList.add('active');

  // An event listener to linkList that sets a button to active when clicked and displays the number of students for that page.
  linkList.addEventListener('click', (e) => {
    console.log(e.target);
    const buttonTarget = e.target;
    if (buttonTarget.tagName === "BUTTON") {
      const previousButton = document.querySelector('.active');
      previousButton.classList = '';
      buttonTarget.classList.add('active');
      showPage(list, buttonTarget.textContent);
    }
  });
}

// Call functions
showPage(data, 1);
addPagination(data);