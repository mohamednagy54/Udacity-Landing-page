/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * i will define global variables to use in my functions and methods
 * Sections
 * Ul Element
 * Btn to Go Up
 */
const sections = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");
const myBtn = document.getElementById("myBtn");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * build the nav
 * I will create a function to loop over the sections by using For..of loop
 * the function will Self-Invoking
 */
(function createListItem() {
  for (sec of sections) {
    // create a fragment element
    const fragment = document.createDocumentFragment();
    // Create an Li Element and add Attributes[href - data-nav - class]
    const listItem = document.createElement("li");
    listItem.setAttribute("class", `list__item ${sec.id}`);
    // Li Element
    // Adding a tag
    listItem.innerHTML = `
            <a href="#${sec.id}" data-nav="${sec.id}" class="menu__link">
            ${sec.dataset.nav}
            </a>
            `;
    // add the Li element in fragment
    fragment.appendChild(listItem);
    // Add Li Element to it's parent [Ul]
    navbarList.appendChild(fragment);
  }
})();

// ----------------------------------------

// Get All Li Elements to use it in navList Highliting
const navList = document.querySelectorAll("nav ul .list__item");

window.addEventListener("scroll", () => {
  // define an empty string variable
  let currentSection = "";
  sections.forEach((section) => {
    /**
     * i will get the section top value with .offsetTop Method
     * and will get section Height with .clientHeight Method
     * ------------------ Resourses ---------------
     * https://www.w3schools.com/jsref/prop_element_offsettop.asp
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
     */
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3 - 1) {
      //  get the current Section with id attribute
      currentSection = section.getAttribute("id");
    }

    /**
     * here i want to add active class to the section that iam stand on it
     * And Add class active to the navigation item to be highlited
     * loop on every section in sections
     */

    if (
      // Section Highliting
      section.getBoundingClientRect().top >= -390 &&
      section.getBoundingClientRect().top <= 150
    ) {
      /**
       * add class when scroll in a specific location
       * add class active to section
       */

      section.classList.add("active");
    } else {
      // remove class active from section
      section.classList.remove("active");
    }
  });
  // loop at all list items with forEach()
  navList.forEach((li) => {
    // remove All Active Classes from all list items first
    li.classList.remove("active");
    if (li.classList.contains(currentSection)) {
      /**
       * then if the classlist of list item == currentSection
       * add active class to it
       */
      li.classList.add("active");
    }
  });

  /**
   * this method to show the go Up Button
   * i use a condition to change the display by it's scrollY Location
   */
  if (this.scrollY >= 1000) {
    // Change the style.display for the btn to block to be visible
    myBtn.style.display = "block";
  } else {
    // Change the style.display for the btn to none to be hidden
    myBtn.style.display = "none";
  }
});

// ----------------------------------------

// Scroll to anchor ID using scrollIntoView event
// when i click on the Ul Element
navbarList.addEventListener("click", (listItem) => {
  const targetSec = document.getElementById(`${listItem.target.dataset.nav}`);
  // remove the default of click Event
  listItem.preventDefault();
  // if the li element contain a dataset.nav
  if (listItem.target.dataset.nav) {
    /**
     * add smooth behaviour by scrollIntoView Method
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
     */

    targetSec.scrollIntoView({
      behavior: "smooth",
    });
  }
});

// ----------------------------------------

/**
 * Make Arrow function
 * to listen the click event on hamburger menu
 */
const haburgerMenuToggle = () => {
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", () => {
    // adding or removeing active classes into Ul Element and hamburger Menu
    navbarList.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
};

// When i press on the Btn
myBtn.onclick = () => {
  // using scrollTo Method to make the scroll smoother
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * I Used: http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html
 * JsLint And Js Beautify
 * to format code and detect problems
 *
 */

/**
     * another way to show the Go Top Button
     * function scrollFunction() {
        if(document.body.scrollTop>500 ||
          document.documentElement.scrollTop>500){
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
    }

      * window.addEventListener("scroll", scrollFunction)
     */

/**
 * End Main Functions
 * Begin Events
 *
 */
