const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

async function getData(URL) {

    try {

        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);

        }

        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
        console.log(data.content);
        console.log("working");

    } catch (error) {
        console.log("oopai, error meh");
        document.querySelector("h1").textContent = "Your subscription go bye bye";
    }
}

getData(URL);