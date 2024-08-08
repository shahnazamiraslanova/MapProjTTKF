// header scroll
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $(".header-desktop").addClass("active");
  } else {
    $(".header-desktop").removeClass("active");
  }
});

// Search
let searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
  let searchClose = document.querySelector(".mobile-search-close");
  let searchBlock = document.querySelector(".search-container");
  let searchBcg = document.querySelector(".search-overlay");
  let body = document.querySelector("body");

  searchBtn.addEventListener("click", () => {
    searchBlock.classList.add("show");
    body.style.overflow = "hidden";
  });
  searchClose.addEventListener("click", () => {
    searchBlock.classList.remove("show");
    body.style.overflow = "visible";
  });
  searchBcg.addEventListener("mouseup", (e) => {
    searchBlock.classList.remove("show");
    body.style.overflow = "visible";
  });
}

///////////////////////////
const mobileSearch = document.querySelector(".mobile-search");
const searchInput = mobileSearch.querySelector(".mobile-search-input");
const deleteBtn = mobileSearch.querySelector(".exit-search");
const searchIcon = mobileSearch.querySelector(".search-icon");

// hide the delete button initially
deleteBtn.style.display = "none";

searchInput.addEventListener("input", function () {
  const inputValue = this.value.trim();

  if (inputValue.length > 0) {
    // show the delete button and hide the search button
    deleteBtn.style.display = "flex";
    searchIcon.style.display = "none";
  } else {
    // show the search button and hide the delete button
    deleteBtn.style.display = "none";
    searchIcon.style.display = "flex";
  }
});

deleteBtn.addEventListener("click", function () {
  searchInput.value = "";
  deleteBtn.style.display = "none";
  searchIcon.style.display = "flex";
});

//////////////////////////

// Mobile menu
var hamburgerBtn = document.querySelector(".header-hamburger");

if (hamburgerBtn) {
  var hamburgerCloseBtn = document.querySelector(".hamburger-close");
  var hamburgerContent = document.querySelector(".hamburger-content");
  var hamburgerOverlay = document.querySelector(".hamburger-overlay");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerContent.classList.add("show");
  });

  hamburgerCloseBtn.addEventListener("click", () => {
    hamburgerContent.classList.remove("show");
  });

  hamburgerOverlay.addEventListener("mouseup", (e) => {
    hamburgerContent.classList.remove("show");
  });
}

// mobil menu accordion
$(document).on("click", ".hamburger-menu-list-item-title", function () {
  $(this).toggleClass("active");
  if ($(this).hasClass("active")) {
    $(this).next().show();
  } else {
    $(this).next().hide();
  }
});

// Language
// const languageBtn = document.querySelector('.language-btn');
// const languageBlock = document.querySelector('.language-block');
// let debouce = null

// languageBtn?.addEventListener("mouseover", function handleMouseOver() {
// 	languageBlock.style.display = 'block';
// });

// languageBtn?.addEventListener('mouseout', function handleMouseOut() {
// 	clearTimeout(debouce)
// 	debouce = setTimeout(() => {
// 		languageBlock.style.display = 'none';
// 	}, 3000);
// });

$(document).ready(function () {
  /*Open Close select menu*/
  $(".select__container").on("click", function (e) {
    e.stopPropagation();
    $(this).find(".select__menu").toggle();
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".select__container").length) {
      $(".select__menu").hide();
    }
  });
  /*Open Close select menu end*/

  // Handle each form group separately
  $(".form__group").each(function () {
    var select = $(this).find("select");
    var selectMenu = $(this).find(".select__menu");
    var selectInput = $(this).find(".form__select-input");

    // Get all select options
    var selectOptions = select.find("option").not(":first");

    // Generate select items in select menu
    selectOptions.each(function () {
      var optionValue = $(this).val();
      var optionText = $(this).text();
      var selectItem = $("<div>")
        .addClass("select__item")
        .attr("data-id", optionValue)
        .text(optionText);
      selectMenu.append(selectItem);
    });

    // Set selected value on page load
    var selectedValue = select.val();
    var selectedText = select.find("option:selected").text();
    selectInput.val(selectedText);

    // Update form input value and select on select item click
    selectMenu.on("click", ".select__item", function () {
      var selectedId = $(this).data("id");
      var selectedText = $(this).text();
      select.val(selectedId);
      selectInput.val(selectedText);
      selectInput.addClass("selected");
    });

    // Update select value and form input on select change
    select.on("change", function () {
      var selectedText = select.find("option:selected").text();
      selectInput.val(selectedText);
    });
  });

  //Calendar
  let calendarBg = `<div class="calendar__bg "></div>`;
  $("body").append(calendarBg);

  $(".calendar__bg").click(() => {
    $(".calendar__bg").hide();
  });

  //Chat

  $(".rateUs").click(function () {
    $(".rateUs__modal-container").show();
    $(".thanks__modal-container").hide();
    $(".rateUs").addClass("active__icon");
    if ($(window).width() < 768) {
      $("body").css("overflow-y", "hidden");
      $('.rateUs').hide()
    }
  });

  $(".close__modal").click(function () {
    $(".rateUs__modal-container").hide();
    $(".star").removeClass("active_star");
    $(".rating").val(0);
    $(".modal__textarea textarea").val("");
    $(".textarea__length").html(0);
    $(".send__rate").removeClass("active__send-btn");
    $(".rateUs").removeClass("active__icon");
    $("body").css("overflow-y", "unset");
    $('.rateUs').show()
  });

  var textarea = $(".modal__textarea textarea");
  var charCount = $(".textarea__length");
  textarea.on("input", function () {
    charCount.html(textarea.val().length);
  });

  $(".star").hover(function () {
    $(this).addClass("active_hover-star");
    $(this).prevAll().addClass("active_hover-star");
    $(this).nextAll().removeClass("active_hover-star");
  });

  $(".star").mouseleave(function () {
    $(".star").removeClass("active_hover-star");
  });

  $(".star").click(function () {
    $(".star").removeClass("active_star");
    $(this).addClass("active_star");
    $(this).prevAll().addClass("active_star");
    $(this).next().removeClass("active_star");

    var rating = $(".star.active_star").length;
    $(".rating").val(rating);
    $(".send__rate").addClass("active__send-btn");
  });

  $(".close__thanks-modal").click(() => {
    $(".thanks__modal-container").hide();
  });

});
