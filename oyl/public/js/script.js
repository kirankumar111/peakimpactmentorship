/* ============================================
                 Preloader 
============================================*/
$(window).on("load", function() {
  //Make sure that whole website is loaded
  $("#status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
});
/* ============================================
                 Team 
============================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></li>',
      '<i class="fa fa-angle-right"></li>'
    ],
    responsive: {
      // Breakpoint from 0 up
      0: {
        items: 1
      },
      // Breakpoint from 480 up
      480: {
        items: 2
      }
    }
  });
});
/* ============================================
                 Progress Bars 
============================================*/
$(function() {
  $("#progress-elements").waypoint(
    function() {
      $(".progress-bar").each(function() {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%"
          },
          2000
        );
      });
      this.destroy();
    },
    {
      offset: "bottom-in-view"
    }
  );
});
/* ============================================
                 Responsive Tabs 
============================================*/
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: "slide"
  });
});
/* ============================================
                 Portfolio 
============================================*/
$(window).on("load", function() {
  // Initialize Isotope
  $("#isotope-container").isotope({});
  // filter items on button click
  $("#isotope-filters").on("click", "button", function() {
    // get filter value
    var filterValue = $(this).attr("data-filter");
    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });
    // active button
    $("#isotope-filters")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});
/* ============================================
                 Magnifier 
============================================*/
$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", //child items selector
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
/* ============================================
                 Testimonials 
============================================*/

$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></li>',
      '<i class="fa fa-angle-right"></li>'
    ]
  });
});

/* ============================================
         Counter Up Requires Waypoint plugin
============================================*/
$(function() {
  $(".counter").counterUp({
    delat: 10,
    time: 2000
  });
});

/* ============================================
         Clients
============================================*/

$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></li>',
      '<i class="fa fa-angle-right"></li>'
    ],
    responsive: {
      // Breakpoint from 0 up
      0: {
        items: 2
      },
      // Breakpoint from 480 up
      480: {
        items: 3
      },
      // Breakpoint from 768 up
      768: {
        items: 6
      }
    }
  });
});

/* ============================================
         Google Map
============================================*/
$(window).on("load", function() {
  // Map Variables
  var addressString =
    "Aratt - Divya Jyothi Apartments, 6th Cross Road, New Friends Colony, S T Bed Layout, Koramangala, Bengaluru, Karnataka";
  var myLatlng = {
    lat: 12.927923,
    lng: 77.627106
  };

  // 1. Render map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng
  });

  //2. Map Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address"
  });

  //3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  // Show info window when user clicks marker
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });

  //4. Resize Function

  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter();
  });
});

/* ============================================
         Navigation Bar
============================================*/
/* Show and Hide white navigation */

$(function() {
  // Show/Hide nav on page load
  showHideNav();
  $(window).scroll(function() {
    showHideNav();
  });

  function showHideNav() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        //show white nav
        $("nav").addClass("white-nav-top");
        // show dark logo
        $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
        // Show back to top button
        $("#back-to-top").fadeIn();
      } else {
        $("nav").removeClass("white-nav-top");
        $(".navbar-brand img").attr("src", "img/logo/logo.png");
        $("#back-to-top").fadeOut();
      }
    });
  }
});

// Smooth Scrolling

$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();
    // get section id like #about #services etc
    var section_id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/* ============================================
            Mobile Menu
============================================*/
$(function() {
  // Show Mobile Nav
  $("#mobile-nav-open-btn").click(function() {
    $("#mobile-nav").css("height", "100%");
  });
  // Hide Mobile Nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
    $("#mobile-nav").css("height", "0%");
  });
});

/* ============================================
            Animation
============================================*/
// animate on scroll
$(function() {
  new WOW().init();
});

// home animation on page load
$(window).on("load", function() {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});
