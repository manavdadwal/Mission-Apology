const heading = document.getElementById("heading");
const headingText = document.getElementById("heading-text");
const envelope = document.getElementById("envelope");
const letterContainer = document.getElementById("letter-container");
const letter = document.getElementById("letter");
const closeBtn = document.getElementById("close-btn");
const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const psText = document.getElementById("ps-text");
const nameText = document.getElementById("name-text");
const psDetails = document.getElementById("ps-container");
const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const customFormat = `${day}.${month}.${year}`;

const headerMessage = `Mission Apology.`;
const message = `Hey ,\nAt this very moment, you’re probably thinking, 'what is this guy even up to now?'.\nI know you already had a lot going on, starting fresh and settling into a new place. And right in the middle of that, I showed up in the chat without realizing it could just make things more complicated for you.\nIt’s just that, honestly, I couldn’t resist myself from saying hi to you. I don’t even know how, but I just felt like I should reach out. Purely with good intentions, nothing else and I do realized that what I did was definitely not cool.\nNot being used to these things, the thought was it might work, but yeah… that turned out pretty foolish.\nAnd also about the whole BKC thing, I wasn’t even there that day 😅. It was just meant as a tease, something fun, but never imagined it might give you the wrong impression (which I truly never meant). Probably ended up looking way more silly than necessary, but that’s not really who I am.\nThe only thought was to build a good friendship, and it would be a shame to ruin the friendship jo “shuru hote hi khatam hogayi.”\nOh, and since you know punjabi too (source : LinkedIn) : 'Oye sorry yaar, hun gussa thalle rakh de aur mainu maaf kardey.”\nI should’ve said this that day itself, but things felt a little heated, so I thought, 'chalo, better save it for later.'`;

const date1Val = `Created Date | 18.08.2025`;
const date2Val = `Today's Date | ${customFormat}`;

const psTextVal = `P.S.`;
const nameTextVal = `istg… sending this took a lot of guts`;

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
    psDetails.style.display = "none";
    setTimeout(() => {
        letterContainer.style.display = "flex";
        typeMessage(date1Val, date1, 100, () => {
            typeMessage(date2Val, date2, 100, () => {
                typeMessage(message, letter, 50, () => {
                    psDetails.style.display = "flex";
                    psText.style.display = "block";
                    nameText.style.display = "none";
                    typeMessage(psTextVal, psText, 100, () => {
                        nameText.style.display = "block";
                        typeMessage(nameTextVal, nameText, 100);
                    });
                });
            });
        });
    }, 600);
});

closeBtn.addEventListener("click", () => {
    clearInterval(typingInterval);
    letterContainer.style.display = "none";
    envelope.style.display = "none";
    typeMessage(headerMessage, headingText, 100, () => {
        setTimeout(() => {
            envelope.style.display = "block";
            envelope.style.transform = "scale(1)";
        }, 500);
    });
    letter.textContent = "";
    heading.style.transform = "scale(1)";
    date2.textContent = "";
    psDetails.style.display = "none";
    psText.style.display = "none";
    nameText.style.display = "none";
});
