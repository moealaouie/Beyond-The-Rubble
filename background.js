// document.addEventListener('DOMContentLoaded', function() {
//     var images = ['images/background1.png', 'images/background2.jpg'];
//     var index = Math.floor(Math.random() * images.length);
//     document.body.style.backgroundImage = 'url(' + images[index] + ')';
// });


document.addEventListener('DOMContentLoaded', function() {
    var images = ['images/background1.jpg', 'images/background2.jpg', 'images/background3.jpg'];
    var lastIndex = parseInt(localStorage.getItem('lastImageIndex'), 10);
    var index;

    // Generate a new random index different from the last one if there are multiple images
    do {
        index = Math.floor(Math.random() * images.length);
    } while (images.length > 1 && index === lastIndex);

    // Set the background image style
    document.body.style.backgroundImage = 'url(' + images[index] + ')';

    // Store the index of the displayed image
    localStorage.setItem('lastImageIndex', index);

    function adjustBackground() {
        const aspectRatio = window.innerWidth / window.innerHeight;
        const ultraWideAspectRatio = 21 / 9;
        
        if (aspectRatio >= ultraWideAspectRatio) {
            document.body.style.backgroundSize = "contain"; // or other rules as needed
        } else {
            document.body.style.backgroundSize = "cover";
        }
    }
    
    document.addEventListener('DOMContentLoaded', adjustBackground);
    window.addEventListener('resize', adjustBackground);
});