// this is a self-invoking anonymous function
// it is also called a module (my variation of the module pattern)
// it encapsulates all of your custom code and makes it private

(() => {
  //make associations (select) with elements in the HTML markup using CSS selectors
  let theHeading = document.querySelector(".main-heading");

  // debugger; //this is like a breakpoint / pause point in your code

  // script your behavior with functions
  function logElement() {
    // the "this" keyword refers to the thing that invokes the functions
    // so the "thing" that you click on, nouse over, interact with on the page
    console.log("clicked on an element:", this.id);
  }

  // add event handling here (user "triggers") - this is a 1 to 1 relationship
  // assign the event you want to listen for, and the function that should be run
  theHeading.addEventListener("click", logElement);

})();
