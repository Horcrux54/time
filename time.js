let now, h, min, sec;
let time1 = document.getElementById('1');
let color1 = document.getElementById('2');

function thikl() {
    now = new Date();
    h = now.getHours().toString();
    min = now.getMinutes().toString();
    sec = now.getSeconds().toString();
    if (h.length < 2) {
        h = "0" + h;
    }
    if (min.length < 2) {
        min = "0" + min;
    }
    if (sec.length < 2) {
        sec = "0" + sec;
    }
    let itogoTime = h + ":" + min + ":" + sec;
    let itogoColor = "#" + h + min + sec;
    console.log(itogoTime);
    console.log(itogoColor);
    document.body.style.background = itogoColor;

    time1.textContent = itogoTime;
    color1.textContent = itogoColor;
}

setInterval(thikl, 200);


