'use strict';

const demoBtns = document.querySelectorAll(".demo");
const codeBtns = document.querySelectorAll(".code");
const aboutSctn = document.querySelector("#about");
const projectSctn = document.querySelector("#projects");
const footerSctn = document.querySelector("#footer");
const navBar = document.querySelector("nav");
const desktopImg = document.querySelector(".desktop-img");
const mobileImg = document.querySelector(".mobile-img");

class App {

    constructor() {
        this.init();
    }

    btnEventListener() {
        this.querySelector("a").click();
    }

    navBarEventListener(event) {
        event.preventDefault();
        console.log(event);
        if (event.target.closest("li").querySelector("a").textContent === "About") {
            this.scrollPositions(aboutSctn);
        } else if (event.target.closest("li").querySelector("a").textContent === "Projects") {
            this.scrollPositions(projectSctn);
        } else if (event.target.closest("li").querySelector("a").textContent === "Contact") {
            this.scrollPositions(footerSctn);
        }
    }

    scrollPositions(elem) {
        const positions = elem.getBoundingClientRect();
        window.scrollTo({
            left: positions.left + window.pageXOffset,
            top: positions.top + window.pageYOffset,
            behavior: "smooth"
        })
    }

    init() {
        demoBtns.forEach(elem => elem.addEventListener("click", this.btnEventListener));

        codeBtns.forEach(elem => elem.addEventListener("click", this.btnEventListener));

        navBar.addEventListener("click", this.navBarEventListener.bind(this));

        window.addEventListener("resize", function () {
            if (window.innerWidth > 992) {
                desktopImg.classList.remove("hidden");
                mobileImg.classList.add("hidden");
            } else {
                mobileImg.classList.remove("hidden");
                desktopImg.classList.add("hidden");
            }
        })

        if (window.innerWidth > 992) {
            desktopImg.classList.remove("hidden");
            mobileImg.classList.add("hidden");
        } else {
            mobileImg.classList.remove("hidden");
            desktopImg.classList.add("hidden");
        }
    }
}

const app = new App();