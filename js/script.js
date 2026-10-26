const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('active');
  });
}

// --- ВАЛИДАЦИЯ ФОРМЫ ---
const form = document.getElementById('contactForm');

if (form) {
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // не отправляем форму по-настоящему
    let valid = true;

    // сброс
    nameError.textContent = '';
    phoneError.textContent = '';
    nameInput.classList.remove('error');
    phoneInput.classList.remove('error');

    // имя
    if (nameInput.value.trim().length < 2) {
      nameError.textContent = 'Введите имя (минимум 2 символа)';
      nameInput.classList.add('error');
      valid = false;
    }

    // телефон: цифры, +, пробелы, скобки, дефисы
    const phoneClean = phoneInput.value.replace(/[^\d+]/g, '');
    if (phoneClean.length < 11) {
      phoneError.textContent = 'Введите корректный телефон';
      phoneInput.classList.add('error');
      valid = false;
    }

    if (valid) {
      form.reset();
      alert('Спасибо! Заявка отправлена. Мы свяжемся с вами.');
    }
  });
}