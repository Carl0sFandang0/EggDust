const imageUrls = ['despair1.svg', 'despair2.svg', 'despair3.svg', 'despair4.svg', 'despair5.svg', 'despair6.svg', 'despair7.svg', 'despair8.svg', 'despair9.svg', 'despair10.svg', 'despair11.svg', 'despair12.svg', 'despair13.svg', 'despair14.svg', 'despair15.svg', 'despair16.svg', 'despair17.svg', 'despair18.svg', 'despair19.svg', 'despair20.svg'];
const preloadedImages = [];
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
        }; preloadedImages.push(img);
    });
}


preloadImages(imageUrls, startAnimation);


