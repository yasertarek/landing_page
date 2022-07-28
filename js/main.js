// Class of Specified positioned elements
const fixedPos = [...document.querySelectorAll(".fixed-pos")];
let dimensionsRef = {
  width: 1519,
  "wer-sind": {
    left: 975,
    top: 730,
  },
  the_power_of_design: {
    left: 0,
    top: 1565,
  },
  "was-bieten": {
    left: 25,
    top: 855,
  },
  shop: {
    right: 35,
    top: 1135,
  },
  "services__words-table": {
    left: 95.05,
    top: 1910,
  },
  services__heading: {
    left: 57,
    top: 1985,
  },
  "fixed-btns": {
    bottom: 15,
    right: 15,
  },
  "bg-word": {
    top: 1710,
  },
};
let cursorFixed = true;
/******
 *
 * Main Flow and events
 * ******/
// Listen for scroll on document
document.addEventListener("scroll", () => {
  // Check If window scroll is < 30
  if (window.scrollY < 30) {
    // , then Hide [to top, contact] buttons
    document
      .querySelector(".fixed-btns")
      .classList.remove("fixed-btns--active");
  } else {
    // , else Show [to top, contact] buttons
    document.querySelector(".fixed-btns").classList.add("fixed-btns--active");
  }
  // Elements Animation on Scroll
  // wer-sind
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".wer-sind").offsetTop
  ) {
    document.querySelector(".wer-sind").classList.add("wer-sind--scrolled");
  }
  // was-bieten
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".was-bieten").offsetTop
  ) {
    document.querySelector(".was-bieten").classList.add("was-bieten--scrolled");
  }
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".was-bieten").offsetTop + 75
  ) {
    document
      .querySelector(".was-bieten .paragraph li:nth-child(1)")
      .classList.add("li--scrolled");
  }
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".was-bieten").offsetTop + 150
  ) {
    document
      .querySelector(".was-bieten .paragraph li:nth-child(2)")
      .classList.add("li--scrolled");
  }
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".was-bieten").offsetTop + 225
  ) {
    document
      .querySelector(".was-bieten .paragraph li:nth-child(3)")
      .classList.add("li--scrolled");
  }
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".was-bieten").offsetTop + 300
  ) {
    document
      .querySelector(".was-bieten .paragraph li:nth-child(4)")
      .classList.add("li--scrolled");
  }

  // Shop
  // if (window.scrollY + window.screen.height - 100 >= document.querySelector('.shop__heading').offsetTop) {
  //     document.querySelector('.shop__heading').classList.add('shop__heading--scrolled');
  // }
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".shop").offsetTop + 200
  ) {
    document
      .querySelector(".shop .paragraph")
      .classList.add("paragraph--scrolled");
  }
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".shop").offsetTop + 300
  ) {
    document
      .querySelector(".shop .shop__slider")
      .classList.add("shop__slider--scrolled");
  }
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".shop").offsetTop + 300
  ) {
    document
      .querySelector(".shop .red-badge")
      .classList.add("red-badge--scrolled");
  }

  // table
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".services__words-table").offsetTop + 100
  ) {
    document
      .querySelector(".services__words-table")
      .classList.add("services__words-table--scrolled");
  }

  // services heading
  if (
    window.scrollY + window.screen.height - 100 >=
    document.querySelector(".services__heading").offsetTop + 100
  ) {
    document
      .querySelector(".services__heading")
      .classList.add("services__heading--scrolled");
  }
  /* New Code */
  // services Gips Deko Animation
  [...document.querySelectorAll(".gips-deko")].forEach((elmnt) => {
    if (
      window.scrollY + window.screen.height - 100 >=
      scrollYPos(elmnt.querySelector(".gips-deko__text"))
    ) {
      elmnt
        .querySelector(".gips-deko__text")
        .classList.add("gips-deko__text--scrolled");
    }
    // if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt.querySelector('.gips-deko__swiper'))) {
    //     elmnt.querySelector('.gips-deko__swiper').classList.add('gips-deko__swiper--scrolled');
    // }
  });
  // servicees Visualising Animation
  [...document.querySelectorAll(".visualising")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("visualising--scrolled");
    }
  });
  [...document.querySelectorAll(".visualising__text")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("visualising__text--scrolled");
    }
  });
  [...document.querySelectorAll(".visualising__photo")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("visualising__photo--scrolled");
    }
  });
  // servicees Other3D Animation
  [...document.querySelectorAll(".other_3d")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("other_3d--scrolled");
    }
  });
  [...document.querySelectorAll(".other_3d__photo")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("other_3d__photo--scrolled");
    }
  });
  // Contact Animation
  [...document.querySelectorAll(".contact")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("contact--scrolled");
    }
  });
  [...document.querySelectorAll(".contact__form")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("contact__form--scrolled");
    }
  });
  // Footer Animation
  [...document.querySelectorAll(".footer")].forEach((elmnt) => {
    if (window.scrollY + window.screen.height - 100 >= scrollYPos(elmnt)) {
      elmnt.classList.add("footer--scrolled");
    }
  });
});

function scrollYPos(selector, rectifier = 100) {
  if (typeof selector === "string") {
    return (
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top +
      parseFloat(getComputedStyle(document.body).width) / rectifier
    );
  } else {
    return (
      selector.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top +
      parseFloat(getComputedStyle(document.body).width) / rectifier
    );
  }
}
// Positioning and Resizing elements according to window size
// Loop through positions object
fixedPos.forEach((elmnt) => {
  // Callback the function that Positions and resizes elements according to window size
  handleRatios(elmnt);
  // Listen for resizing window, then callback the function that Positions and resizes elements according to window size
  window.addEventListener("resize", () => {
    handleRatios(elmnt);
  });
});

window.addEventListener("resize", handleRatiosV2);
handleRatiosV2();

function handleRatiosV2() {
  let magnifyingFactor;
  // Condition for Elements Taking different styles in mobile and desktop
  if (parseFloat(getComputedStyle(document.body).width) > 600) {
    magnifyingFactor = parseFloat(
      parseFloat(getComputedStyle(document.body).width) / 1519
    );
    // resize body padding
    document.body.style.paddingTop = `${parseFloat(magnifyingFactor * 2125)}px`;

    // resize fixed-pos elments
    [...document.querySelectorAll(".was-bieten .heading-secondary")].forEach(
      (elmnt) => (elmnt.style.fontSize = "")
    );

    // resize service padding
    [...document.querySelectorAll(".services__service")].forEach(
      (elmnt) =>
        (elmnt.style.padding = `${20 * magnifyingFactor}px ${
          40 * magnifyingFactor
        }px`)
    );
    // Gips-deko Style
    if (document.querySelector(".gips-deko")) {
      // resize gips-deko heading font size
      [...document.querySelectorAll(".gips-deko__heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${105 * magnifyingFactor}px`)
      );
      // resize list items in gips-deko font-size
      [...document.querySelectorAll(".gips-deko__ul li")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${18 * magnifyingFactor}px`)
      );
    }

    // Visualising
    if (document.querySelector(".visualising")) {
      // resize Visualising Heading font size
      [...document.querySelectorAll(".visualising__heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${100 * magnifyingFactor}px`)
      );
      [...document.querySelectorAll(".visualising__heading")].forEach(
        (elmnt) => (elmnt.style.marginBottom = `${45 * magnifyingFactor}px`)
      );
      // resize Visualising Paragraph font size
      [...document.querySelectorAll(".visualising__text .paragraph")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${14 * magnifyingFactor}px`)
      );
    }

    // Other 3D Services
    if (document.querySelector(".other_3d")) {
      [...document.querySelectorAll(".other_3d__heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${100 * magnifyingFactor}px`)
      );
      [...document.querySelectorAll(".other_3d__sub-heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${26 * magnifyingFactor}px`)
      );
    }
  } else {
    // document.querySelector('.gips-deko__heading').style.fontSize = ''
    magnifyingFactor = parseFloat(
      parseFloat(getComputedStyle(document.body).width) / 390
    );
    // resize fixed-pos elements
    [...document.querySelectorAll(".was-bieten .heading-secondary")].forEach(
      (elmnt) => (elmnt.style.fontSize = `${40 * magnifyingFactor}px`)
    );
    // resize body padding
    document.body.style.paddingTop = `${parseFloat(magnifyingFactor * 535)}px`;
    // resize service padding
    [...document.querySelectorAll(".services__service")].forEach(
      (elmnt) => (elmnt.style.padding = `${20 * magnifyingFactor}px`)
    );
    // Gips-deko Style
    if (document.querySelector(".gips-deko")) {
      // resize gips-deko heading font size
      [...document.querySelectorAll(".gips-deko__heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${91 * magnifyingFactor}px`)
      );
      // resize list items in gips-deko font-size
      [...document.querySelectorAll(".gips-deko__ul li")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${18 * magnifyingFactor}px`)
      );
    }

    // Visualising
    if (document.querySelector(".visualising")) {
      // resize Visualising Heading font size
      [...document.querySelectorAll(".visualising__heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${40 * magnifyingFactor}px`)
      );
      // resize Visualising Paragraph font size
      [...document.querySelectorAll(".visualising__text .paragraph")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${14 * magnifyingFactor}px`)
      );
    }

    // Other 3D Services
    if (document.querySelector(".other_3d")) {
      [...document.querySelectorAll(".other_3d__heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${36 * magnifyingFactor}px`)
      );
      [...document.querySelectorAll(".other_3d__sub-heading")].forEach(
        (elmnt) => (elmnt.style.fontSize = `${12 * magnifyingFactor}px`)
      );
    }
  }
  // Elements taking same style in desktop and mobile

  // resize service margin
  [...document.querySelectorAll(".services__service")].forEach(
    (elmnt) => (elmnt.style.marginBottom = `${50 * magnifyingFactor}px`)
  );
  // resize services heading font-size, margin-bottom
  // [...document.querySelectorAll('.services__heading')].forEach(elmnt => elmnt.style.fontSize = `${69 * magnifyingFactor}px`);
  [...document.querySelectorAll(".services__heading")].forEach(
    (elmnt) => (elmnt.style.marginBottom = `${51 * magnifyingFactor}px`)
  );
  // Gips-deko Style
  if (document.querySelector(".gips-deko")) {
    // resize gips-deko heading marginBottom
    [...document.querySelectorAll(".gips-deko__heading")].forEach(
      (elmnt) => (elmnt.style.marginBottom = `${25 * magnifyingFactor}px`)
    );
    // resize gips-deko sub heading font size
    [...document.querySelectorAll(".gips-deko__sub-heading")].forEach(
      (elmnt) => (elmnt.style.fontSize = `${17 * magnifyingFactor}px`)
    );
    // resize gips-deko sub heading Yellow font size, margin-bottom, letter-spacing
    [...document.querySelectorAll(".gips-deko__sub-heading--yellow")].forEach(
      (elmnt) => (elmnt.style.fontSize = `${21 * magnifyingFactor}px`)
    );
    [...document.querySelectorAll(".gips-deko__sub-heading")].forEach(
      (elmnt) => (elmnt.style.marginBottom = `${10 * magnifyingFactor}px`)
    );
    [...document.querySelectorAll(".gips-deko__sub-heading")].forEach(
      (elmnt) => (elmnt.style.letterSpacing = `${5 * magnifyingFactor}px`)
    );
    // resize list in gips-deko marginBottom
    [...document.querySelectorAll(".gips-deko__ul")].forEach(
      (elmnt) => (elmnt.style.marginBottom = `${20 * magnifyingFactor}px`)
    );
    // resize list items in gips-deko Padding
    [...document.querySelectorAll(".gips-deko__ul li")].forEach(
      (elmnt, elmntI) => {
        if (elmntI === 0) {
          elmnt.style.padding = `${3 * magnifyingFactor}px ${
            15 * magnifyingFactor
          }px ${3 * magnifyingFactor}px ${5 * magnifyingFactor}px`;
        } else {
          elmnt.style.padding = `${3 * magnifyingFactor}px ${
            15 * magnifyingFactor
          }px`;
        }
      }
    );
    // resize paragraph in gips-deko Font-size
    [...document.querySelectorAll(".gips-deko__text .paragraph")].forEach(
      (elmnt) => (elmnt.style.fontSize = `${14 * magnifyingFactor}px`)
    );
    // resize photo in gips-deko max-width
    [...document.querySelectorAll(".gips-deko__photo")].forEach(
      (elmnt) => (elmnt.style.maxWidth = `${421 * magnifyingFactor}px`)
    );
  }

  if (document.querySelector(".visualising")) {
    // resize Visualising Text Padding
    [...document.querySelectorAll(".visualising__text")].forEach(
      (elmnt) =>
        (elmnt.style.padding = `${40 * magnifyingFactor}px ${
          35 * magnifyingFactor
        }px`)
    );
    // resize Visualising Red badge font size
    [...document.querySelectorAll(".visualising__text .red-badge")].forEach(
      (elmnt) => (elmnt.style.fontSize = `${19 * magnifyingFactor}px`)
    );
    // resize Visualising Red badge Padding
    [...document.querySelectorAll(".visualising__text .red-badge")].forEach(
      (elmnt) => (elmnt.style.padding = `0 ${40 * magnifyingFactor}px`)
    );
  }
}

// Handle menu
[...document.querySelectorAll(".header__nav ul li a")].forEach((elmnt) => {
  elmnt.addEventListener("click", () => {
    document.querySelector("header.header").classList.remove("header--active");
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    document.body.style.height = "";
  });
});
// Show Menu on click
document.querySelector(".header__button").addEventListener("click", () => {
  document.querySelector("header.header").classList.toggle("header--active");
  if (
    document.querySelector("header.header").classList.contains("header--active")
  ) {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.documentElement.style.overflow = "hidden";
    // [...document.querySelectorAll('section.about *')].forEach(elmnt => elmnt.style.zIndex = '-1');
  } else {
    document.body.style.overflow = "";
    document.body.style.height = "";
    document.documentElement.style.overflow = "";
  }
});
// Contact form
// show border on focusin
[...document.querySelectorAll(".contact__text")].forEach((elmnt) => {
  elmnt.addEventListener("focusin", () => {
    if (!elmnt.parentElement.classList.contains("form-row--focus")) {
      elmnt.parentElement.classList.add("form-row--focus");
    }
  });
});
// hide border on focusout
[...document.querySelectorAll(".contact__text")].forEach((elmnt) => {
  elmnt.addEventListener("focusout", () => {
    if (elmnt.parentElement.classList.contains("form-row--focus")) {
      elmnt.parentElement.classList.remove("form-row--focus");
    }
  });
});
// move label on input
[...document.querySelectorAll(".contact__text")].forEach((elmnt) => {
  elmnt.addEventListener("input", () => {
    if (elmnt.value !== "") {
      elmnt.parentElement.classList.add("form-row--active");
    } else {
      elmnt.parentElement.classList.remove("form-row--active");
    }
  });
});
// Focus on input when click on icon
[...document.querySelectorAll(".contact__icon")].forEach((elmnt) => {
  elmnt.addEventListener("click", () =>
    elmnt.parentElement.querySelector(".contact__text").focus()
  );
});
/*
****** 
Handle Visualising Gallery
******
*/
// Show Corresponding Gallery when click on eye icon
[...document.querySelectorAll(".overlay_hover")].forEach((elmnt) => {
  elmnt.addEventListener("click", (e) => {
    // Get Gallery
    let gallery = document.getElementById(
      e.currentTarget.parentElement.getAttribute("data-gallery")
    );
    // Exit if element is not deifned in any gallery
    // if (e.target === null || e.target.parentElement.parentElement.getAttribute('data-gallery') === null || gallery === null) return
    // Show Selected Gallery
    gallery.classList.add("gallery--active");
    // Slide to clicked element [Exception]
  });
});

// Hide Visualising Gallery
[...document.querySelectorAll(".visualising__close")].forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.remove(
      "visualising_gallery--active"
    );
  });
});

// Handle Swiper Slide Gallery

// [...document.querySelectorAll('.swiper-slide__overlay')].forEach((slide, SI) => {
//     slide.addEventListener('click', (evnt) => {
//         let gallery = document.getElementById(evnt.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('data-gallery'))
//         console.log(gallery)
//     });
// });

document.addEventListener("click", (e) => {
  if (e.target.closest(".swiper-slide")) {
    let gallery = document.getElementById(
      e.target
        .closest(".swiper-slide")
        .parentElement.parentElement.parentElement.getAttribute("data-gallery")
    );
    if (!gallery) return;
    gallery.classList.add("gallery--active");
    // Prevent Scrolling
    document.body.style = `overflowY: hidden`;
  }
  if (e.target.closest(".gallery__close")) {
    e.target
      .closest(".gallery__close")
      .parentElement.parentElement.classList.remove("gallery--active");
  }
});

/*
 ******
 ******
 */

// Custom Scrollbar
const scrollbar = document.querySelector(".scrollbar");
const scrollbarThumb = document.querySelector(".scrollbar__thumb");
// let contentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
let contentHeight = document.body.offsetHeight;
let viewportHeight = window.innerHeight;
let viewableRatio = viewportHeight / contentHeight;
let scrollbarThumbSpace = viewableRatio * viewportHeight;

let scrollJump = window.scrollY * viewableRatio;

let scrollTrackSpace = contentHeight - viewportHeight;
scrollbar.style.height = viewportHeight + "px";
scrollbarThumb.style.height = viewableRatio * viewportHeight + "px";
window.addEventListener("resize", () => {
  viewportHeight = window.innerHeight;
  viewableRatio = viewportHeight / contentHeight;
  scrollTrackSpace = contentHeight - viewportHeight;
  scrollbarThumbSpace = viewableRatio * viewportHeight;

  scrollbar.style.height = viewportHeight + "px";
  scrollbarThumb.style.height = viewableRatio * viewportHeight + "px";
});
document.addEventListener("scroll", () => {
  // contentHeight = document.body.offsetHeight;
  scrollbarThumb.style.opacity = 1;
  setTimeout(() => {
    scrollbarThumb.style.opacity = "";
  }, 1000);
  scrollJump = window.scrollY * viewableRatio;
  scrollbarThumb.style.top = scrollJump + "px";
});
// hidescrollbar if media is touch
if (window.matchMedia("(pointer: coarse)").matches) {
  // touchscreen
  document.querySelector(".scrollbar").style.display = "none";
} else {
  document.querySelector(".scrollbar").style.display = "";
}
/******
 *
 * Main Functions
 * ******/

// Make Specified positioned elements in its place
function handleRatios(elmnt) {
  let magnifyingFactor;
  // check if screen width is less than 600, then don't scale according to ratio and reset style
  if (parseFloat(getComputedStyle(document.body).width) <= 600) {
    magnifyingFactor = parseFloat(
      parseFloat(getComputedStyle(document.body).width) / 390
    );
    // reset and clear style
    elmnt.removeAttribute("style");
    [...elmnt.querySelectorAll("*")].forEach((elmnt) =>
      elmnt.removeAttribute("style")
    );
    // Prevent red-badge in was bieten from wrapping
    document.querySelector(
      ".wer-sind__content .heading-secondary"
    ).style.fontSize = `${44 * magnifyingFactor}px`;
    document.querySelector(".wer-sind__sub-heading").style.fontSize = `${
      18 * magnifyingFactor
    }px`;
    document.querySelector(".wer-sind__text").style.fontSize = `${
      14 * magnifyingFactor
    }px`;
    return;
  } else {
    elmnt.removeAttribute("style");
    [...elmnt.querySelectorAll("*")].forEach((elmnt) =>
      elmnt.removeAttribute("style")
    );
  }
  magnifyingFactor =
    parseFloat(getComputedStyle(document.body).width) / dimensionsRef.width;
  let x;
  let y;
  if (
    typeof dimensionsRef[elmnt.getAttribute("data-pos")].left !== "undefined"
  ) {
    x =
      (parseFloat(getComputedStyle(document.body).width) *
        dimensionsRef[elmnt.getAttribute("data-pos")].left) /
        dimensionsRef.width +
      "px";
    elmnt.style.left = x;
  } else if (
    typeof dimensionsRef[elmnt.getAttribute("data-pos")].right !== "undefined"
  ) {
    x =
      (parseFloat(getComputedStyle(document.body).width) *
        dimensionsRef[elmnt.getAttribute("data-pos")].right) /
        dimensionsRef.width +
      "px";
    elmnt.style.right = x;
  } else {
    // console.log('Error in element', elmnt);
  }
  if (
    typeof dimensionsRef[elmnt.getAttribute("data-pos")].top !== "undefined"
  ) {
    y =
      magnifyingFactor * dimensionsRef[elmnt.getAttribute("data-pos")].top +
      "px";
    elmnt.style.top = y;
  } else if (
    typeof dimensionsRef[elmnt.getAttribute("data-pos")].bottom !== "undefined"
  ) {
    y =
      magnifyingFactor * dimensionsRef[elmnt.getAttribute("data-pos")].bottom +
      "px";
    elmnt.style.bottom = y;
  } else {
    // console.log('Error in element', elmnt)
  }
  // Resize element according to window size
  elmnt.style.transform = `scale(${magnifyingFactor})`;
}
/* ### Slider Functions ### */

dragElement(scrollbarThumb, document);

function dragElement(elmnt, cont, trigger = elmnt) {
  let newY = 0,
    oldY = 0,
    y;
  if (!trigger) {
    trigger = elmnt;
  }
  trigger.addEventListener("mousedown", dragMouseDown);
  trigger.addEventListener("touchstart", dragMouseDown);

  function dragMouseDown(e) {
    e = e || window.event;
    // e.preventDefault();
    e.stopPropagation();
    scrollbarThumb.style.opacity = 1;
    setTimeout(() => {
      scrollbarThumb.style.opacity = "";
    }, 1000);
    // Get touch or click position
    if (
      e.type == "touchstart" ||
      e.type == "touchmove" ||
      e.type == "touchend" ||
      e.type == "touchcancel"
    ) {
      e.preventDefault();
      let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
      let touch = evt.touches[0] || evt.changedTouches[0];
      y = touch.pageY;
    } else if (
      e.type == "mousedown" ||
      e.type == "mouseup" ||
      e.type == "mousemove" ||
      e.type == "mouseover" ||
      e.type == "mouseout" ||
      e.type == "mouseenter" ||
      e.type == "mouseleave"
    ) {
      y = e.clientY;
    }
    // get the mouse cursor or touch position
    oldY = y;
    cont.addEventListener("mouseup", closeDragElement);
    cont.addEventListener("touchend", closeDragElement);
    // call a function whenever the cursor moves:
    cont.addEventListener("mousemove", elementDrag);
    cont.addEventListener("touchmove", elementDrag);
  }

  function elementDrag(e) {
    e = e || window.event;
    // e.preventDefault();
    e.stopPropagation();
    // Get touch or click event
    if (
      e.type == "touchstart" ||
      e.type == "touchmove" ||
      e.type == "touchend" ||
      e.type == "touchcancel"
    ) {
      e.preventDefault();
      let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
      let touch = evt.touches[0] || evt.changedTouches[0];
      y = touch.pageY;
    } else if (
      e.type == "mousedown" ||
      e.type == "mouseup" ||
      e.type == "mousemove" ||
      e.type == "mouseover" ||
      e.type == "mouseout" ||
      e.type == "mouseenter" ||
      e.type == "mouseleave"
    ) {
      y = e.clientY;
    }
    // check if element reached its endpoints
    if (elmnt.offsetTop < 0) {
      elmnt.style.top = 0 + "px";
    } else if (
      elmnt.offsetTop >
      parseFloat(getComputedStyle(scrollbar).height) -
        parseFloat(getComputedStyle(elmnt).height)
    ) {
      console.log(`elmnt.offsetTop: ${elmnt.offsetTop}`);
      elmnt.style.top =
        parseFloat(getComputedStyle(scrollbar).height) -
        parseFloat(getComputedStyle(elmnt).height) -
        2 +
        "px";
    } else {
      // calculate the new cursor or touch position:
      // console.log(elmnt.offsetTop);
      newY = oldY - y;
      // store new positions as old positions
      oldY = y;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - newY + "px";
      window.scrollTo(0, parseFloat(elmnt.offsetTop) / viewableRatio);
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    cont.removeEventListener("mouseup", closeDragElement);
    cont.removeEventListener("mousemove", elementDrag);
    cont.removeEventListener("touchend", closeDragElement);
    cont.removeEventListener("touchmove", elementDrag);
  }
}
