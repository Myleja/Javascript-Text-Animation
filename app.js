const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
/*remove h1 after span created*/
text.textContent = "";

/*create a span*/
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

/*create timer*/
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++
/*when the characters finished, stop runinng*/
    if (char === splitText.length) {
        complete();
        return;
    }

}
function complete() {
    clearInterval(timer);
    timer = null;
}