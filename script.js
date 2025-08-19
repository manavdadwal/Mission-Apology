const heading = document.getElementById("heading");
const headingText = document.getElementById("heading-text");
const envelope = document.getElementById("envelope");
const letterContainer = document.getElementById("letter-container");
const letter = document.getElementById("letter");
const closeBtn = document.getElementById("close-btn");
const date2 = document.getElementById("date2");
const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const customFormat = `${day}.${month}.${year}`;

const headerMessage = `Mission Apology.`;
const message = `At this very moment, you’re probably thinking, 'what is this guy even up to now?'.\nBut honestly, I do realized that what I did was definitely not cool.\nNot being used to these things, the thought was it might work, but yeah… that turned out pretty foolish.\nAnd about the whole BKC thing, I wasn’t even there that day 😅. It was just meant as a tease, something fun, but never imagined it might give you the wrong impression (which I truly never meant).\nProbably ended up looking way more silly than necessary, but that’s not really who I am.\nThe only thought was to build a good friendship, and it would be a shame to ruin the friendship jo “shuru hote hi khatam hogayi.”\nOh, and since you know punjabi too (source : LinkedIn), here’s the official apology in punjabi:\n'Oye sorry yaar, hun gussa thalle rakh de aur mainu maaf kardey.”\nI should’ve said this that day itself, but things felt a little heated, so I thought, 'chalo, better save it for later.'
        `;
const date2Val = `Today's Date | ${customFormat}`;

let typingInterval;

function typeMessage(text, element, speed, callback) {
    element.textContent = "";
    let i = 0;
    typingInterval = setInterval(() => {
        element.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(typingInterval);
            if (callback) callback();
        }
    }, speed);
}

typeMessage(headerMessage, headingText, 100, () => {
    setTimeout(() => {
        const envelope = document.getElementById("envelope");
        envelope.style.display = "block";
    }, 500);
});

envelope.addEventListener("click", () => {
    envelope.style.transform = "scale(0)";
    heading.style.transform = "scale(0)";
    setTimeout(() => {
        letterContainer.style.display = "flex";
        typeMessage(date2Val, date2, 100, () => {
            typeMessage(message, letter, 50);
        });
    }, 600);
});

closeBtn.addEventListener("click", () => {
    clearInterval(typingInterval);
    letter.textContent = "";
    letterContainer.style.display = "none";
    envelope.style.transform = "scale(1)";
    heading.style.transform = "scale(1)";
});
