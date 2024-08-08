function checkSlidesPerView() {
  let slideSize = $(".mySwiper .swiper-wrapper .swiper-slide").length;
  if (slideSize < 5) {
    $(".mySwiper .swiper-wrapper").css("justify-content", "center");
  }

  let mobileSlideSize = $(
    ".mobileMySwiper .swiper-wrapper .swiper-slide"
  ).length;
  if (mobileSlideSize < 5) {
    $(".mobileMySwiper .swiper-wrapper").css("justify-content", "center");
  }
}
checkSlidesPerView();

var swiper = new Swiper(".heroSlider", {
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  // freeMode: true,
  // watchSlidesProgress: true,
});


var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  on: {
    slideChange: function () {
      $('.mySwiper2 .swiper-slide').each(function (e) {
        var iframe  = $(this).find('iframe').get(0);
        if ( iframe ) {
          var iframeSrc = iframe.src;
          iframe.src = iframeSrc;
        }
      });
    },
  },
});







var swiper = new Swiper(".mySwiperZoom", {
  spaceBetween: 10,
  slidesPerView: 6,
  // freeMode: true,
  // watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 6,
    },
  },
});


var swiper2 = new Swiper(".mySwiperZoom2", {
  // loop: true,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: true,
  // },
  pagination: {
    el: ".slider__modal-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".slider__modal-next",
    prevEl: ".slider__modal-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  on: {
    slideChange: function () {
      var currentSlide = this.slides;
      var videos = currentSlide.find("video");
      videos.forEach(function (video) {
        video.pause();
      });
    },
  },
});


$('.mySwiper2').click(() => {
  $('.slider__modal').fadeIn(300)
  $('.slider__modal').css("display", "flex")
})

$('.mobileMySwiper2').click(() => {
  $('.slider__modal').css("display", "flex")
})

$('.slider__modal-closeBtn').click(() => {
  $('.slider__modal').fadeOut(300)
})

$(document).keydown(function (event) {
  if (event.keyCode == 27) {
    $('.slider__modal').fadeOut(300)
  }
});





var swiper = new Swiper(".mobileMySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

var swiper2 = new Swiper(".mobileMySwiper2", {
  loop: true,
  spaceBetween: 10,
  
  navigation: {
    nextEl: ".slider-next",
    prevEl: ".slider-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  on: {
    slideChange: function () {
      $('.mobileMySwiper2 .swiper-slide').each(function (e) {
        var iframe  = $(this).find('iframe').get(0);
        if ( iframe ) {
          var iframeSrc = iframe.src;
          iframe.src = iframeSrc;
        }
      });
    },
  },
});








var swiper = new Swiper(".projectSlider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 99000,
    disableOnInteraction: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".projectSlider-next",
    prevEl: ".projectSlider-prev",
  },
});
