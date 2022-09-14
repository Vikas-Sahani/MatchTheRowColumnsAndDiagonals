const topVertical = document.querySelector("#topVertical");
const alternativeTopVertical = document.querySelector(
  "#alternativeTopVertical"
);
const centerVertical = document.querySelector("#centerVertical");
const alternativeCenterVertical = document.querySelector(
  "#alternativeCenterVertical"
);
const bottomVertical = document.querySelector("#bottomVertical");
const alternativeBottomVertical = document.querySelector(
  "#alternativeBottomVertical"
);
const leftHorizontal = document.querySelector("#leftHorizontal");
const alternativeLeftHorizontal = document.querySelector(
  "#alternativeLeftHorizontal"
);
const rightHorizontal = document.querySelector("#rightHorizontal");
const alternativeRightHorizontal = document.querySelector(
  "#alternativeRightHorizontal"
);
const topLeft_vertical = document.querySelector("#topLeft_vertical");
const alternativeTopLeft_vertical = document.querySelector(
  "#alternativeTopLeft_vertical"
);
const bottomLeft_vertical = document.querySelector("#bottomLeft_vertical");
const alternativeBottomLeft_vertical = document.querySelector(
  "#alternativeBottomLeft_vertical"
);
const topRight_vertical = document.querySelector("#topRight_vertical");
const alternativeTopRight_vertical = document.querySelector(
  "#alternativeTopRight_vertical"
);
const bottomRight_vertical = document.querySelector("#bottomRight_vertical");
const alternativeBottomRight_vertical = document.querySelector(
  "#alternativeBottomRight_vertical"
);
let cnt = 0;
let player1Colr = "";

const alternativeArr = [
  alternativeTopVertical,
  alternativeBottomRight_vertical,
  alternativeRightHorizontal,
  alternativeBottomLeft_vertical,
  alternativeBottomVertical,
  alternativeTopRight_vertical,
  alternativeLeftHorizontal,
  alternativeTopLeft_vertical,
  alternativeCenterVertical,
];

const arr = [
  { topVertical: false },
  { bottomRight_vertical: false },
  { rightHorizontal: false },
  { bottomLeft_vertical: false },
  { bottomVertical: false },
  { topRight_vertical: false },
  { leftHorizontal: false },
  { topLeft_vertical: false },
  { centerVertical: false },
];

// Center Dynamic Background Color
const clrCntrBgColr = setInterval(function (e) {
  alternativeCenterVertical.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
}, 100);
// end of Center Dynamic Background Color

alternativeCenterVertical.addEventListener("click", function (e) {
  if (arr["centerVertical"]) {
    return;
  }
  clearInterval(clrCntrBgColr);
  alternativeCenterVertical.style.backgroundColor = "white";
  const bgColor = window.getComputedStyle(e.target).backgroundColor;
  alternativeCenterVertical.children[0].style.backgroundColor = bgColor;
  arr["centerVertical"] = true;
});

// Side Dynamic Background Color
const sideBgColrFun = function () {
  const dynamicBgColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(
    Math.random() * 255
  )} ${Math.floor(Math.random() * 255)})`;
  player1Colr = dynamicBgColor;
  for (let i = 0; i < alternativeArr.length - 1; i++) {
    let clrId = setTimeout(function (e) {
      alternativeArr[i].style.backgroundColor = dynamicBgColor;
    }, i * 500);

    setTimeout(function (e) {
      clearTimeout(clrId);
      alternativeArr[i].style.backgroundColor = "white";
    }, i * 500 + 500);
  }
};
sideBgColrFun();
const clrSideBgColr = setInterval(sideBgColrFun, 4000);
// end of Side Dynamic Background Color

alternativeArr.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    const targetedEl = this.children[0];
    const n = targetedEl.children.length;
    for (let i = 0; i < n; i++) {
      targetedEl.children[i].classList.remove("Hide");
      targetedEl.children[i].classList.add("Visible");
    }
    if (arr[targetedEl.id]) {
      return;
    }
    targetedEl.classList.remove("Hide");
    targetedEl.classList.add("Visible");
    targetedEl.style.backgroundColor = player1Colr;
  });
});

// what will happen onClicking the circle
// let isClicked = false;
alternativeArr.forEach((el) => {
  el.addEventListener("click", function () {
    const targetedEl = this.children[0];
    if (arr[targetedEl.id]) {
      return;
    }
    targetedEl.classList.remove("Hide");
    targetedEl.classList.add("Visible");
    targetedEl.style.backgroundColor = player1Colr;
    arr[targetedEl.id] = true;
    // let n = targetedEl.children.length;
    // for (let i = 0; i < n; i++) {
    //   console.log(targetedEl);
    //   targetedEl.children[i].classList.add("Hide");
    //   targetedEl.children[i].classList.remove("Visible");
    // }
  });
});

//
alternativeArr.forEach((el) => {
  el.addEventListener("mouseleave", function (e) {
    const targetedEl = this.children[0];
    if (!arr[targetedEl.id]) {
      targetedEl.classList.remove("Visible");
      targetedEl.classList.add("Hide");
    } else if (arr[targetedEl.id]) {
      // remove the arrows
      let n = targetedEl.children.length;
      for (let i = 0; i < n; i++) {
        // setTimeout(() => {
        targetedEl.children[i].classList.remove("Visible");
        targetedEl.children[i].classList.add("Hide");
        // }, 5000);
      }
    }
    let n = targetedEl.children.length;

    const bgColor = window.getComputedStyle(targetedEl).backgroundColor;
    console.log(bgColor);
    // for (let i = 0; i < n; i++) {
    //   setTimeout(() => {
    //     e.target.children[i].addEventListener("click", function (ev) {
    //       const targetedEl = document.getElementById(
    //         ev.target.getAttribute("data-id")
    //       );
    //       if (targetedEl.classList.contains("Hide")) {
    //         targetedEl.classList.remove("Hide");
    //         targetedEl.classList.add("Visible");
    //         targetedEl.style.backgroundColor = bgColor;
    //         e.target.classList.add("Hide");
    //         console.log("if");
    //       } else {
    //         console.log("else");
    //         return;
    //       }
    //     });
    //     e.target.children[i].classList.add("Hide");
    //   }, 1000);
    // }

    // let n = targetedEl.children.length;
    // for (let i = 0; i < n; i++) {
    //   setTimeout(() => {
    //     targetedEl.children[i].classList.remove("Visible");
    //     targetedEl.children[i].classList.remove("Hide");
    //     console.log(targetedEl);
    //   }, 1000);
    // }
  });
});
