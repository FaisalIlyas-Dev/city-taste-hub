
function togglePay() {
  const method = document.getElementById("payMethod").value;
  const details = document.getElementById("payDetails");

  details.style.display = method === "Online" ? "block" : "none";
}
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 150) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal(); 
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
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
    "*🍔 NEW ORDER: CITY TASTE HUB 🍔*" +
    "%0a%0a" +
    "*Name:* " +
    name +
    "%0a" +
    "*Email:* " +
    email +
    "%0a" +
    "*Item:* " +
    item +
    "%0a" +
    "*Address:* " +
    address +
    "%0a" +
    "*Payment:* " +
    payment +
    "%0a%0a" +
    "--------------------------------" +
    "%0a" +
    "*NOTE:* Please share your payment screenshot on this chat to confirm your order. Thank you for choosing City Taste Hub! ❤️";
  let url = "https://wa.me/" + myNumber + "?text=" + message;
  if (name !== "" && address !== "" && phone !== "") {
    window.open(url, "_blank").focus();
  } else {
    alert(
      "Please complete your details (Name, Phone, and Address) before proceeding with the order!",
    );
  }
}
