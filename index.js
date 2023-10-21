let imageWrapperLeft = document.getElementsByClassName("image-wrapper-left");
let imageWrapperRight = document.getElementsByClassName("image-wrapper-right");

for (let i = 0; i<imageWrapperLeft.length; i++) {
    let currentImage = imageWrapperLeft[i].querySelector("img");
    currentImage.addEventListener('click',e => {expandLeftImage(currentImage)});
}

function expandLeftImage(image) {
    if (image.className === "image-thumb") {
        image.className = "image-full";
        image.parentNode.className = "image-wrapper-full";        
    } else {
        image.className = "image-thumb";
        image.parentNode.className = "image-wrapper-left";
    }
}

for (let i = 0; i<imageWrapperRight.length; i++) {
    let currentImage = imageWrapperLRight[i].querySelector("img");
    currentImage.addEventListener('click',e => {expandRightImage(currentImage)});
}

function expandRightImage(image) {
    if (image.className === "image-thumb") {
        image.className = "image-full";
        image.parentNode.className = "image-wrapper-full";        
    } else {
        image.className = "image-thumb";
        image.parentNode.className = "image-wrapper-right";
    }
}