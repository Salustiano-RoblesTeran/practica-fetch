const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc8a03b7e36246cda0d84435c3c7a263";

// Forma vieja:

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    })

// Asincrono

const traerNoticias = async () => {

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error ('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


traerNoticias();
































