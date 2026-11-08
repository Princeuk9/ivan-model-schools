const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('admission-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const get = key => String(data.get(key) || '').trim();
  const message = [
    'Hello Ivan Model Schools, I would like to make an admission enquiry.',
    '',
    `Parent/Guardian: ${get('guardian')}`,
    `Phone: ${get('phone')}`,
    `Child's name: ${get('child')}`,
    `Level of interest: ${get('level')}`,
    `Class of interest: ${get('class') || 'Not specified'}`,
    `Message: ${get('message') || 'No additional message'}`
  ].join('\n');
  document.getElementById('form-status').textContent = 'WhatsApp will open with your enquiry. Please review the message and press Send.';
  window.open('https://wa.me/2348035511061?text=' + encodeURIComponent(message), '_blank', 'noopener');
});
