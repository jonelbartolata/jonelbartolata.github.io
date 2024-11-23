const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

const carouselItems = document.querySelectorAll('.carousel-item');
const titleElement = document.getElementById('projectTitle');
const descriptionElement = document.getElementById('projectDescription');
const learnMoreButton = document.getElementById('learnMoreButton');
const body = document.body;


let header_height = header.offsetHeight;
let section_height = section.offsetHeight;


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    shadow.style.height = `${scroll * 0.5 + 300}px`;

    content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;

})
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
// Smooth Scroll functionality
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default action (jumping to the section)

        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

