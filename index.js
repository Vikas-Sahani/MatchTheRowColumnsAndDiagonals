let vertical = document.querySelector("#vertical");
let topVertical = document.querySelector("#topVertical");
let centerVertical = document.querySelector("#centerVertical");
let bottomVertical = document.querySelector("#bottomVertical");
let leftHorizontal = document.querySelector("#leftHorizontal");
let rightHorizontal = document.querySelector("#rightHorizontal");

const mouseEnterFun = function (e) {
  let n = e.target.children.length;
  for (let i = 0; i < n; i++) {
    e.target.children[i].classList.add("Visible");
  }
};

const mouseLeaveFun = function (e) {
  let n = e.target.children.length;
  let bgColor = window.getComputedStyle(e.target).backgroundColor;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      e.target.children[i].addEventListener("click", function (ev) {
        if (!ev.target.parent.classList.contains("Hide")) {
          console.log(ev.target);
          e.target.classList.add("Hide");
        }
        document.getElementById(
          ev.target.getAttribute("data-id")
        ).style.backgroundColor = bgColor;
        // centerVertical.style.backgroundColor = bgColor
      });
      e.target.children[i].classList.add("Hide");
    }, 1000);
  }

  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      e.target.children[i].classList.remove("Visible");
      e.target.children[i].classList.remove("Hide");
    }, 1000);
  }
};

topVertical.addEventListener("mouseenter", mouseEnterFun);
topVertical.addEventListener("mouseleave", mouseLeaveFun);

centerVertical.addEventListener("mouseenter", mouseEnterFun);
centerVertical.addEventListener("mouseleave", mouseLeaveFun);

bottomVertical.addEventListener("mouseenter", mouseEnterFun);
bottomVertical.addEventListener("mouseleave", mouseLeaveFun);

leftHorizontal.addEventListener("mouseenter", mouseEnterFun);
leftHorizontal.addEventListener("mouseleave", mouseLeaveFun);

rightHorizontal.addEventListener("mouseenter", mouseEnterFun);
rightHorizontal.addEventListener("mouseleave", mouseLeaveFun);
