document.addEventListener("DOMContentLoaded", function (e) {

    // text hover color change & animations
    let textItems = [];
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("h1"));
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("h2"));
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("p"));

    let colors = ['#A800FF', '#0079FF', '#00F11D', '#FFEF00', '#FF7F00', '#FF0900'];

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

    for (let blast of blasts) {
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

    // home page text particles

    let canvas = document.querySelector("#scene"),
        ctx = canvas.getContext("2d"),
        particles = [],
        amount = 0,
        mouse = {x: 0, y: 0},
        radius = 0.5;

    let copy = document.querySelector("#copy");

    let ww = canvas.width = canvas.clientWidth;
    let wh = canvas.height = canvas.clientHeight;


    function Particle(x, y) {
        this.x = Math.random() * ww;
        this.y = Math.random() * wh;
        this.dest = {
            x: x,
            y: y
        };
        this.r = Math.random() * 5;
        this.vx = (Math.random() - 0.5) * 20;
        this.vy = (Math.random() - 0.5) * 20;
        this.accX = 0;
        this.accY = 0;
        this.friction = Math.random() * 0.05 + 0.94;

        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    Particle.prototype.render = function () {


        this.accX = (this.dest.x - this.x) / 1000;
        this.accY = (this.dest.y - this.y) / 1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;

        this.x += this.vx;
        this.y += this.vy;

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
        ctx.fill();

        let a = this.x - mouse.x;
        let b = this.y - mouse.y;

        let distance = Math.sqrt(a * a + b * b);
        if (distance < (radius * 70)) {
            this.accX = (this.x - mouse.x) / 100;
            this.accY = (this.y - mouse.y) / 100;
            this.vx += this.accX;
            this.vy += this.accY;
        }

    };

    function onMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    function onTouchMove(e) {
        if (e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        }
    }

    function onTouchEnd() {
        mouse.x = -9999;
        mouse.y = -9999;
    }

    function initScene() {

        ww = canvas.width = canvas.clientWidth;
        wh = canvas.height = canvas.clientHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.font = "bold " + (ww / 2) + "px Reem Kufi";
        ctx.textAlign = "center";
        ctx.fillText(copy.value, ww / 2, wh / 1.5 );

        let data = ctx.getImageData(0, 0, ww, wh).data;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "screen";

        particles = [];
        for (let i = 0; i < ww; i += Math.round(ww / 150)) {
            for (let j = 0; j < wh; j += Math.round(ww / 150)) {
                if (data[((i + j * ww) * 4) + 3] > 150) {
                    particles.push(new Particle(i, j));
                }
            }
        }
        amount = particles.length;

    }

    function onMouseClick() {
        radius++;
        if (radius === 5) {
            radius = 0;
        }
    }

    function render(a) {
        requestAnimationFrame(render);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < amount; i++) {
            particles[i].render();
        }
    }

    window.addEventListener("resize", initScene);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("click", onMouseClick);
    window.addEventListener("touchend", onTouchEnd);
    initScene();
    requestAnimationFrame(render);

});
