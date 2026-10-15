/* =========================================
   KOFEBD GLOBAL RESOURCES
   Website JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {
  // MOBILE NAVIGATION
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the mobile menu after a navigation link is selected.
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        menuToggle.textContent = "☰";
      });
    });

    // Close the mobile menu when the user clicks outside it.
    document.addEventListener("click", function (event) {
      const clickedInsideMenu = navLinks.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");
        menuToggle.textContent = "☰";
      }
    });
  }
});


/*
  WHATSAPP ORDER FORM

  When a customer submits the form, WhatsApp opens
  with the order details filled in.

  The customer must press Send in WhatsApp to send
  the message to KOFEBD Global Resources.
*/

function sendMessage(event) {
  event.preventDefault();

  const nameField = document.getElementById("name");
  const businessField = document.getElementById("business");
  const stateField = document.getElementById("state");
  const interestField = document.getElementById("interest");
  const quantityField = document.getElementById("quantity");
  const messageField = document.getElementById("message");

  // Make sure all required form fields exist.
  if (
    !nameField ||
    !businessField ||
    !stateField ||
    !interestField ||
    !quantityField ||
    !messageField
  ) {
    alert("The order form could not be loaded correctly. Please refresh the page.");
    return;
  }

  // Read the customer's information.
  const name = nameField.value.trim();
  const business = businessField.value.trim();
  const state = stateField.value.trim();
  const interest = interestField.value.trim();
  const quantity = quantityField.value.trim();
  const extraNotes = messageField.value.trim();

  // Validate required fields.
  if (!name || !state || !interest) {
    alert("Please enter your name, delivery state and select a product or service.");
    return;
  }

  // Build the WhatsApp message.
  let whatsappMessage =
    "Hello KOFEBD Global Resources!\n\n" +
    "I would like to make an enquiry/order.\n\n" +
    "Name: " + name + "\n" +
    "Business name: " + (business || "Not provided") + "\n" +
    "State for delivery: " + state + "\n" +
    "Product or service: " + interest + "\n" +
    "Quantity: " + (quantity || "Not specified") + "\n" +
    "Extra notes: " + (extraNotes || "None") + "\n\n" +
    "Please confirm the price and availability. Thank you.";

  // KOFEBD's WhatsApp number in international format.
  const whatsappNumber = "2347039493653";

  // Encode the message so spaces and line breaks work in the URL.
  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(whatsappMessage);

  // Open WhatsApp in a new tab or the installed WhatsApp app.
  const whatsappWindow = window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );

  // Some browsers block new windows, so provide a fallback.
  if (!whatsappWindow) {
    window.location.href = whatsappURL;
  }
      }
