/* const URL = `https://animechan.xyz/api/random`;

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

getData(URL); */


const picture = "https://picsum.photos/200"
async function getImg(picture) {

    try {

        const response = await fetch(picture);
        if (response.status != 200) {
            throw new Error(response.statusText);

        }

        const data = await response.json();
        document.querySelector(".images").textContent = data.content;
        console.log(data.content);
        console.log("working");

    } catch (error) {
        console.log("oopai, error meh");
        document.querySelector("h1").textContent = "Your subscription go bye bye";
    }
}

getImg(picture);

/* function insertCard() {
    document.querySelector(".cards").insertAdjacentHTML(

        

      "beforeend",
      `<div class="card">
        <h2 class = "text">"ahahahah"</h2>
        <img src= alt="" class="card-img">
        <h2 class = "info"> </h2>
      </div>`
    );
  } */