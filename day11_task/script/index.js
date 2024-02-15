
document.addEventListener('DOMContentLoaded', (event) => {
    let menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close')

    menuIcon.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      menuIcon.style.display = menuIcon.style.display=== 'none'? 'block': 'none';
      close.style.display = close.style.display === 'none' ? 'block' : 'block';
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
  var closeIcon = document.querySelector('.close1');
  var menu = document.querySelector('.menu');
  var menuIcon = document.querySelector('.menu-icon');

  function toggleMenuDisplay() {
    if (window.innerWidth <= 768) {
      menu.style.display = 'none';
      menuIcon.style.display = 'block';
    } else {
      menu.style.display = 'block';
      menuIcon.style.display = 'none';
    }
  }

  closeIcon.addEventListener('click', function() {
    menu.style.display = 'none';
    if (window.innerWidth <= 768) {
        menuIcon.style.display = 'block';
    }
  });

  window.addEventListener('resize', toggleMenuDisplay);

  // Initial check
  toggleMenuDisplay();
});

document.addEventListener("DOMContentLoaded", function() {
  var seeAllButtons = document.querySelectorAll(".show, #show");
  var seeAllImages = document.querySelectorAll(".seeall");

  seeAllButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      seeAllImages.forEach(function(image) {
        if (image.style.display === "none" || image.style.display === "") {
          image.style.display = "block";
        } else {
          image.style.display = "none";
        }
      });
    });
  });
});


