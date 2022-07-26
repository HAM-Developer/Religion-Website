//AOS SCROLL ANIMATION
AOS.init({
  duration: 1000,
  once :true,
  easing: "ease-out"
});
const sectionAbout = document.querySelector("section.section_hero");
const NAV = document.querySelector(".nav");
const ancs = NAV.querySelectorAll(":scope > a");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const navBAR = document.querySelector(".nav");
const menuBtn  = document.querySelector(".menu")
menuBtn.addEventListener('click',()=>{
  navBAR.classList.toggle('show_links')
  navBAR.classList.toggle("change_color")
})
//PRELOADER ANIMATION
const loader = document.querySelector(".loader")
window.addEventListener("DOMContentLoaded",(e)=>{
  loader.style.display = "none"
})
//NAVBAR SCROLL EFFECT
const options = {
  threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      ancs.forEach((anc) => {
        anc.style.color = "black";
        header.classList.add("nav_scrolled");
        navBAR.classList.add("nav_scrolled")
        navBAR.style.boxShadow= "none"
      }); 
      
    }
    else{
      ancs.forEach((anc) => {
        anc.style.color = "white";
        header.classList.remove("nav_scrolled");
        navBAR.style.boxShadow= "none"
        navBAR.classList.remove("nav_scrolled")
      });
    }
  });
}, options);
observer.observe(sectionAbout);
//ACTIVE LINKS  EFFECT

console.log(window.screenY);


