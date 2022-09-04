let topVertical = document.querySelector("#topVertical");
let bottomVertical = document.querySelector("#bottomVertical");
let centerVertical = document.querySelector("#centerVertical")
let spans = document.querySelector("span");
let vertical = document.querySelector("#vertical");


topVertical.addEventListener("mouseenter",function(e){
    let n = e.target.children.length
    for(let i =0; i<n; i++){
        e.target.children[i].classList.add("Visible");
    }
})

topVertical.addEventListener("mouseleave",function(e){
    let n = e.target.children.length
    for(let i =0; i<n; i++){
        e.target.children[i].classList.add("Hide");
    }

    for(let i =0; i<n; i++){
        e.target.children[i].classList.remove("Visible");
        e.target.children[i].classList.remove("Hide");
    }
})

bottomVertical.addEventListener("click",function(e){
    console.log(e.target)
})

centerVertical.addEventListener("click", function(e){
    console.log(e.target)
})

// centerVertical.addEventListener("click",function(e){
    // console.log(centerVertical)
//     e.target.style.backgroundColor="red"
// })