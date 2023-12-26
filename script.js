const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

 function locomotiveScrollTriger(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
        
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
locomotiveScrollTriger()

function videoConAnimation(){
     let videoContainer =document.querySelector("#video-container")
     let crsr = document.querySelector("#cursor");
     
     videoContainer.addEventListener("mouseenter",()=>{
         gsap.to(crsr,{
             opacity:1,
             scale:1,
             transform: 'translate(-50%,-50%) '
            })
     })
     videoContainer.addEventListener("mouseleave",()=>{
         gsap.to(crsr,{
             opacity:0,
             scale:0
         })
     })
     videoContainer.addEventListener("mousemove",(dets)=>{
     gsap.to(crsr,{
         left:dets.x-20,
         top:dets.y-50
     })
     })

}
videoConAnimation();

 function scrollerFunc(){
     gsap.from("#page1 .head-pg-1 h1",{
         y:30,
         opacity:0,
         delay:0.7,
         duration:0.9,
         stagger:0.3
     })
     gsap.from("#page1 .head-pg-1 h2",{
         y:30,
         opacity:0,
         delay:0.9,
         duration:0.8,
         stagger:0.3
     })
     gsap.from("#page1 #video-container",{
         scale:0.9,
         opacity:0,
         delay:0.7,
         duration:0.8,
         
     })

}
scrollerFunc()

function divpg3(){

    let divpg3 = document.querySelector("#divpg3");
    let pg3 = document.querySelector("#page3");
    pg3.addEventListener("mouseenter",()=>{
        gsap.to("#divpg3",{
            opacity:1,
            scale:1
            
        })
        pg3.addEventListener("mousemove",(dets)=>{
        gsap.to("#divpg3",{
            y:dets.y,
            x:dets.x,
            transform: 'translate(-50%,-50%) '
        })
    
    })
    })
    pg3.addEventListener("mouseleave",()=>{
        gsap.to("#divpg3",{
            opacity:0,
      scale:0      
        })
        
    })
}
divpg3()

function scrollTrigerAnimations(){
    gsap.to(".nav-part1 svg",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 0%",
            end:"top -5% ",
            scrub:true,
    
        }
    })
}
scrollTrigerAnimations()
 function menu(){
     
     let menubtn = document.querySelector("#menu");
     let menu =document.querySelector(".nav-part4")
     menubtn.addEventListener('click',()=>{
     gsap.to(".nav-part4",{
         transform:"translateY(0)",    
         
     })
     gsap.to(".icons",{
         backgroundColor:"black"
     })
     gsap.to("#menu",{
         display:"none",
     })
     
     gsap.to("#close",{
     display:"block",
     })
     gsap.to(".links a,.nav-part1 svg,.icons,.shop",{
         color:"white"
     })
     })
     
     let closeMenu = document.querySelector("#close");
     closeMenu.addEventListener("click",()=>{
         gsap.to(".nav-part4",{
             transform:"translateY(-100%)"
         })
         gsap.to(".icons",{
             backgroundColor:"white"
         })
         gsap.to("#menu",{
             display:"block",
     
         })
         gsap.to("#close",{
             display:"none",
         })
         gsap.to(".links a,.nav-part1 svg,.icons,.shop",{
             color:"black"
         })
     })

}     
menu()
