// ================= MENU TOGGLE =================
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.innerHTML = isOpen ? '✕' : '☰';
});

// ================= CONTACT FORM VALIDATION =================
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameVal = document.getElementById('name').value;
    const emailVal = document.getElementById('email').value;

    if (nameVal === '' || emailVal === '') {
        messageDiv.textContent = 'Please fill out all required fields.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Thank you! I will contact you soon.';
        messageDiv.style.color = 'green';
        contactForm.reset();
    }
});
