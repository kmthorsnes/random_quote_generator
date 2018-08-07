// FSJS - Random Quote Generator
// Adds silly line for test
var randomNumber = Math.ceil(quotes.length);

// Create the array of quote objects and name it quotes
var quotes = [
    {
    quote: "This is my quote, there are many like it, but this is mine.",
    source: "Karl-Magnus Thorsnes",
    citation: "Voices in head",
    year: 2018
    },
{
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    source: "Eleanor Roosevelt",
    citation: null,
    year: 2018
},
{
    quote: "Jerry, just remember, it's not a lie if you believe it.",
    source: "George Costanza",
    citation: "Seinfeld S06E15",
    year: 1995
},
{
    quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
    source: "Ernest Hemingway",
    citation: null,
    year: null
},
{
    quote: "Learning never exhausts the mind.",
    source: "Leonardo da Vinci",
    citation: null,
    year: "2"
},
{
    quote: "Wise men speak because they have something to say; Fools because they have to say something.",
    source: "Plato",
    citation: null,
    year: null
}
];


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuuote() 
    {

    };


// Create the printQuote funtion and name it printQuote
function printQuote() 
{

};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);