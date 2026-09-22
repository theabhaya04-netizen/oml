/* =================================
   LOADER
================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        document
            .getElementById("loader")
            .classList.add("hide");

        typeTitle();

        createParticles();

    }, 1200);

});


/* =================================
   TYPEWRITER
================================= */

const titleText = "Hey, Love...";

let titleIndex = 0;

function typeTitle() {

    const title =
        document.getElementById("typing-title");

    if (titleIndex < titleText.length) {

        title.innerHTML +=
            titleText.charAt(titleIndex);

        titleIndex++;

        setTimeout(
            typeTitle,
            120
        );

    }

}


/* =================================
   START STORY
================================= */

function startStory() {

    document
        .querySelector(".letter-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =================================
   ENVELOPE
================================= */

function openLetter(envelope) {

    envelope.classList.toggle("open");

}


/* =================================
   SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (
            elementTop <
            windowHeight - 100
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =================================
   NUMBER COUNTERS
================================= */

let numbersStarted = false;


function startCounters() {

    if (numbersStarted) {
        return;
    }


    const section =
        document.querySelector(
            ".numbers-section"
        );


    const sectionTop =
        section.getBoundingClientRect().top;


    if (
        sectionTop <
        window.innerHeight - 150
    ) {

        numbersStarted = true;


        const counters =
            document.querySelectorAll(
                ".number"
            );


        counters.forEach(function (counter) {

            const target =
                Number(
                    counter.dataset.target
                );

            let current = 0;


            const increment =
                Math.max(
                    1,
                    Math.floor(target / 80)
                );


            const timer =
                setInterval(function () {

                    current += increment;


                    if (
                        current >= target
                    ) {

                        current = target;

                        clearInterval(timer);

                    }


                    counter.textContent =
                        current.toLocaleString();

                }, 25);

        });

    }

}


window.addEventListener(
    "scroll",
    startCounters
);


/* =================================
   SECRET MESSAGE
================================= */

function showSecret() {

    const message =
        document.getElementById(
            "secretMessage"
        );


    message.classList.add("show");


    createHearts();

}


/* =================================
   FLOATING HEARTS
================================= */

function createHearts() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            Math.random() > .5
                ? "♡"
                : "✦";


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            Math.random() * 20 + 12 + "px";


        heart.style.color =
            Math.random() > .5
                ? "#d6a59d"
                : "#fff1ec";


        heart.style.pointerEvents =
            "none";


        heart.style.zIndex =
            "99999";


        document.body.appendChild(
            heart
        );


        const animation =
            heart.animate(

                [

                    {
                        transform:
                            "translateY(0) rotate(0deg) scale(.5)",

                        opacity: 0
                    },

                    {
                        transform:
                            "translateY(-40vh) rotate(180deg) scale(1)",

                        opacity: 1
                    },

                    {
                        transform:
                            "translateY(-110vh) rotate(360deg) scale(.7)",

                        opacity: 0
                    }

                ],

                {

                    duration:
                        3500 +
                        Math.random() * 3000,

                    easing:
                        "ease-out"

                }

            );


        animation.onfinish =
            function () {

                heart.remove();

            };

    }

}


/* =================================
   3D PHOTO CARD EFFECT
================================= */

const cards =
    document.querySelectorAll(
        ".photo-card"
    );


cards.forEach(function (card) {


    card.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -8;


            const rotateY =
                ((x - centerX) /
                    centerX) * 8;


            card.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "rotateX(0deg) rotateY(0deg) scale(1)";

        }
    );

});


/* =================================
   PARTICLES
================================= */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement("span");


        particle.style.position =
            "fixed";


        particle.style.left =
            Math.random() * 100 + "vw";


        particle.style.top =
            Math.random() * 100 + "vh";


        particle.style.width =
            Math.random() * 3 + 1 + "px";


        particle.style.height =
            particle.style.width;


        particle.style.background =
            "#d8b1aa";


        particle.style.borderRadius =
            "50%";


        particle.style.opacity =
            Math.random() * .5;


        particle.style.pointerEvents =
            "none";


        particle.style.zIndex =
            "-1";


        particle.animate(

            [

                {
                    transform:
                        "translateY(0)"
                },

                {
                    transform:
                        `translateY(-${
                            80 +
                            Math.random() * 120
                        }px)`
                }

            ],

            {

                duration:
                    4000 +
                    Math.random() * 5000,

                iterations: Infinity,

                direction: "alternate",

                easing: "ease-in-out"

            }

        );


        container.appendChild(
            particle
        );

    }

}