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
            <h2 class = "description">${meme.name}</h2>
            <img class = "image" src="${meme.url}" alt="${meme.name}"><br>
            </div>
            `
            ));
        }
        insertmeme();
/* 
        const memeNum = arrData.memes.filter((meme) => meme.id < 200000); 
        const countMeme = memeNum.id.length;
        console.log (`meme set: ${countMeme}`);
 */
    } catch (error) {
        console.log("oopai, error meh");
        document.querySelector(".cards").textContent = "Your subscription go bye bye";
    };
};
getData(URL);




