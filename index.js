"use strict";
// main function just for call back purposes
function Main() {
    // input value from textArea
    const input = document.querySelector(".input");
    input.style.visibility = "visible";
    // output to a empty div
    let output = document.querySelector(".output");
    // output words per minutes to a div
    let outputWPM = document.querySelector(".wpm");
    // get current time
    const startTime = new Date().getTime();
    // get the textArea length
    let textAreaLength = input.value.length;
    // these two lines puts the cursor in the textArea
    input.setSelectionRange(textAreaLength, textAreaLength);
    input.focus();
    // declares the quote needed to use again
    let quote;
    // api url
    const Random_quote_Api_Url = "https://api.quotable.io/random";
    // the function that fetches the random api and reads it
    async function GetRandomQuote() {
        return fetch(Random_quote_Api_Url)
            .then(response => response.json())
            .then(data => data.content);
    }
    // gets the quote and creates span for every character
    async function getQuote() {
        quote = await GetRandomQuote();
        const arrayQuote = quote.toString().split("");
        function getElement(e) {
            let element = document.createElement("span");
            element.innerHTML = e;
            output.append(element);
        }
        for (let i = 0; i < arrayQuote.length; i++) {
            getElement(arrayQuote[i]);
        }
    }
    // calls the getQuote
    getQuote();
    // the input textArea eventlistner 
    input.addEventListener("input", () => {
        // gets the span elements
        const span = output.querySelectorAll("span");
        // goes through every element and checks if they are correct. if it's correct, That element adds a className="Correct" if not it adds className="incorrect"
        span.forEach((e, i) => {
            if (input.value[i] == null) {
                e.classList.remove("correct");
                e.classList.remove("incorrect");
            }
            else if (input.value[i] == e.innerText) {
                e.classList.add("correct");
                e.classList.remove("incorrect");
            }
            else {
                e.classList.remove("correct");
                e.classList.add("incorrect");
            }
        });
        // get the currect time
        const endTime = new Date().getTime();
        const MILLISECONDS_TO_MINUTES = 60000;
        // subtracts the starting time with ending time and divedes it by 60,000 because 60,000 is 1 minute in milliseconds
        const time = (endTime - startTime) / MILLISECONDS_TO_MINUTES;
        // calculates the words per minute and rounds up words/minute
        let wpm = Math.round(input.value.split(' ').length / time);
        // appends it to outputWPM
        outputWPM.innerHTML = `${wpm}WPM`;
        // check if the input value matches the quote value
        if (input.value == quote) {
            // deletes all the span in output div
            output.innerHTML = '';
            // deletes all value in input textArea
            input.value = '';
            // deletes value of WPM and replaced with 0WPM
            input.style.visibility = "hidden";
            const timeout = setTimeout(() => {
                outputWPM.innerHTML = '0WPM';
                Main();
            }, 2000);
        }
    });
}
Main();
