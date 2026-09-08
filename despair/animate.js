const pause = 50;


function sleep(mycnt, mypause, myFile) {
    return new Promise(resolve => setTimeout(function () { document.getElementById("image-container").src = myFile; }, mycnt * mypause));
}


for (cnt = 1; cnt < 21; cnt++) {

    sleep(cnt, pause, imageUrls[cnt-1]);

}

for (cnt = 21; cnt < 41; cnt++) {

    sleep(cnt, pause, imageUrls[40 - cnt]);

}


