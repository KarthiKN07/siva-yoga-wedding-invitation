  function openInvitation() {
    const music = document.getElementById("bgMusic");

    music.play().catch(err => {
        console.log(err);
    });

    document.getElementById("invitationPage").style.display = "none";
}

const weddingDate = new Date("August 30, 2026 08:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";

}, 1000);
const hearts = document.querySelector(".hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 800);
function shareInvitation(){

    if(navigator.share){

        navigator.share({
            title:"Siva ❤️ Yoga Wedding",
            text:"You are warmly invited to our wedding 💍",
            url:window.location.href
        });

    }else{

        alert("Sharing is not supported on this device.");

    }

}
