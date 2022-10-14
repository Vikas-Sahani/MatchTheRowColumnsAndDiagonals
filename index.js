const createRule = function (ruleContent) {
  const ul = document.querySelector(".rules > ul");
  const li = document.createElement("li");
  li.textContent = ruleContent;
  ul.appendChild(li);
};

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
let player2Colr = "";
let isPlyr1Trn = false;
let isPlyr2Trn = false;

const alternativeArr = [
  alternativeTopVertical,
  alternativeTopRight_vertical,
  alternativeRightHorizontal,
  alternativeBottomRight_vertical,
  alternativeBottomVertical,
  alternativeBottomLeft_vertical,
  alternativeLeftHorizontal,
  alternativeTopLeft_vertical,
  alternativeCenterVertical,
];

const isWin = [
  [topLeft_vertical, leftHorizontal, bottomLeft_vertical],
  [topVertical, centerVertical, bottomVertical],
  [topRight_vertical, rightHorizontal, bottomRight_vertical],
  [topLeft_vertical, topVertical, topRight_vertical],
  [leftHorizontal, centerVertical, rightHorizontal],
  [bottomLeft_vertical, bottomVertical, bottomRight_vertical],
  [topLeft_vertical, centerVertical, bottomRight_vertical],
  [topRight_vertical, centerVertical, bottomLeft_vertical],
];

const winFunc = function () {
  for (let i = 0; i < isWin.length; i++) {
    if (
      isWin[i].every((el) => {
        console.log(el.id + " " + i);
        console.log(el.style.backgroundColor);

        return el.style.backgroundColor === player1Colr;
      })
    ) {
      console.log(i);
      window.alert("player1 wins");
    } else if (
      isWin[i].every((el) => el.style.backgroundColor === player2Colr)
    ) {
      window.alert("player2 wins");
    }
  }
};

// this array will tell us that which one is selected or not
const arr = [
  { topVertical: false },
  { topRight_vertical: false },
  { rightHorizontal: false },
  { bottomRight_vertical: false },
  { bottomVertical: false },
  { bottomLeft_vertical: false },
  { leftHorizontal: false },
  { topLeft_vertical: false },
  { centerVertical: false },
];

// selecting color for player1 and player2 and removing dynamic color effect
const P1_P2Colr = function (el, targetedEl) {
  if (!isPlyr1Trn || !isPlyr2Trn) {
    if (player1Colr == "") {
      player1Colr = window.getComputedStyle(el).backgroundColor;
    } else {
      player2Colr = window.getComputedStyle(el).backgroundColor;
      // clearTimeout(clrSideBgColr)        //how to add multiple line in ternary operator
      // clearTimeout(clrCntrBgColr)
    }
  }

  if (!isPlyr1Trn) {
    targetedEl.style.backgroundColor = player1Colr;
  } else {
    targetedEl.style.backgroundColor = player2Colr;
    if (cnt === 1) {
      clearTimeout(clrSideBgColr);
      clearTimeout(clrCntrBgColr);
    }
  }
};

// Center Dynamic Background Color
const clrCntrBgColr = setInterval(function () {
  alternativeCenterVertical.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
}, 300);
// end of Center Dynamic Background Color

// selecting color for P1 & P2 from center
alternativeCenterVertical.addEventListener("click", function () {
  if (arr["centerVertical"]) {
    return;
  }
  clearInterval(clrCntrBgColr);
  if (player1Colr === "" && player2Colr === "") {
    player1Colr = window.getComputedStyle(
      alternativeCenterVertical
    ).backgroundColor;
    alternativeCenterVertical.children[0].style.backgroundColor = player1Colr;
  } else {
    P1_P2Colr(this, this.children[0]);
  }
  cnt++;
  alternativeCenterVertical.style.backgroundColor = "white";
  arr["centerVertical"] = true;
});

// Side Dynamic Background Color
const sideBgColrFun = function () {
  const dynamicBgColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(
    Math.random() * 255
  )} ${Math.floor(Math.random() * 255)})`;

  for (let i = 0; i < alternativeArr.length; i++) {
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

// onMouseEntering the circle, show arrows and circle's color for which is it going to fill
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

    cnt % 2 === 0
      ? (targetedEl.style.backgroundColor = player1Colr)
      : (targetedEl.style.backgroundColor = player2Colr);
  });
});

// what will happen onClicking the circles(notifying that circle is selected or not and showing msg) accept ceter circle
alternativeArr.forEach((el, idx) => {
  if (idx === 8) {
    return; //we don't want to handle center in this loop
  }
  el.addEventListener("click", function () {
    const targetedEl = this.children[0];
    if (arr[targetedEl.id] || cnt > 5) {
      return; //circle is selected or cnt>5 then return
    }
    targetedEl.classList.remove("Hide");
    targetedEl.classList.add("Visible");
    arr[targetedEl.id] = true;

    P1_P2Colr(el, targetedEl);
    cnt++;
    if (player1Colr !== "" && player2Colr !== "" && cnt === 2) {
      window.alert(
        "After selecting the color for player1 and player2 you have to fill atleast 6 circles of your choice"
      );
      createRule(
        "After selecting the color for player1 and player2 you have to fill atleast 6 circles of your choice"
      );
    }
    if (cnt === 6) {
      window.alert(
        "Now finally let's play the game by clicking the arrows and move the color from 1 circle to other and try to match the colors in same row, column or diaganlly"
      );
      createRule(
        "Now finally let's play the game by clicking the arrows and move the color from 1 circle to other and try to match the colors in same row, column or diaganlly"
      );
    }
  });
});

// onMouseLeaving the circle, check if {circle is not selected then hide} else if {circle is selected then onMouseLeaving hide the arrows}
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
        setTimeout(() => {
          targetedEl.children[i].classList.remove("Visible");
          targetedEl.children[i].classList.add("Hide");
        }, 3000);
      }
    }
  });
});

// onCLicking arrow, moving currEL to targedEL and checking for winning player
alternativeArr.forEach((el) => {
  let currEl = el.children[0];
  let n = currEl.children.length;
  for (let i = 0; i < n; i++) {
    currEl.children[i].addEventListener("click", function (e) {
      if (cnt <= 5) {
        return; // untli all 6 circles are not filled, don't do this functionallity(moving currEL to targedEL)
      }

      const targetedEl = document.getElementById(
        e.target.getAttribute("data-id")
      );
      targetedEl.style.backgroundColor =
        window.getComputedStyle(currEl).backgroundColor;
      targetedEl.classList.remove("Hide");
      targetedEl.classList.add("Visible");
      arr[targetedEl.id] = true;
      let m = targetedEl.children.length;
      for (let j = 0; j < m; j++) {
        targetedEl.children[j].classList.remove("Visible");
        targetedEl.children[j].classList.add("Hide");
      }

      currEl.style.backgroundColor = "";
      currEl.classList.remove("Visible");
      currEl.classList.add("Hide");
      arr[currEl.id] = false;

      setTimeout(winFunc, 100);
    });
  }
});
