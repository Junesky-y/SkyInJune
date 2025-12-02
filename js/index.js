function changeLargeImage(imageUrl) {
    var largeImage = document.getElementById('largeImage');
    largeImage.src = imageUrl;
    document.querySelector('.active-border').classList.remove('active-border');
    event.target.classList.add('active-border');
}

module.exports = { changeLargeImage };