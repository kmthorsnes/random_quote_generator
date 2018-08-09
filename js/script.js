// Variable that creates a random HEX-code to use as color background. 
var randomColor = '#' + Math.random().toString(16).slice(2, 8).toUpperCase();

// FSJS - Random Quote Generator
// Create the array of quote objects and name it quotes
var quotes = [{
        quote: "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender",
        source: "Winston Churchill",
        citation: "1940",
        category: "#Politics"
    },
    {
        quote: "Timeo Danaos et dona ferentes",
        source: "Virgil",
        citation: "Between 29 and 19 BC",
        category: "#Philosophy"
    },
    {
        quote: "Jerry, just remember, it's not a lie if you believe it.",
        source: "George Costanza",
        citation: "Seinfeld S06E15",
        category: "#humour"
    },
    {
        quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
        source: "Ernest Hemingway",
        citation: "The old man and the Sea - 1952",
        category: "#Philosophy"
    },
    {
        quote: "Veni, vidi, vici",
        source: "Julius Caesar ",
        citation: "47 BC",
        category: "#Philosophy"
    },
    {
        quote: "Trying is just the first step toward failure",
        source: "Homer Simpson",
        citation: "Seinfeld S09E09",
        category: "#humour"
    }
];

var randomNumber = Math.floor(Math.random() * quotes.length);


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
};


// Create the printQuote function and name it printQuote
function printQuote() {
    console.log("hello");
    document.body.style.background = "randomColor";
    // document.body.style.backgroundColor = v;
    // document.getElementById("quote").innerHTML = "Hello JavaScript!";
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// var randomNumber = Math.floor(Math.random() * quotes.length );
// console.log(randomNumber);

// function returnwords() = {
//     return randomNumber;
// }
// console.log(returnwords);

// console.log(getRandomQuote);

// console.log(quotes.quote[(Math.floor(Math.random() * quotes.length))]);

var array = [{
        foo: 'bar'
    },
    {
        hello: 'world'
    }
];



console.log(quotes[randomNumber]['quote']);
console.log(quotes[randomNumber]['source']);
console.log(quotes[randomNumber]['citation']);

console.log(randomColor);
document.body.style.backgroundColor = randomColor;
document.getElementById("loadQuote").style.backgroundColor = randomColor;
document.body.style.background = ("randomColor");
