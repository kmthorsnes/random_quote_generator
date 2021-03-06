// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote:
      "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender",
    source: "Winston Churchill",
    citation:
      "Speech to House of Commons of the Parliament of the United Kingdom",
    year: 1940,
    category: "#politics"
  },
  {
    quote: "Timeo Danaos et dona ferentes",
    source: "Virgil",
    citation: "Aeneid",
    year: "",
    category: "#philosophy"
  },
  {
    quote: "Jerry, just remember, it's not a lie if you believe it.",
    source: "George Costanza",
    citation: "Seinfeld S06E15",
    year: 1995,
    category: "#humour"
  },
  {
    quote:
      "But man is not made for defeat. A man can be destroyed but not defeated.",
    source: "Ernest Hemingway",
    citation: "The old man and the Sea",
    year: 1952,
    category: "#philosophy"
  },
  {
    quote: "Veni, vidi, vici",
    source: "Julius Caesar ",
    citation: "Letter to the Roman Senate",
    year: "",
    category: "#philosophy"
  },
  {
    quote: "Trying is just the first step toward failure",
    source: "Homer Simpson",
    citation: "Simpsons S09E09",
    year: 1997,
    category: "#humour"
  }
];

// Function that creates a HEX-code, stores it in a variable and returns it. Code starting point adapted from: code adapted from https://stackoverflow.com/a/37472218 . Explaination is given step-by-step
function randomColorToPage() {
  var randomColor =
    // adds a # first to string starting the hex-code
    "#" +
    // generates a random number range 0–1
    Math.random()
      // takes the random number and returns it as a hex. Source: https://www.w3schools.com/jsref/jsref_tostring_number.asp
      .toString(16)
      // removes the two first, and the seven last characters of the string - leaving only the characters from position 2 - 8 creating a string valid for a hexcode for color.
      .slice(2, 8);
  // stores the value in randomColor
  return randomColor;
}

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

// Creates print function for use in printQuote function
function print(quote) {
  var outputDiv = document.getElementById("quote-box");
  outputDiv.innerHTML = quote;
}

// Create the printQuote function and name it printQuote
function printQuote() {
  var quotes = getRandomQuote();
  var toScreen =
    '<p class="quote">' +
    quotes.quote +
    "</p>" +
    '<p class="source">' +
    quotes.source +
    '<span class="citation">' +
    quotes.citation +
    '</span><span class="year">' +
    quotes.year +
    '</span><span class="category"> ' +
    quotes.category +
    "</span></p>";
  print(toScreen);
  randomColorToPage();
  document.body.style.backgroundColor = randomColorToPage();
  document.getElementById("loadQuote").style.background =
    document.body.style.backgroundColor;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Function that simulates a click every 10th second changing both color and quote every 10th second. Code base adapted from: https://stackoverflow.com/a/4515961
setInterval(function() {
  document.getElementById("loadQuote").click();
}, 10000);