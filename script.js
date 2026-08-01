window.onload = function () {

    setTimeout(function () {

        const loader = document.querySelector(".loader");
        const main = document.querySelector(".main");

        if (loader) {
            loader.style.display = "none";
        }

        if (main) {
            main.classList.remove("hidden");
        }

    }, 3000);

};


// Surprise Button

const surpriseBtn = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");


if (surpriseBtn && letter) {

    surpriseBtn.onclick = function () {

        letter.classList.remove("hidden");

        this.innerHTML = "I Love You ❤️";

    };

}


// Background Music

const bgMusic = document.getElementById("bgMusic");


if (bgMusic) {

    // Website load hone par try karega

    window.addEventListener("load", function () {

        bgMusic.play().catch(function () {});

    });


    // Pehli baar screen touch/click par music chalega

    document.addEventListener("click", function () {

        bgMusic.play();

    }, { once: true });

}
