//rectangulos
metaCircles(5, 500, "#FC5106")
metaCircles(142, 500, "#41D0F7")
metaCircles(283, 500, "#F970F2")
metaCircles(425, 500, "#E81C1C")
metaCircles(570, 500, "#EFA706")

function metaCircles(startXPosition, startYPosition, color) {
    let meta = document.createElement("div")
    //asigna la clase al div
    meta.className = "circleMeta"
    //establece la posicion en (x) (y)
    meta.style.left = startXPosition + "px"
    meta.style.top = startYPosition + "px"
    //Agrega los rectangulos dentro del div c
    document.querySelector(".c").appendChild(meta)
    //establece el color
    meta.style.backgroundColor = color
}

let interval
let arrayCincoIntervalos = []
let paraEjecucion

let btnStart = document.getElementById("start")
btnStart.addEventListener("click", function () {
    clickEvent(btnStart)
})
let btnStop = document.getElementById("stop")
btnStop.addEventListener("click", function () {
    clickEvent(btnStop)
})
let btnRe = document.getElementById("again")
btnRe.addEventListener("click", function () {
    clickEvent(btnRe)
})

function clickEvent(btnB) {
    let flag = btnB.value

    if (flag === "false") {
        console.log(arrayCincoIntervalos)
        clearTimeout(paraEjecucion);
        //recorrer el array y limpiarlo  
        arrayCincoIntervalos.forEach((esferaInterval) => clearInterval(esferaInterval));
    }

    if (flag === "true") {
        arrayCincoIntervalos = [];
        timeCircle()
    }

    if (flag === "again") {
        document.querySelectorAll('.circle').forEach(circle => circle.remove());
        timeCircle()
    }

}

//moveCircles(30, 0, 2, 1, 'd')
function moveCircles(startXPosition, startYPosition, speed, images, letter) {

    let circles = document.createElement("div")
    circles.className = "circle";
    circles.setAttribute('data-letter', letter);
    circles.style.left = startXPosition + "px"
    circles.style.top = startYPosition + "px"
    document.querySelector(".c").appendChild(circles);
    let image = document.createElement("img")
    circles.appendChild(image)

    if (images === 1) {
        image.setAttribute("src", "images/botonNaranja.png")
        image.setAttribute("width", "80px");
    }

    if (images === 2) {
        image.setAttribute("src", "images/blueButton.png")
        image.setAttribute("width", "68px");
    }

    if (images === 3) {
        image.setAttribute("src", "images/pink.webp")
        image.setAttribute("width", "55px");
    }

    if (images === 4) {
        image.setAttribute("src", "images/redButton.png")
        image.setAttribute("width", "63px");
    }

    if (images === 5) {
        image.setAttribute("src", "images/yellowButton.png")
        image.setAttribute("width", "68px");
    }

    let distance = 0;
    interval = setInterval(function () {
        distance += speed
        circles.style.top = (startYPosition + distance) + "px";

        if (distance >= 540) {
            if (circles && circles.parentNode) {
                circles.parentNode.removeChild(circles);
                arrayCincoIntervalos = []
            }
        }
    }, 10);

    console.log(" arrayPush " + arrayCincoIntervalos.push(interval))
    console.log("Posición: " + (arrayCincoIntervalos.length - 1))

}

let total = 0
let audio = document.getElementById("audio");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");
let audio4 = document.getElementById("audio4");
let audio5 = document.getElementById("audio5");

document.addEventListener('keydown', function (event) {


    let pressedKey = event.key;
    let circles = document.querySelectorAll('.circle');

    circles.forEach(function (circle) {

        let circleLetter = circle.getAttribute('data-letter');
        let circlePositionY = parseFloat(circle.style.top);

        if (pressedKey === circleLetter && (circlePositionY >= 430 || circlePositionY > 450)) {

            if (pressedKey === "d") {
                audio.play()
            }
            if (pressedKey === "f") {
                audio2.play()
            }
            if (pressedKey === "g") {
                audio3.play()
            }
            if (pressedKey === "h") {
                audio4.play()
            }
            if (pressedKey === "j") {
                audio5.play()
            }
            //map reemplazo switch
            mapita = new Map([
                ["d", 10],
                ["f", 15],
                ["g", 20],
                ["h", 15],
                ["j", 10],
            ]);
            total += mapita.get(circleLetter)
            document.getElementById('pointss').textContent = total;
        }

    });
});

//aparicion de crculos en momentos aleatorios
function timeCircle() {

    let interval1 = Math.floor(Math.random() * 2000) + 1000;
    let interval2 = Math.floor(Math.random() * 2000) + 1000;
    let interval3 = Math.floor(Math.random() * 2000) + 1000;
    let interval4 = Math.floor(Math.random() * 2000) + 1000;
    let interval5 = Math.floor(Math.random() * 2000) + 1000;

    //posicion : x, y , velocidad, img  
    setTimeout(function () {
        moveCircles(30, 0, 2, 1, 'd')
    }, interval1);

    setTimeout(function () {
        moveCircles(170, 0, 1, 2, 'f')
    }, interval2);

    setTimeout(function () {
        moveCircles(320, 0, 2, 3, 'g')
    }, interval3);

    setTimeout(function () {
        moveCircles(450, 0, 1, 4, 'h')
    }, interval4);

    setTimeout(function () {
        moveCircles(596, 0, 2, 5, 'j')
    }, interval5);

    paraEjecucion = setTimeout(timeCircle, Math.max(interval1, interval2, interval3, interval4, interval5) + 1000);
}
