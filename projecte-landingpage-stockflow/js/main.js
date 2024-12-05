// Funció per verificar si la cookie de consentiment existeix
function checkCookieConsent() {
    const consent = getCookie("cookieConsent");
    if (consent === "true") {
        // Si l'usuari ja ha acceptat, amaga el banner
        document.getElementById("cookie-banner").style.display = "none";
    }
}

// Funció per obtenir el valor d'una cookie per nom
function getCookie(name) {
    const nameEq = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
    }
    return null;
}

// Funció per establir una cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Gestió de l'acceptació de cookies
document.getElementById("accept-cookies").addEventListener("click", function() {
    // Quan l'usuari accepta les cookies, es crea la cookie i amaga el banner
    setCookie("cookieConsent", "true", 365);
    document.getElementById("cookie-banner").classList.add("hidden");
});

// Gestió de la denegació de cookies (no guardar res)
document.getElementById("reject-cookies").addEventListener("click", function() {
    // Quan l'usuari rebutja, només s'amaga el banner sense guardar cap informació
    document.getElementById("cookie-banner").classList.add("hidden");
});

// Comprova si l'usuari ja ha acceptat les cookies en la càrrega de la pàgina
document.addEventListener("DOMContentLoaded", function() {
    checkCookieConsent();
});


$(document).ready(function () {

  // toggle mobile menu
  $('[data-toggle="toggle-nav"]').on('click', function () {
      $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
      return false;
  });

  // feather icons
  feather.replace();

  // smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]');

  // tiny slider
  $('#slider-1').slick({
      infinite: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
  });

  $('#slider-2').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      customPaging: function (slider, i) {
          return '<div class="bg-white br-round w-1 h-1 opacity-50 mt-5" id=' + i + '> </div>'
      },
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1
          }
      }, ]
  });
  
});


// Carregar navbar
fetch('../components/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-container').innerHTML = data;
});

// Carregar footer
fetch('../components/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
});





