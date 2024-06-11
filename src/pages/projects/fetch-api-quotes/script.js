async function getQuote(){
    try{ 
        const response = await fetch("https://api.quotable.io/quotes/random");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        const quote = data[0];
        console.log(quote);
        
        const quoteText = document.getElementById("quote");
        quoteText.textContent =`${quote.content}`;

        const quoteAuthor = document.getElementById("author");
        quoteAuthor.textContent = `~ ${quote.author} ~`;
    }catch(error){
        console.error(error);
    }
}

getQuote();