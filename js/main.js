$(document).ready(function () {
  let liOurWorkElements = $(".our-work").find("li");
  liOurWorkElements.click(function () {
    $(this).addClass("active rounded-pill");
    $(this).siblings().removeClass("active rounded-pill");
  });
  mixitup('.our-work .row', {
    animation: {
      duration: 400,
    },
  });
});