$( document ).ready(function() {
  "use strict";




/* ------------------------------------- */
/* Page Loading    ................... */
/* ------------------------------------- */

  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.a-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });

    
 /* ------------------------------------- */
 /* Project Gallery   ................... */
 /* ------------------------------------- */

  
/* ------------------------------------- */
/* Accordion   ................... */
/* ------------------------------------- */
  
     
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

/* ------------------------------------- */
/* CountDown Timer   ................... */
/* ------------------------------------- */

  $('#clock')
  .countdown($('#clock').attr("data-date")).on('update.countdown', function(event) {
     var $this = $(this).html(event.strftime(''
       + '<div class="clock-box"><span>%-D</span> Day%!d, </div>'
       + '<div class="clock-box"><span>%H</span> hours, </div>'
       + '<div class="clock-box"><span>%M</span> minuts, and </div>'
       + '<div class="clock-box"><span>%S</span> seconds </div>'
       ));
  });
    

  /* ------------------------------------- */
  /* ScrollToTop   ................... */
  /* ------------------------------------- */

    $('.up').on('click', function() {
      $('#rightSide').animate({
          scrollTop: 0
      }, 500);
      if($(window).width() < 1024) {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
      }
      return false;
    });
    
    
    

});
