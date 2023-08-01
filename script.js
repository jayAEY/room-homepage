let mobileHeroImages = document.querySelectorAll(".mobile-hero-image")
let desktopHeroImages = document.querySelectorAll(".desktop-hero-image")
let heroText = document.querySelectorAll(".hero-text")
let nav = document.querySelector("nav")

// count fot slideshow
let heroCount = 0

// handle mobile menu
function menu(element) {
    element.id === "menu-icon" ? nav.style.display = "grid" : nav.style.display = "none"
}

function changeSlide(arrow) {
    //change image if right arrow is clicked or pressed on keyboard
    if (arrow.id == "slideshow-right-arrow" || arrow.key === "ArrowRight") {
        mobileHeroImages[heroCount].style.display = "none"
        desktopHeroImages[heroCount].style.display = "none"
        heroText[heroCount].style.display = "none"
        heroCount === 2 ? heroCount = 0 : heroCount++
        mobileHeroImages[heroCount].style.display = "flex"
        desktopHeroImages[heroCount].style.display = "flex"
        heroText[heroCount].style.display = "flex"

    }

    //change image if left arrow is clicked or pressed on keyboard
    if (arrow.id === "slideshow-left-arrow" || arrow.key === "ArrowLeft") {
        mobileHeroImages[heroCount].style.display = "none"
        desktopHeroImages[heroCount].style.display = "none"
        heroText[heroCount].style.display = "none"
        heroCount === 0 ? heroCount = 2 : heroCount--
        mobileHeroImages[heroCount].style.display = "flex"
        desktopHeroImages[heroCount].style.display = "flex"
        heroText[heroCount].style.display = "flex"
    }
}

//display desktop menu if window is wider than 700px
function desktopNav() {
    if (window.innerWidth >= 720) {
        nav.style.display = "grid"
    } else {
        nav.style.display = "none"
    }
}

// check for window size
window.addEventListener("resize", () => desktopNav())
// check for keyboard presses
document.addEventListener("keyup", (e) => changeSlide(e))
