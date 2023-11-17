document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile navigation
    var menuIcon = document.querySelector('.ri-menu-line');
    var navList = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', function () {
      navList.classList.toggle('active');
    });
  
    // Smooth scrolling for anchor links
    var anchorLinks = document.querySelectorAll('nav ul li a');
  
    anchorLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust offset as needed
          behavior: 'smooth',
        });
      });
    });
  
    // Your other JavaScript logic can be added here
  });
  