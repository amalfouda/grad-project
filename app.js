var get_img = document.querySelector('#slider'); // Use '#slider' if 'slider' is an ID
var images = ['m1.avif', 'm2.jpeg'];
var i = 0;

function prev() {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  setImage();
}

function nxt() {
  i++;
  if (i >= images.length) {
    i = 0;
  }
  setImage();
}

function setImage() {
  get_img.setAttribute('src', 'images/' + images[i]);
}
