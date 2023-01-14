
const quotesApi = "https://api.quotable.io/random"

const displayQuotes = function () {
    fetch(quotesApi)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const qouteTExt = data.content
            document.querySelector("#quotes").innerHTML = `"${qouteTExt}"`
        })
}

window.addEventListener ('load', () => {
    displayQuotes() 
})

setInterval(displayQuotes, 60000)

