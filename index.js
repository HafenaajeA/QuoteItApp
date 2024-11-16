const quotesBank = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "– Winston Churchill",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "– Winston Churchill",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "– Winston Churchill",
  },
  {
    text: "Believe you can and you're halfway there",
    author: " – Theodore Roosevelt",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "– Sam Levenson",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: " – Eleanor Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: " – William James",
  },
  {
    text: "With the new day comes new strength and new thoughts.",
    author: "– Eleanor Roosevelt",
  },
  {
    text: "Your time is limited, don’t waste it living someone else’s life.",
    author: "– Steve Jobs",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "– Peter Drucker",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: " – Theodore Roosevelt",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "– Walt Whitman",
  },
  {
    text: "Truth is what you subconsciously accept as real.",
    author: "– Almando Hafenaaje",
  },
];
const quoteBox = document.querySelector(".container-fluid");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

//get random color
const getRandomColor = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
};

// get random quote function
const getRandomQuote = () => {
  // random number generator//
  const quoteIndex = Math.floor(Math.random() * quotesBank.length);
  // retrieving info from the quotes bank array
  const quotes = quotesBank[quoteIndex];

  //display quote on the html web page
  quoteText.textContent = `"${quotes.text}"`;
  quoteAuthor.textContent = `${quotes.author}`;

  const randomColor = getRandomColor();
  quoteBox.style.backgroundColor = randomColor;
};

//show or hide the button based on the curser position
quoteBox.addEventListener("mouseenter", () => {
  newQuoteButton.style.display = "block"; //this will show the button
});

quoteBox.addEventListener("mouseleave", () => {
  newQuoteButton.style.display = "none"; // show nothing(button)
});

// display  a quote on a page load
window.onload = getRandomQuote;

//listen to button clicks
newQuoteButton.addEventListener("click", getRandomQuote);
