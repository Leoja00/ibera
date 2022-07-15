const navbar = document.querySelector(".navbar")


window.addEventListener("scroll", () => {
  if(window.scrollY < 700){
    navbar.classList.add("bg-navbar-top")
    navbar.classList.remove("bg-navbar")
    
  }
  else {
    navbar.classList.remove("bg-navbar-top")
    navbar.classList.add("bg-navbar")
  }
})