# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?

   > The 'Kids.js' module contains the "click" event listener that handles what happens when a child's name gets clicked.

   > When the page loads, the main.js module points to the "container" element, which is responsible for injecting our html strings into the DOM.
   
   > The HTML is created using the'kiddos()' function we imported from 'Kids.js', which loops through each object in the children array and builds an <li> (list) for each child. Each list item contains data-attributes that store important info like each child's wish and/or the sport each celebrity plays.

   > The event listener function 'document.addEventListener("click", (kidClickEvent) => {' in the Kids.js module listens for all clicks on the page. Once a click happens that meets the condiotions of the function, the magical window.alert(`${childWish}`) appears on the browser.


2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The findCelebrityMatch() function needs to be invoked inside the loop because we are trying to find the matching celebrity for each individual child.

   > Each child has a celebrityId property. The function stores the kid object as a parameter, and looks for the celbrity.id that meets the condition inside our for..of loop.

   > By invoking the findCelebrityMatch() function inside the for..of loop that iterates the kids array, we're able to get a different match for every kid and can return the correct pairing to the variable that is responsible for creating our HTML strings.


3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?

   > In the CelebrityList.js module, the click event listener listens for when any element in the document is clicked. It checks if the clicked element has a data-type attribute equal to "celebrity".

   > If that conidtion is confirmed to be true, it accesses the value stored in the data-sport attribute, which is "${celebrity.sport}" (hockey, baseball, etc..) The sport string gets interpolated into a window alert to display on the browser.
             

4. Can you describe, in detail, the algorithm that is in the `main` module?

   > The main.js module serves as the main entry point for the applicatin and is responsible for injecting all of the HTML content into the DOM.

   > First, it imports three functions from the other modules: kiddos(), Celebrities(), and Pairings(). These return all of the HTML strings that represent the different sections of our DOM.

   > The document.querySelector("#container") signals the <main id="container"> element from the index.html module. This is where all of the content will be injected.

   > We declare the 'applicationHTML' variable that will store the lines of string we create as the structure for what we are rendering on the DOM

      > We create the heading <h1>Make a Memory for the Kids</h1>

      > We have an <article> with two <section> elements:
      One for our list of <h2>Kids</h2>, and the other for our <h2>Celebrities</h2>

      > Each section invokes the imported functions, ${kiddos()} and ${Celebrities()}, which inserts their respective HTML content.

      > Another <article> for the list of ${Pairings()}.

      > Alas, mainContainer.innerHTML = applicationHTML - This sets the 'innerHTML' of the 'mainContainer' element to the structure of HTML strings we created and stored as the value for 'applicationHTML'.

      

