// FSJS - Random Quote Generator
// Adds silly line for test




// Create the array of quote objects and name it quotes
var quotes = [{
        quote: "This is my quote, there are many like it, but this is mine.",
        source: "Karl-Magnus Thorsnes",
        citation: "Voices in head"
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        source: "Eleanor Roosevelt",
        citation: "kuk"
    },
    {
        quote: "Jerry, just remember, it's not a lie if you believe it.",
        source: "George Costanza",
        citation: "Seinfeld S06E15"
    },
    {
        quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
        source: "Ernest Hemingway",
        citation: "kuk"
    },
    {
        quote: "Learning never exhausts the mind.",
        source: "Leonardo da Vinci",
        citation: "kuk"
    },
    {
        quote: "Wise men speak because they have something to say; Fools because they have to say something.",
        source: "Plato",
        citation: "kuk"
    }
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuuote() {

};


// Create the printQuote function and name it printQuote
function printQuote() {

};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var randomNumber = Math.floor(Math.random() * quotes.length );
console.log(randomNumber);