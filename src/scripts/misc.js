import markerImg from '../assets/myMapMarker.png';

const colors = ['#A800FF',
    '#0079ff',
    '#00f11d',
    '#FFEF00',
    '#FF7F00',
    '#FF0900'];
let textItems = [];

export function drawParticles() {

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

        let divisor;

        if (ww > 960) {
            ctx.font = "bold " + (wh / 1.8) + "px Reem Kufi";
            ctx.textAlign = "left";
            ctx.fillText(copy.value, ww / 1.6, wh / 1.5);
            divisor = 260;
        } else if (ww > 530) {
            ctx.font = "bold " + (wh / 2.5) + "px Reem Kufi";
            ctx.textAlign = "center";
            ctx.fillText(copy.value, ww / 2, wh / 1.1);
            divisor = 150;
        } else {
            return;
        }

        let data = ctx.getImageData(0, 0, ww, wh).data;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "screen";

        particles = [];

        for (let i = 0; i < ww; i += Math.round(ww / divisor)) {
            for (let j = 0; j < wh; j += Math.round(ww / divisor)) {
                if (data[((i + j * ww) * 4) + 3] > 0) {
                    particles.push(new Particle(i, j));
                }
            }
        }
        amount = particles.length;
    }

    function onMouseClick() {
        radius += 0.5;
        if (radius >= 4) {
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
}

export function textEffects() {

    let textAppearDelay = 10;
    textItems = [];
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("h1"));
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("h2"));
    textItems = Array.prototype.concat.apply(textItems, document.getElementsByTagName("p"));

    for (let elem of textItems) {

        let text = elem.innerHTML.split("");

        for (let i = 0; i < text.length; i++) {
            if (/^[a-zA-Z()]+$/.test(text[i])) {
                text[i] = "<span class='blast'>" + text[i] + "</span>";
            }
        }
        elem.innerHTML = text.join("");
        textAppearDelay = textAppearDelay + 70;
        makeOpaque(elem, textAppearDelay)
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

    function makeOpaque(e, delay) {
        setTimeout(function () {
            e.style.opacity = "1";
        }, delay);
    }
}

export function initGoogleMap() {

    const loadGoogleMapsApi = require('load-google-maps-api');

    loadGoogleMapsApi({
        'key': 'AIzaSyATy_m53ycMWWqUKHe6psCEtja9_IvMmBY'
    }).then(function (google) {
        // Styles a map in night mode.
        const map = new google.Map(document.getElementById('map'), {
            center: {lat: 35.221678, lng: -80.817},
            zoom: 12,
            disableDefaultUI: true,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                }
            ]
        });

        const latLng =
            {lat: 35.221678, lng: -80.817};

        const marker = new google.Marker({
            position: latLng,
            map: map,
            icon: markerImg
        });


    });
}
