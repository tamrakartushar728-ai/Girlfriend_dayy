window.onload = function () {

    setTimeout(function () {

        document.querySelector(".loader").style.display = "none";

        document.querySelector(".main").classList.remove("hidden");

    }, 3000);

};



// Surprise Button

const surpriseBtn = document.getElementById("surpriseBtn");

const letter = document.getElementById("letter");


if (surpriseBtn) {

    surpriseBtn.onclick = function () {

        letter.classList.remove("hidden");

        this.innerHTML = "I Love You ❤️";

    };

}



// Background Music

const bgMusic = document.getElementById("bgMusic");


if (bgMusic) {

    // Try autoplay

    window.addEventListener("load", function () {

        bgMusic.play().catch(() => {});

    });



    // Play after first touch/click

    document.addEventListener("click", function () {

        bgMusic.play();

    }, { once: true });

}
