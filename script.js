
function scroll(){
const scroll = new LocomotiveScroll({
    
    el: document.querySelector('#main'),
       smooth: true
})
};

function loader(){
var loader = document.getElementById("loader");
setTimeout(function(){
    loader.style.top = "-100%"
},3800)
};


function imageAnimation(){
var container = document.querySelector("#container");
var fixed = document.querySelector("#fixed-image");
container.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
});
container.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
});

var items = document.querySelectorAll(".item")
items.forEach(function(item){
    item.addEventListener("mouseenter",function(){
        var image = item.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })

})
};

function swiper(){
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: ,
    spaceBetween: 100,
  });
};


function menuAnimation(){
var menu = document.querySelector("#menu");
var  fullScr = document.querySelector("#full-scr");
var navImg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click" ,function(){
    if(flag == 0){
        fullScr.style.top = 0;
        navImg.style.opacity = 0;
        flag = 1
    } else {
        fullScr.style.top = "-100%";
        navImg.style.opacity = 1;
        flag = 0; 
    }
});
};



scroll();
loader();
imageAnimation();
swiper();
menuAnimation();