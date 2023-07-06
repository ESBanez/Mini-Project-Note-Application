const images = document.getElementsByClassName('content-image');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseover', function() {
    this.classList.add('enlarged');
  });

  images[i].addEventListener('mouseout', function() {
    this.classList.remove('enlarged');
  });
}