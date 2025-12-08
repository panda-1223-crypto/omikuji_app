function getRandomImage(){
    const num = Math.floor(Math.random() * 7);
    const imagePath = `./images/omikuji_${num.toString()}.png`;
    return { num, imagePath};
}

function playOmikuji(){

    const img = document.getElementById("js-result");
    const msg = document.getElementById("js-message");
    msg.textContent = "";

    const timer = setInterval(() =>{
        const result = getRandomImage();
        img.src = result.imagePath;
    }, 10)

    setTimeout(() =>{
        clearInterval(timer);

        const finalResult = getRandomImage();
        img.src = finalResult.imagePath;
        msg.textContent = messages[finalResult.num];
    }, 3000)
}

document.getElementById("js-button").addEventListener("click", playOmikuji);