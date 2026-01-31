
function revealOnScroll() {
    document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            el.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 15) * -1;
        const rotateY = (x - centerX) / 15;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});


const hero = document.querySelector(".hero video");
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if(hero) {
        hero.style.transform = `translateY(${scroll * 0.25}px) scale(1.05)`;
    }
});


const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});











 




const images = [
"ferrarif1.jpg",
"ferrarif40.jpg",
"ferrarilaferrari.jpg"
];

let i = 0;

function show(){
document.getElementById("slide").src = images[i];
}

function next(){
i = (i+1) % images.length;
show();
}

function prev(){
i = (i-1+images.length) % images.length;
show();
}


const engine = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function engineSound(){
engine.play();
}


function rate(star){
document.getElementById("ratingText").innerHTML =
"You rated this Ferrari " + star + " stars!";
}

function submitForm(e){
e.preventDefault();
let name = document.getElementById("name").value;
document.getElementById("formMsg").innerHTML =
"Thanks " + name + "! Your Ferrari review has been submitted.";
}





let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";




   
const backgrounds = [
    "ferrarif1.png",
   
];

let bgIndex = 0;
const bgContainer = document.getElementById("bgSlider");

bgContainer.style.backgroundImage = `url(${backgrounds[bgIndex]})`;

function nextBg() {
    bgIndex = (bgIndex + 1) % backgrounds.length;
    bgContainer.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
}

function prevBg() {
    bgIndex = (bgIndex - 1 + backgrounds.length) % backgrounds.length;
    bgContainer.style.backgroundImage = `url(${backgrounds[bgIndex]})`;
}


function sortTable(col) {
    const table = document.querySelector("table");
    const rows = Array.from(table.tBodies[0].rows);
    const asc = table.dataset.order !== "asc";

    rows.sort((a, b) => {
        let A = a.cells[col].innerText.toLowerCase();
        let B = b.cells[col].innerText.toLowerCase();
        return asc ? A.localeCompare(B) : B.localeCompare(A);
    });

    table.tBodies[0].append(...rows);
    table.dataset.order = asc ? "asc" : "desc";
}


document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll("tbody tr").forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";
    });
});


window.addEventListener("load", () => {
    document.querySelectorAll("tbody tr").forEach((row, i) => {
        row.style.opacity = 0;
        setTimeout(() => {
            row.style.transition = "0.5s";
            row.style.opacity = 1;
        }, i * 120);
    });
});















    const form = document.getElementById("ferrari-contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const experience = document.getElementById("experience").value;
    const orderType = document.getElementById("order-type").value;
    const model = document.getElementById("model").value.trim();

    if(name === "" || email === "") {
        showPopup("Please enter both your name and email.", "error");
        return;
    }

    showPopup(`Thank you, ${name}! Your ${orderType} request for "${model || 'N/A'}" has been submitted. We will contact you at ${email}.`, "success");
    form.reset();
});

function showPopup(message, type) {
    let existing = document.querySelector(".popup-message");
    if(existing) existing.remove();

    const popup = document.createElement("div");
    popup.classList.add("popup-message");
    if(type === "success") popup.classList.add("popup-success");
    if(type === "error") popup.classList.add("popup-error");
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => popup.style.opacity = "0", 6000);
    setTimeout(() => popup.remove(), 7000);
}


document.querySelectorAll(".faq h4").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const p = item.nextElementSibling;
        p.style.display = p.style.display === "block" ? "none" : "block";
    });
});

}
