// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
window.onload = init;

let displayElement;
let drumElement;

function init() {
  displayElement = document.getElementById("display");
  drumElement = document.getElementsByClassName("drum-pad");

  document.onkeydown = function (e) {
    let boundKeys = "qweasdzxc".toUpperCase().split("");
    let simpleKeystroke = e.key.toUpperCase();
    if (boundKeys.indexOf(simpleKeystroke) >= 0) {
      manageClick(document.getElementById(simpleKeystroke).parentElement);
    }
  };
}

function manageClick(element) {
  displayElement.innerHTML = element.parentElement.firstElementChild.innerHTML;
  console.log(element.firstElementChild);
  element.firstElementChild.play();
}
