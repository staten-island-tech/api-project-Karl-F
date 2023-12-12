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

const URL = `https://api.imgflip.com/get_memes`;


async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const grab = await response.json();
        const arrData = grab.data;

        /* document.querySelector(".cards").textContent = arrData.memes.forEach((meme) => meme.insertAdjacentHTML("beforeend",
        `
        <div class="card">
        <img src="${meme.url}" alt=""><br>
        </div>
        `
        ));;
        console.log(grab); */

        arrData.memes.forEach((meme) => console.log(meme));
        console.log(grab);

        async function insertmeme() {
            const add = document.querySelector(".cards");
            document.body.appendChild(add);
            arrData.meme.forEach((meme) => meme.insertAdjacentHTML("beforeend",
            `
            <div class="card">
            <img src="${meme.url}" alt=""><br>
            </div>
            `
            ))
        }
        insertmeme();

    } catch (error) {
        console.log("oopai, error meh");
        document.querySelector(".cards").textContent = "Your subscription go bye bye";
    };
};
getData(URL);