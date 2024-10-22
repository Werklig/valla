$(".home_cms_wrap").each(function (index) {
  let childTriggers = $(this).find(".home_cms_section");
  let childImgs = $(this).find(".home_cms_img_item");
  let childNav = $(this).find(".home_cms_nav_item");
  let childBtn = $(this).find(".home_cms_btn_item");
  let childTargetWrap = $(this).find(".home_cms_img_wrap");
  // switch active class
  function makeItemActive(index) {
    childTriggers.removeClass("is-active");
    childImgs.removeClass("is-active");
    childNav.removeClass("is-active");
    childBtn.removeClass("is-active");
    childTriggers.eq(index).addClass("is-active");
    childImgs.eq(index).addClass("is-active");
    childNav.eq(index).addClass("is-active");
    childBtn.eq(index).addClass("is-active");
    childTargetWrap.removeAttr("data-shape");
    childTargetWrap.attr("data-shape", index);
  }
  makeItemActive(0);
  // create triggers
  childTriggers.each(function (index) {
    ScrollTrigger.create({
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onToggle: (isActive) => {
        if (isActive) {
          makeItemActive(index);
        }
      },
    });
  });
});
