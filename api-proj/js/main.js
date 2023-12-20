/* const URL = "http://api.quotable.io/random";

async function getData(URL) {

    try {
        const response = await fetch(URL);
        const data = await response.json();
        document.querySelector("#cards").textContent = data.content;
        console.log(response);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }

        
        console.log(data);
        let test = document.querySelector("#cards");
        test.forEach((picturelink) => test.insertAdjacentHTML( "beforeend",
        `
        <div class="card">
        <img src="${picturelink}" alt=""><br>
        <button class="btn">Click</button>
        </div>
        `
        ))}

     catch (error) {
        console.log("oopai, error meh");
        document.querySelector("h1").textContent = "Your subscription go bye bye";
    }
}

getData(URL);  */


import "../styles/style.css"
import { DOMSelectors } from "./dom";

const URL = `https://api.imgflip.com/get_memes`;

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const grab = await response.json();
        const arrData = grab.data;

        console.log(grab);

            function insertmeme() {
            arrData.memes.forEach((meme) => document.querySelector(".cards").insertAdjacentHTML("beforeend",
            `
            <div class="card">
            <h2>${meme.name}</h2>
            <img class = "image" src="${meme.url}" alt="${meme.name}"><br>
            </div>
            `
            ));
        }
        insertmeme();

    } catch (error) {
        console.log("oopai, error meh");
        document.querySelector(".cards").textContent = "Your subscription go bye bye";
    };
};
getData(URL);

const captionURL = `https://api.imgflip.com/caption_image`;


