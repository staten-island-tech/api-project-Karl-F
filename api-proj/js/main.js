const URL = `https://coffee.alexflipnote.dev/zOhZmZ5R3Yw_coffee.jpg`;

async function getData(URL) {

    try {

        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);

        }

        const data = await response.json();
        document.querySelector("h1").textContent = data.content;
        console.log(data.content);

    } catch (error) {
        console.log("oopai, error meh");
        document.querySelector("h1").textContent = "Your subscription go bye bye";
    }
}

getData(URL);