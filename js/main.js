$(function () {
    
})
let modal = document.getElementById("modal__map");
let btn = document.getElementById("modal-window");
let span = document.getElementsByClassName("modal-window-close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

new Swiper('.swiper-container', {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
  });

  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu__button', '.burger-menu__lines');
    let links = menu.find('.menu-link');
    let overlay = menu.find('.burger-menu__overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('menu-active');
      
      if (menu.hasClass('menu-active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');