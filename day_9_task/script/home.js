document.addEventListener('DOMContentLoaded', (event) => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', () => {
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });
  
  function setColor() {
    // Get the color from the color picker
    var color = document.getElementById('colorPicker').value;
    
    // Set the color as the background for body and .box
    document.body.style.backgroundColor = color;
     var boxes = document.querySelectorAll('.box');
     boxes.forEach(function(box) {
       box.style.backgroundColor = color;
     });
  }
  // function setColor() {
  //   // Get the color from the color picker
  //   var color = document.getElementById('colorPicker2').value;
    
  //   // Set the color as the background for body and .box
  //   var boxes = document.querySelectorAll('.box');
  //   boxes.forEach(function(box) {
  //     box.style.backgroundColor = color;
  //   });
  // }
  