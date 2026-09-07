const pause = 50;

function sleep(mycnt, mypause, myChar) {
    return new Promise(resolve => setTimeout(function () { document.getElementById("image-container").src = "despair" + myChar + ".svg"; }, mycnt * mypause));
}

for (cnt = 1; cnt < 21; cnt++) {

    sleep(cnt, pause, cnt.toFixed(0));

}

for (cnt = 21; cnt < 41; cnt++) {

    sleep(cnt, pause, (41 - cnt).toFixed(0));

}

