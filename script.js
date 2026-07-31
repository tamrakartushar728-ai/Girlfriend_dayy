window.onload = function(){

    setTimeout(function(){

        document.querySelector(".loader").style.display="none";

        document.querySelector(".main").classList.remove("hidden");

    },3000);

};


document.getElementById("surpriseBtn").onclick=function(){

    document.getElementById("letter").classList.remove("hidden");

    this.innerHTML="I Love You ❤️";

};
