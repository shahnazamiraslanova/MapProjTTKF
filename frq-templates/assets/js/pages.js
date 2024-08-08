// Counters
$(document).ready(function () {
  $(".counter").each(function () {
    var count = $(this);
    var countTo = count.attr("data-count");
    $({ countNum: count.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "linear",
        step: function () {
          count.text(Math.floor(this.countNum));
        },
        complete: function () {
          count.text(this.countNum);
        },
      }
    );
  });
});

$(document).ready(function () {
  const originalHeaderText = $(".text-container").text();
  $(".index-about-box").mouseenter(function () {
    $(".index-about-box").removeClass("active");
    $(this).addClass("active");
    if ($(window).width() < 992) {
      $(".aboutModal").modal("show");
      var hoveredSpanText = $(this, " index-about-box-text").text();
      $(".modal-text").text(hoveredSpanText);
    }
  });
});

// FAQ
var lastFaqHomeOpened = false;
var showAnswerBtn = document.querySelectorAll(".faq-show-answer-btn");
var hideAnswerBtn = document.querySelectorAll(".faq-hide-answer-btn");

showAnswerBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (lastFaqHomeOpened != false) {
      lastFaqHomeOpened.click();
    }
    element.style.display = "none";
    element.nextElementSibling.style.display = "flex";
    element.parentElement.nextElementSibling.style.height = "auto";
    element.parentElement.nextElementSibling.style.borderTop =
      "1px solid rgba(18, 104, 179, 0.5)";
    element.parentElement.nextElementSibling.style.paddingTop = "7px";
    element.parentElement.nextElementSibling.style.marginTop = "12px";
    lastFaqHomeOpened = element.nextElementSibling;
  });
});
hideAnswerBtn.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.display = "none";
    element.previousElementSibling.style.display = "flex";
    element.parentElement.nextElementSibling.style.height = "0px";
    element.parentElement.nextElementSibling.style.borderTop = "none";
    element.parentElement.nextElementSibling.style.paddingTop = "0px";
    element.parentElement.nextElementSibling.style.marginTop = "0px";
    lastFaqHomeOpened = false;
  });
});

// FAQ page
var lastFaqOpened = false;
var showFaq = document.querySelectorAll(".faq-show-btn");
var hideFaq = document.querySelectorAll(".faq-hide-btn");

showFaq.forEach((element) => {
  element.addEventListener("click", () => {
    if (lastFaqOpened != false) {
      lastFaqOpened.click();
    }
    element.style.display = "none";
    element.nextElementSibling.style.display = "block";
    element.nextElementSibling.style.color = "#fff";
    element.parentElement.parentElement.parentElement.style.background =
      "linear-gradient(113.76deg, #3498EF 0%, #0059A7 100%), #DFF0FF";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#fff";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "block";
    element.parentElement.previousElementSibling.lastElementChild.style.width =
      "100%";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#fff";
    element.parentElement.parentElement.style.alignItems = "flex-start";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "flex";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "block";
    element.parentElement.parentElement.nextElementSibling.style.color = "#fff";
    lastFaqOpened = element.nextElementSibling;
  });
});
hideFaq.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.display = "none";
    element.previousElementSibling.style.display = "block";
    element.previousElementSibling.previousElementSibling.style.color =
      "#1268B3";
    element.parentElement.parentElement.parentElement.style.background =
      "#DFF0FF";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#1268B3";
    element.parentElement.parentElement.style.alignItems = "center";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#1268B3";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "-webkit-box";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "none";
    lastFaqOpened = false;
  });
});

// Projects
var lastProjectOpened = false;
var showProjectContent = document.querySelectorAll(".show-project-content");
var hideProjectContent = document.querySelectorAll(".hide-project-content");

$(".show-project-content").click(function () {
  $(this)
    .parent()
    .parent()
    .find(".projects-list-item-left ")
    .css("align-items", "flex-start");
  $(this)
    .parent()
    .parent()
    .find(".projects-list-item-right ")
    .css("align-items", "flex-start");
});
$(".hide-project-content").click(function () {
  $(this)
    .parent()
    .parent()
    .find(".projects-list-item-left ")
    .css("align-items", "center");
  $(this)
    .parent()
    .parent()
    .find(".projects-list-item-right ")
    .css("align-items", "center");
});

showProjectContent.forEach((element) => {
  element.addEventListener("click", () => {
    if (lastProjectOpened != false) {
      lastProjectOpened.click();
    }
    element.parentElement.parentElement.parentElement.style.background =
      "linear-gradient(113.76deg, #3498EF 0%, #0059A7 100%), #DFF0FF";
    element.nextElementSibling.style.display = "block";
    element.previousElementSibling.style.color = "#fff";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#fff";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "block";
    // element.parentElement.previousElementSibling.lastElementChild.style.width = "100%"
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#fff";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "block";
    element.style.display = "none";
    lastProjectOpened = element.nextElementSibling;
  });
});
hideProjectContent.forEach((element) => {
  element.addEventListener("click", () => {
    element.previousElementSibling.style.display = "block";
    element.style.display = "none";
    element.previousElementSibling.previousElementSibling.style.color =
      "#1268B3";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "-webkit-box";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "none";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#1268B3";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#1268B3";
    element.parentElement.parentElement.parentElement.style.background =
      "#DFF0FF";
    lastProjectOpened = false;
  });
});

//  Procurement
var lastProcurementOpened = false;
var showProcurementContent = document.querySelectorAll(
  ".show-procurement-content"
);
var hideProcurementContent = document.querySelectorAll(
  ".hide-procurement-content"
);

showProcurementContent.forEach((element) => {
  element.addEventListener("click", () => {
    if (lastProcurementOpened != false) {
      lastProcurementOpened.click();
    }
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "block";
    element.style.display = "none";
    element.nextElementSibling.style.display = "block";
    element.parentElement.parentElement.parentElement.style.background =
      "linear-gradient(113.76deg, #3498EF 0%, #0059A7 100%), #DFF0FF";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#fff";
    // element.parentElement.parentElement.parentElement.lastElementChild.style.display="flex"
    element.parentElement.previousElementSibling.lastElementChild.style.fontWeight =
      "500";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#fff";
    element.parentElement.parentElement.style.alignItems = "flex-start";
    // element.previousElementSibling.style.display = "none"
    element.previousElementSibling.style.color = "#fff";

    lastProcurementOpened = element.nextElementSibling;
  });
});
hideProcurementContent.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.display = "none";
    element.previousElementSibling.style.display = "block";
    element.previousElementSibling.previousElementSibling.style.color =
      "#1268B3";
    element.previousElementSibling.style.color = "#1268B3";

    element.previousElementSibling.previousElementSibling.style.display =
      "block";
    element.parentElement.parentElement.parentElement.style.background =
      "#DFF0FF";
    // element.parentElement.parentElement.parentElement.lastElementChild.style.display="none"
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#1268B3";
    element.parentElement.previousElementSibling.lastElementChild.style.fontWeight =
      "700";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#1268B3";
    element.parentElement.parentElement.style.alignItems = "center";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "-webkit-box";
    lastProcurementOpened = false;
  });
});

var showProcurementContentMobile = document.querySelectorAll(
  ".show-procurement-content-mobile"
);
var hideProcurementContentMobile = document.querySelectorAll(
  ".hide-procurement-content-mobile"
);
showProcurementContentMobile.forEach((element) => {
  element.addEventListener("click", () => {
    if (lastProcurementOpened != false) {
      lastProcurementOpened.click();
    }
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "block";
    element.style.display = "none";
    element.nextElementSibling.style.display = "block";
    element.parentElement.parentElement.parentElement.style.background =
      "linear-gradient(113.76deg, #3498EF 0%, #0059A7 100%), #DFF0FF";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#fff";
    element.parentElement.previousElementSibling.lastElementChild.style.marginRight =
      "12px";
    element.parentElement.parentElement.parentElement.lastElementChild.style.display =
      "flex";
    element.parentElement.previousElementSibling.lastElementChild.style.fontWeight =
      "500";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#fff";
    element.parentElement.parentElement.style.alignItems = "flex-start";
    element.previousElementSibling.style.display = "none";
    lastProcurementOpened = element.nextElementSibling;
  });
});
hideProcurementContentMobile.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.display = "none";
    element.previousElementSibling.style.display = "block";
    element.previousElementSibling.previousElementSibling.style.color =
      "#1268B3";
    element.previousElementSibling.style.color = "#1268B3";
    element.previousElementSibling.previousElementSibling.style.display =
      "block";
    element.parentElement.parentElement.parentElement.style.background =
      "#DFF0FF";
    element.parentElement.parentElement.parentElement.lastElementChild.style.display =
      "none";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#1268B3";
    element.parentElement.previousElementSibling.lastElementChild.style.fontWeight =
      "700";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#1268B3";
    element.parentElement.parentElement.style.alignItems = "center";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "-webkit-box";
    lastProcurementOpened = false;
  });
});
// Statistics
var LastStatisticsOpened = false;
var showStatisticsContent = document.querySelectorAll(
  ".show-statistics-content"
);
var hideStatisticsContent = document.querySelectorAll(
  ".hide-statistics-content"
);

showStatisticsContent.forEach((element) => {
  element.addEventListener("click", () => {
    if (LastStatisticsOpened != false) {
      LastStatisticsOpened.click();
    }
    element.style.display = "none";
    element.nextElementSibling.style.display = "block";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "block";
    element.nextElementSibling.style.display = "block";
    element.parentElement.parentElement.parentElement.style.background =
      "linear-gradient(113.76deg, #3498EF 0%, #0059A7 100%), #DFF0FF";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#fff";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#fff";
    element.parentElement.parentElement.style.alignItems = "flex-start";
    element.previousElementSibling.style.color = "#fff";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "flex";
    LastStatisticsOpened = element.nextElementSibling;
  });
});
hideStatisticsContent.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.display = "none";
    element.previousElementSibling.style.display = "block";
    element.previousElementSibling.previousElementSibling.style.color =
      "#1268B3";
    element.parentElement.parentElement.parentElement.style.background =
      "#DFF0FF";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#1268B3";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#1268B3";
    element.parentElement.parentElement.style.alignItems = "center";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "-webkit-box";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "none";
    LastStatisticsOpened = false;
  });
});

//  StatisticsMobile
var LastStatisticsMobileOpened = false;
var showStatisticsContentMobile = document.querySelectorAll(
  ".show-statistics-content-mobile"
);
var hideStatisticsContentMobile = document.querySelectorAll(
  ".hide-statistics-content-mobile"
);

showStatisticsContentMobile.forEach((element) => {
  element.addEventListener("click", () => {
    if (LastStatisticsMobileOpened != false) {
      LastStatisticsMobileOpened.click();
    }
    element.style.display = "none";
    element.nextElementSibling.style.display = "block";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "block";
    element.nextElementSibling.style.display = "block";
    element.parentElement.parentElement.parentElement.style.background =
      "linear-gradient(113.76deg, #3498EF 0%, #0059A7 100%), #DFF0FF";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#fff";
    element.parentElement.previousElementSibling.lastElementChild.style.marginRight =
      "12px";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#fff";
    element.parentElement.parentElement.style.alignItems = "flex-start";
    element.previousElementSibling.style.color = "#fff";
    element.previousElementSibling.style.display = "none";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "flex";
    LastStatisticsMobileOpened = element.nextElementSibling;
  });
});
hideStatisticsContentMobile.forEach((element) => {
  element.addEventListener("click", () => {
    element.style.display = "none";
    element.previousElementSibling.style.display = "block";
    element.previousElementSibling.previousElementSibling.style.display =
      "block";
    element.previousElementSibling.previousElementSibling.style.color =
      "#1268B3";
    element.parentElement.parentElement.parentElement.style.background =
      "#DFF0FF";
    element.parentElement.previousElementSibling.lastElementChild.style.color =
      "#1268B3";
    element.parentElement.previousElementSibling.firstElementChild.style.background =
      "#1268B3";
    element.parentElement.parentElement.style.alignItems = "center";
    element.parentElement.previousElementSibling.lastElementChild.style.display =
      "-webkit-box";
    element.parentElement.parentElement.nextElementSibling.style.display =
      "none";
    LastStatisticsMobileOpened = false;
  });
});

// More/Less button
$(".patronage-more-btn").click(function () {
  if ($(".patronage-text").hasClass("patronage-text-hidden")) {
    $(this).text("Daha az");
  } else {
    $(this).text("Daha çox");
  }
  $(".patronage-text").toggleClass("patronage-text-hidden");
});

// Added by Backend Dev : Show more/less
$("[rel=item_link_more]")
  .off("click")
  .on("click", function (e) {
    e.preventDefault();
    $(".patronage-text-more").removeClass("d-none");
    $(".patronage-more-btn").addClass("d-none");
    $(".patronage-less-btn").removeClass("d-none");
  });

$("[rel=item_link_less]")
  .off("click")
  .on("click", function (e) {
    e.preventDefault();
    $(".patronage-text-more").addClass("d-none");
    $(".patronage-more-btn").removeClass("d-none");
    $(".patronage-less-btn").addClass("d-none");
  });

// Show modal in partnership
$(".show-more-modal").on("click", function (e) {
  e.preventDefault();
  var $parent = $(this).closest(".partner-text-box");
  var $modal = $("#partnership-modal");
  $modal.find(".modal-text").html($parent.find(".partner-text").html());
  $modal
    .find(".modal-date")
    .html($parent.find(".partner-text-date-value").html());
  $modal.modal("show");
});

/**
 * Auto scroll to content
 *
 */

if (typeof currentScroll == "undefined") {
  var currentScroll = 0;
}

if (!currentScroll) {
  if ($("[rel=inner_subpages_link].active").length) {
    var scroll = currentScroll;
    if (!scroll) {
      scroll = $("#MAIN_CONTENT").offset().top - 90;
    }
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: scroll,
      },
      0
    );
  }
}

/**
 * Dynamic search
 *
 */

$("[rel=dynamic_search_input]").keypress(function (event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    j_dynamic_search($(this));
  }
});

$("[rel=dynamic_search_submit]")
  .off("click")
  .on("click", function () {
    j_dynamic_search(
      $(this)
        .closest("[rel=dynamic_search_parent]")
        .find("[rel=dynamic_search_input]")
        .eq(0)
    );
  });

function j_dynamic_search($input) {
  var srcKey = jQuery.trim($input.val().toUpperCase());
  var $parent = $input.closest("[rel=dynamic_search_parent]");

  if (srcKey.length) {
    var totalFound = 0;
    $parent.find("[rel=dynamic_search_item]").each(function () {
      var text = $(this).text().toUpperCase();
      if (text.indexOf(srcKey) > -1) {
        $(this).show();
        totalFound++;
      } else {
        $(this).hide();
      }
    });
    if (totalFound) {
      $parent.find("[rel=dynamic_search_notfound]").hide();
    } else {
      $parent.find("[rel=dynamic_search_notfound]").show();
    }
  } else {
    $parent.find("[rel=dynamic_search_item]").show();
    $parent.find("[rel=dynamic_search_notfound]").hide();
  }
}

// About - Add active class to first element
if ($(window).width() > 768) {
  $(".index-about-box-1").addClass("active");
}
