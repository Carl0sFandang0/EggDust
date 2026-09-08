
const imageUrls = []; 

for (cnt = 1; cnt < 71; cnt++) {
    imageUrls.push("despair" + cnt + ".svg");  // the array will dynamically grow
}

let loadedCount = 0;

function preloadImages(urls, callback) {
    urls.forEach((url) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === urls.length) {
                callback(); // Starts your animation when all images are ready 
            }
        }; 
    });
}


preloadImages(imageUrls, startAnimation);


