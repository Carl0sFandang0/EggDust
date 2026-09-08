
const imageUrls = []; 

for (cnt = 1; cnt < 991; cnt++) {
    imageUrls.push("output_" + cnt + ".svg");  // the array will dynamically grow
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


