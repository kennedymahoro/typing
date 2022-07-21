"use strict";
// main function just for call back purposes
function Main() {
    // input value from textArea
    /*
    const input:HTMLTextAreaElement = document.querySelector(".input") as HTMLTextAreaElement;
    input.style.visibility = "visible";
    // output to a empty div
    let output:HTMLDivElement = document.querySelector(".output") as HTMLDivElement;
    // output words per minutes to a div
    let outputWPM:HTMLDivElement  = document.querySelector(".wpm") as HTMLDivElement;
    // get current time
    const startTime:number = new Date().getTime();
    // get the textArea length
    let textAreaLength:number = input.value.length;
    // these two lines puts the cursor in the textArea
    input.setSelectionRange(textAreaLength,textAreaLength);
    input.focus();
    // declares the quote needed to use again
    let quote:string;
    */
    // api url
    const Random_quote_Api_Url = "https://zenquotes.io/random";
    // the function that fetches the random api and reads it
    async function GetRandomQuote() {
        return fetch("https://zenquotes.io/api/random")
            .then(response => response.json())
            .then(data => data.q);
    }
    console.log(GetRandomQuote());
    /*
    // gets the quote and creates span for every character
    async function getQuote(){
      quote = await GetRandomQuote()
      const arrayQuote = quote.toString().split("")
      function getElement(e:string){
        let element = document.createElement("span");
        element.innerHTML = e;
        output.append(element)
      }
      for(let i=0;i<arrayQuote.length; i++){
        getElement(arrayQuote[i]);
      }
      
    }
    // calls the getQuote
    getQuote()
    // the input textArea eventlistner
    input.addEventListener("input", ()=>{
      // gets the span elements
      const span:NodeListOf<HTMLSpanElement> = output.querySelectorAll("span") as NodeListOf<HTMLSpanElement>;
      // goes through every element and checks if they are correct. if it's correct, That element adds a className="Correct" if not it adds className="incorrect"
      span.forEach((e:HTMLSpanElement,i:number) => {
        if(input.value[i] == null){
          e.classList.remove("correct")
          e.classList.remove("incorrect")
        }
        else if (input.value[i] == e.innerText){
          e.classList.add("correct")
          e.classList.remove("incorrect")
        }
        else{
          e.classList.remove("correct")
          e.classList.add("incorrect")
        }
      })
      // get the currect time
      const endTime:number = new Date().getTime();
      const MILLISECONDS_TO_MINUTES:number = 60000;
      // subtracts the starting time with ending time and divedes it by 60,000 because 60,000 is 1 minute in milliseconds
      const time:number = (endTime - startTime) / MILLISECONDS_TO_MINUTES;
      // calculates the words per minute and rounds up words/minute
      let wpm:number = Math.round(input.value.split(' ').length/time);
      // appends it to outputWPM
      outputWPM.innerHTML = `${wpm}WPM`;
      // check if the input value matches the quote value
      if(input.value == quote){
        // deletes all the span in output div
        output.innerHTML = '';
        // deletes all value in input textArea
        input.value = '';
        // deletes value of WPM and replaced with 0WPM
        input.style.visibility = "hidden";
        const timeout:number = setTimeout(() => {
          outputWPM.innerHTML = '0WPM';
          Main()
        }, 2000)
      }
    })
  */
}
Main();
