// Mobile Menu Toggle Logic
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Reveal Logic
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close mobile menu on click
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth",
            });
        }
    });
});

// Payment Toggle
function togglePay() {
    const method = document.getElementById("payMethod").value;
    const details = document.getElementById("payDetails");
    details.style.display = method === "Online" ? "block" : "none";
}

// WhatsApp Order Function
function sendWhatsApp() {
    let name = document.getElementById("custName").value;
    let email = document.getElementById("custEmail").value;
    let phone = document.getElementById("custPhone").value;
    let item = document.getElementById("foodItem").value;
    let address = document.getElementById("custAddress").value;
    let qty = document.getElementById("quantity").value;
    let payment = document.getElementById("payMethod").value;
    let myNumber = "923099091493";

    let message = 
        "*🍔 NEW ORDER: CITY TASTE HUB 🍔*" + "%0a%0a" +
        "*Name:* " + name + "%0a" +
        "*Item:* " + item + " (Qty: " + qty + ")" + "%0a" +
        "*Address:* " + address + "%0a" +
        "*Payment:* " + payment + "%0a%0a" +
        "Please confirm the order. Thank you!";

    let url = "https://wa.me/" + myNumber + "?text=" + message;

    if (name !== "" && address !== "" && phone !== "") {
        window.open(url, "_blank").focus();
    } else {
        alert("Please fill Name, Phone, and Address first!");
    }
}
