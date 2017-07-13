//first i need a collection of quotes
// an array of objects with two properties
var quoteList = [{
  quote: "Listen Simon... Don't forget. Believe in yourself. Not in the you who believes in me. Not the me who believes in you. Believe in the you who believes in yourself.",
  author: "Kamina",
  color: "#3498db"
},
{
  quote: "A fish who has spent its entire life in a pond cannot fathom the size of the ocean.",
  author: "unknown",
  color: "#2ecc71"
},
{
  quote: "A bit of fragrance clings to the hand that gives flowers.",
  author: "Chinese Proverb",
  color: "#e67e22"
},
{
  quote: "Don't cry because it's over, smile because it happened.",
  author: "Dr.Seuss",
  color: "#e67e22"
},
{
  quote: "A smooth sea never made a skilled sailor.",
  author: "Franklin D. Roosevelt",
  color: "#7f8c8d"
},
{
  quote: "You can't beat the person that never gives up.",
  author: "Babe Ruth",
  color: "#1abc9c"
},
{
  quote: "These young guys are playing checkers. I'm out here playing chess.",
  author: "Kobe Bryant",
  color: "#9b59b6",
},
{
  quote: "I find your lack of faith disturbing.",
  author: "Darth Vader",
  color: "#2c3e50"
},
{
  quote: "Link... You may not be at a point where you have fully recovered your power or all of your memories, but courage need not be remembered, for it is never forgotten.",
  author: "Princess Zelda",
  color: "#f39c12"
}
];

var quoteBtn = document.querySelector('#quoteBtn');
//function that provides each quote
function getQuote() {
//saves p tag 'quote' as a var
  var quoteBlock = document.getElementById('quote');
//saves p tag 'author' as a var
  var author = document.getElementById('quoteAuthor');
  //gets random number that will be used for both quote and author
  var randomNumber = Math.floor(Math.random() * (quoteList.length));
  //changes the html of the p tags to whatever the random quote is
    quoteBlock.innerHTML = "\"" + quoteList[randomNumber].quote + "\"";
    quoteAuthor.innerHTML = quoteList[randomNumber].author;
    quoteBtn.textContent = "Give me another one!";

  var color = document.getElementById('container');
  color.style.backgroundColor = quoteList[randomNumber].color;

}
//event listener for button
quoteBtn.addEventListener("click", function(){
  getQuote();
})
