document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.carousel');
    var inner = carousel.querySelector('.carousel-inner');
    var prevBtn = carousel.querySelector('.carousel-control.prev');
    var nextBtn = carousel.querySelector('.carousel-control.next');
    var itemWidth = carousel.querySelector('.carousel-item').clientWidth;
    var currentOffset = 0;
  
    prevBtn.addEventListener('click', function() {
      currentOffset += itemWidth;
      if (currentOffset > 0) {
        currentOffset = -itemWidth * (inner.childElementCount - 1);
      }
      inner.style.transform = 'translateX(' + currentOffset + 'px)';
    });
  
    nextBtn.addEventListener('click', function() {
      currentOffset -= itemWidth;
      if (currentOffset < -itemWidth * (inner.childElementCount - 1)) {
        currentOffset = 0;
      }
      inner.style.transform = 'translateX(' + currentOffset + 'px)';
    });
  });


// Login //
// Sign Up //

var modal = document.getElementById('id01');
var modalsign = document.getElementById('id02');

window.onclick = function(event) {
  if (event.target == modalsign) {
    modalsign.style.display = "none";
  }
  if (event.target == modal) {
    modal.style.display = "none";
}
}
 