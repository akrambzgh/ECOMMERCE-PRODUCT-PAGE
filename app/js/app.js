// Moblie Menu
let menuList = document.querySelector(".link__list")
let humburgarIcon = document.querySelector(".open-menu")
let closeIcon = document.querySelector(".close")

humburgarIcon.addEventListener("click", () => {
    menuList.classList.add("open")
})
closeIcon.addEventListener("click", () => {
    menuList.classList.remove("open")
})

// Cart Box
let cartIcon = document.querySelector(".cart-img")
let cartBox = document.querySelector(".cart__box")

cartIcon.addEventListener("click", () => {
    cartBox.classList.toggle("show")
})