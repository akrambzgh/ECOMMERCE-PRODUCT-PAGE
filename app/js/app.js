// Moblie Menu
const menuList = document.querySelector(".link__list")
const humburgarIcon = document.querySelector(".open-menu")
const closeIcon = document.querySelector(".close")

humburgarIcon.addEventListener("click", () => {
    menuList.classList.add("open")
    cartBox.classList.remove("show")
})
closeIcon.addEventListener("click", () => {
    menuList.classList.remove("open")
})

// Cart Box
const cartIcon = document.querySelector(".cart-img")
const cartBox = document.querySelector(".cart__box")

cartIcon.addEventListener("click", () => {
    cartBox.classList.toggle("show")
    menuList.classList.remove("open")
})

// Image Slider
let slideIndex = 1
displaySlides(slideIndex)

function nextSlide(n) {
    displaySlides(slideIndex += n)
}

function currentSlide(n) {
    displaySlides(slideIndex = n)
}

function displaySlides(n) {
    let slides = document.querySelectorAll(".show-slide")
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[slideIndex - 1].style.display = "block"
}

// DEC, INC number
const changeNumberBtns = document.querySelectorAll(".change")
const number = document.querySelector(".num-head")

changeNumberBtns.forEach((changeBtn) => {
    changeBtn.addEventListener("click", () => {
        if (changeBtn.classList[0] == "plus-btn") {
            number.textContent =  parseInt(number.textContent) + 1
        } else {
            number.textContent = parseInt(number.textContent) - 1
        }
        if (parseInt(number.textContent) <= 0) {
            number.textContent = 0
        }
    })
})

// Append to the cart box
const addButton = document.querySelector(".add")
let cartNumber = document.querySelector(".cart .product-span")

addButton.addEventListener("click", () => {
    if (parseInt(number.textContent) == 0) {
        alert("you can't do that")
    }
    const cartContent = `<div class="head">
    <h3>Cart</h3>
    </div>
    <div class="product">
    <div class="img">
    <img src="${img.src}" alt="">
    </div>
    <div class="the-prod">
    <div class="details">
    <span class="title">Fall Limited Edition Sneakers</span>
    <span class="for-one">$125.00 x ${parseInt(number.textContent)}</span>
    <span class="total">$${125 * parseInt(number.textContent)}.00</span>
    </div>
    <div class="delete">
    <img src="./images/icon-delete.svg" alt="">
    </div>
    </div>
    </div>
    <div class="check">
    <button class="check-bnt">Checkout</button>
    </div>`
    cartBox.innerHTML = cartContent

    
    const deleteCartBox = document.querySelector(".delete")
    deleteCartBox.addEventListener("click", () => {
        cartBox.innerHTML = `<span class="empty">Your cart is empty</span>`
        cartNumber.style.display = "none"
    })
    cartNumber.style.display = "block"
    cartNumber.textContent = parseInt(number.textContent)

    number.textContent = 0
})

// Imgs Tabs
let tabImg1 = document.querySelector(".num-1 img")
let tabImg2 = document.querySelector(".num-2 img")
let tabImg3 = document.querySelector(".num-3 img")
let tabImg4 = document.querySelector(".num-4 img")
let img = document.querySelector(".show-slide img")

tabImg1.addEventListener("click", () => {
    img.src = "images/image-product-1.jpg"
})
tabImg2.addEventListener("click", () => {
    img.src = "images/image-product-2.jpg"
})
tabImg3.addEventListener("click", () => {
    img.src = "images/image-product-3.jpg"
})
tabImg4.addEventListener("click", () => {
    img.src = "images/image-product-4.jpg"
})

let allTabsImgs = document.querySelectorAll(".tab-img")

allTabsImgs.forEach((tabImg) => {
    tabImg.addEventListener("click", (e) => {
        allTabsImgs.forEach((tabImg) => {
            tabImg.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    })
})

// LIGHTBOX Slide
// Image Slider

let lightBoxSlideIndex = 1
displayLightBoxSlides(lightBoxSlideIndex)

function nextLightBoxSlide(n) {
    displayLightBoxSlides(lightBoxSlideIndex += n)
}

function currentSlide(n) {
    displayLightBoxSlides(lightBoxSlideIndex = n)
}

function displayLightBoxSlides(n) {
    const lightBoxSlides = document.querySelectorAll(".lightbox-show-slide")
    if (n > lightBoxSlides.length) {
        lightBoxSlideIndex = 1
    }
    if (n < 1) {
        lightBoxSlideIndex = lightBoxSlides.length
    }
    for (i = 0; i < lightBoxSlides.length; i++) {
        lightBoxSlides[i].style.display = "none"
    }
    lightBoxSlides[lightBoxSlideIndex - 1].style.display = "block"
}

let lightBoxCotainer = document.querySelector(".lightbox")
let slides = document.querySelectorAll(".show-slide")
let overlayer = document.querySelector(".overlayer")
slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        lightBoxCotainer.classList.add("show")
        overlayer.classList.add("open-lightbox")
    })
})

let cross = document.querySelector(".cross svg")
cross.addEventListener("click", () => {
    lightBoxCotainer.classList.remove("show")
    overlayer.classList.remove("open-lightbox")
})