// Variable that creates a random HEX-code to use as color background.
var randomColor = "";

var printToPage = "";

function print(quote) {
  var outputDiv = document.getElementById("quote-box");
  outputDiv.innerHTML = quote;
}
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
    category: "#Politics"
  },
  {
    quote: "Timeo Danaos et dona ferentes",
    source: "Virgil",
    citation: "Aeneid",
    year: "",
    category: "#Philosophy"
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
    category: "#Philosophy"
  },
  {
    quote: "Veni, vidi, vici",
    source: "Julius Caesar ",
    citation: "Letter to the Roman Senate",
    year: "",
    category: "#Philosophy"
  },
  {
    quote: "Trying is just the first step toward failure",
    source: "Homer Simpson",
    citation: "Simpsons S09E09",
    year: 1997,
    category: "#humour"
  }
];

// Function that creates a HEXcode, stores it in a variable and returns it. Shamelessly stolen from tha internet
function randomColorToPage() {
  var randomColor =
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
      .toUpperCase();
  return randomColor;
}

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

// Create the printQuote function and name it printQuote
function printQuote() {
  var quotes = getRandomQuote();
  var toScreen ='<p class="quote">' + quotes.quote + "</p>" + '<p class="source">' + quotes.source + '<span class="citation">'  + quotes.citation + '</span><span class="year">'  + quotes.year +  '</span></p>';
  print(toScreen);
  randomColorToPage();
  document.body.style.backgroundColor = randomColorToPage();
  document.getElementById("loadQuote").style.background =
    document.body.style.backgroundColor;
}
// Function that simulates a click every 10th second changing both color and quote
// setInterval(function() {
  document.getElementById("loadQuote").click();
}, 10000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// console.log(quotes[randomNumber]['quote']);
// console.log(quotes[randomNumber]['source']);
// console.log(quotes[randomNumber]['citation']);
// console.log(quotes[randomNumber]['year']);
// console.log(quotes[randomNumber]['category']);
