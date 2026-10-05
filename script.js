const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();

  const text = `Hello Kofebd Global Resources,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AInterest: ${encodeURIComponent(interest)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/2347039493653?text=${text}`, '_blank');
}
