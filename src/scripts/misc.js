document.addEventListener("DOMContentLoaded", function (e) {
    let textItems = [];
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("h1"));
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("h2"));
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("p"));

    const colors = ['#A800FF', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900'];

    for (let elem of textItems) {

        let text = elem.innerHTML.split("");

        for (let i = 0; i < text.length; i++) {
            if (/^[a-zA-Z()]+$/.test(text[i])) {
                text[i] = "<span class='blast'>" + text[i] + "</span>";
            }
        }
        elem.innerHTML = text.join("");
    }

    let blasts = document.getElementsByClassName("blast");

    for(let blast of blasts){
        blast.addEventListener("mouseover", function (e) {
            e.target.style.color = colors[Math.floor(Math.random() * colors.length)];
            e.target.classList.add("bounce");

            setTimeout(function () {
                e.target.classList.remove("bounce");
            }, 800);
        });

        blast.addEventListener("mouseleave", function (e) {
            e.target.style.color = '';
        });
    }
});
