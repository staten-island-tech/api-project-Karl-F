import "../styles/style.css";
import { DOMSelectors } from "./dom";

const memeURL = `https://api.imgflip.com/get_memes`;
const captionURL = `https://api.imgflip.com/caption_image`;

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        const grab = await response.json();
        const arrData = grab.data;
        console.log(grab.data);

        function insertMeme(top) {
            const topMemes = arrData.memes.slice(0, top);
            document.querySelector(".cards").innerHTML = "";
            topMemes.forEach((meme) => document.querySelector(".cards").insertAdjacentHTML("beforeend",
                `<div class="card">
                    <h3 class="description">${meme.name}</h3>
                    <img class="image" src="${meme.url}" alt="${meme.name}" data-id="${meme.id}"> <br>
                    <button class="caption-button" data-id="${meme.id}">Caption It</button>
                </div>`
            ));
        }
        insertMeme(100); 

        function randomMemes() {
            const randomMemes = getRandomMemes(arrData.memes, 20);
            document.querySelector(".cards").innerHTML = "";
            randomMemes.forEach((meme) => document.querySelector(".cards").insertAdjacentHTML("beforeend",
                `<div class="card">
                    <h3 class="description">${meme.name}</h3>
                    <img class="image" src="${meme.url}" alt="${meme.name}" data-id="${meme.id}"> <br>
                    <button class="caption-button" data-id="${meme.id}">Caption It</button>
                </div>`
            ));
        }
        function getRandomMemes(memes, num) {
            const randomMeme = memes.slice(0).sort(() => 0.5 - Math.random()); //subtract random num from 0.5 btwn 0-1.
            return randomMeme.slice(0, num);
        }

        function highlight(button) {
            const buttons = [DOMSelectors.top25, DOMSelectors.top50, DOMSelectors.top75, DOMSelectors.top100, DOMSelectors.random];
            buttons.forEach((btn) => btn.classList.remove('clicked'));
            button.classList.add('clicked');
        }
        DOMSelectors.top25.addEventListener("click", () => {
            insertMeme(25);
            highlight(DOMSelectors.top25);
        });
        DOMSelectors.top50.addEventListener("click", () => {
            insertMeme(50);
            highlight(DOMSelectors.top50);
        });
        DOMSelectors.top75.addEventListener("click", () => {
            insertMeme(75);
            highlight(DOMSelectors.top75);
        });
        DOMSelectors.top100.addEventListener("click", () => {
            insertMeme(100);
            highlight(DOMSelectors.top100);
        });
        DOMSelectors.random.addEventListener("click", () => {
            randomMemes();
            highlight(DOMSelectors.random);
        });

        document.querySelector(".cards").addEventListener("click", async (event) => { //adds event to all caption it buttons, I think
            const clickedButton = event.target.closest(".caption-button");
            if (clickedButton) {
                const memeId = clickedButton.getAttribute("data-id");
                const captions = await addCaptions();
                if (captions) {
                await captionImage(memeId, captions);
            }}
        });

    } catch (error) {
        console.log("Oopai error meh:", error);
        document.querySelector(".cards").textContent = "Your subscription go bye bye";
    }
}

//Use prompt box
async function addCaptions() {
    const text1 = prompt("Enter caption for first text");
    const text2 = prompt("Enter caption for second text");
    return [text1, text2];
}

//want to use dialog box, pls help

async function captionImage(memeId, captions) {
    try {
        const response = await fetch(captionURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `template_id=${memeId}&username=phanther56&password=Apple123&text0=${captions[0]}&text1=${captions[1]}`,
        });

        if (response.status !== 200) {
            throw new Error(response.statusText);
        }

        const result = await response.json();
        console.log("Caption results", result);

        if (result.success) {
            console.log("Newly created image URL:", result.data.url);
            window.open(result.data.url, '_blank');
        }

    } catch (error) {
        console.log("Captioning image broke meh:", error);
    }
}
getData(memeURL);