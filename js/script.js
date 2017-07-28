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

    
    
    $(function() {

    function showContent(e, element, navigation, info, img, close) {
      var eventTarget = e.target.hash;
      var imgSrc = $(e.target).parents('figure').children('img').attr('src');

      e.preventDefault();
      $(element).addClass('show');

      $(info).find('li').removeClass('is-visible');
      $(info).find("li"+eventTarget).addClass('is-visible');

      $(navigation).siblings(".project_info").children('li'+eventTarget).find('img').attr('src', imgSrc);
    }

    var projectContainerList = document.getElementsByClassName('project');

    $(projectContainerList).each(function() {
   //  for (var i = 0; i < projectContainerList.length; i++) {
      var project = $(this);
      var projectNavigation = $(project).children(".project_navigation");
      var projectInfo = $(projectNavigation).siblings(".project_info");
      var projectImg = $('<img>');
      var closeButton = $('<a href="#close" class="close"><i class="ion-android-close"></i></a>');

      function appendAndPrepend(info, img, close) {
        var infoTab = $(info).children('li');
        $(infoTab).append(close);
        $(infoTab).prepend(img);
      }  appendAndPrepend(projectInfo, projectImg, closeButton);

      $(projectNavigation).on('click', function(event) {
        if ( event.target.tagName.toLowerCase() === 'a' ) {
          showContent(event, project, projectNavigation, projectInfo, projectImg, closeButton);
        }
      });

      $('.close').on('click', function(e) {
        e.preventDefault();
        $(project).removeClass('show')
      });

    });

  });


/* ------------------------------------- */
/* Accordion   ................... */
/* ------------------------------------- */
  
      var acc = document.getElementsByClassName("accordion");
        var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
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
