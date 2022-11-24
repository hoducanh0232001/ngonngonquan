$(document).ready(function() {
    $('#previous').on('click', function(){
    // Change to the previous image
    $('#im_' + currentImage).stop().fadeOut(1);
    decreaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
    });
    $('#next').on('click', function(){
    // Change to the next image
    $('#im_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
    });
    
    var currentImage = 1;
    var totalImages = 4;
    
    function increaseImage() {
   
    ++currentImage;
    if(currentImage > totalImages) {
    currentImage = 1;
    }
    }
    function decreaseImage() {
    
    --currentImage;
    if(currentImage < 1) {
    currentImage = totalImages;
    }
    }
    });
    window.setInterval(function() {
        $('#previous').click();
        }, 3000);


     //slider2 
     var couter=1;
     setInterval(function(){
         document.getElementById('radio'+ couter).checked=true;
         couter++;
         if(couter>10){
             couter=1;
         }
     },5000)   
     
//gsap
gsap.from(".contec", {scrollTrigger: ".contec",duration: 1, opacity: 0,delay:0.5,scale: 0.5,ease: "since.out"});
$(".contecboss").each(function (index, element){
    var tl = new TimelineLite({paused:true});
    tl.to(element, 0.2, {display:"block"})
    .from(element,0.2,{opacity:0})
   
    
    element.animation = tl;
  })
  
  $(".contecboss").mouseenter(function(){
    this.animation.play();
  })
  
  $(".contecboss").mouseleave(function(){
    this.animation.reverse();
  })

  gsap.from(".monjs", {
    scrollTrigger: ".monan",
    duration: 2,
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.3,
    ease: "since", 
    force3D: true
  });

  $(".contecdark").each(function (index, element){
    var tl = new TimelineLite({paused:true});
    tl.to(element,0.1, {opacity:1})
    .from(element,0.1,{opacity:0,x:-100,ease:"since"})
    
    element.animation = tl;
  })
  
  $(".contecdark").mouseenter(function(){
    this.animation.play();
  })
  
  $(".contecdark").mouseleave(function(){
    this.animation.reverse();
  })
  
  gsap.from(".lorem", {
    scrollTrigger: ".fontss",
    duration: 2,
    x:"-300%",
    opacity :0 ,
    delay: 0.5, 
    stagger: 0.2,
    ease: "since", 
    force3D: true
  });

  

  ///
  $(".fa-xmark").click(function(){
    $(".modal_menu").css("display","none")
  })
  $("i.fa-bars").click(function(){
    $(".modal_menu").css("display","block")
    gsap.from(".modal_menu",{x:-100,opacity:0,duration:1})
  })
  //mouse
  const mouseOver = document.querySelector('.severvice');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - mouseOver.offsetLeft;
  scrollLeft = mouseOver.scrollLeft;
 

};
let stopDragging = function (event) {
  mouseDown = false;
};

mouseOver.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - mouseOver.offsetLeft;
  const scroll = x - startX;
  mouseOver.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
mouseOver.addEventListener('mousedown', startDragging, false);
mouseOver.addEventListener('mouseup', stopDragging, false);
mouseOver.addEventListener('mouseleave', stopDragging, false);