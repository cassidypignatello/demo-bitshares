document.addEventListener('DOMContentLoaded', function(event) { 
  const body = document.querySelector('body'),
          nav = document.querySelector('nav'),
          navBarHeight = document.querySelector('nav').offsetHeight,
          headerHeight = document.querySelector('header').offsetHeight;
          
  const windowScrollActions = function() {
      var windowTop = window.scrollY;
      windowTop > 1 ? body.classList.add('body-scrolled') : body.classList.remove('body-scrolled');
      windowTop > navBarHeight ? body.classList.add('navbar-scrolled') : body.classList.remove('navbar-scrolled');
      windowTop > headerHeight - navBarHeight - 1 ? body.classList.add('header-scrolled') : body.classList.remove('header-scrolled');
      body.classList.contains('body-scrolled') ? nav.classList.add('stick') : nav.classList.remove('stick');
  };

  windowScrollActions();
  window.addEventListener('scroll', function(e) {
      e.preventDefault();
      windowScrollActions();
  })
});