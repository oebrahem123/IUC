// Start Nav menu
const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');
const closeBtn = document.querySelector('.close-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

function closeMenu() {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

//End nav bar

// Start tabs script

const tabs = document.querySelectorAll('.tab');
const groups = document.querySelectorAll('.cards-group');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    groups.forEach(g => g.classList.remove('active'));
    tab.classList.add('active');
    document
      .getElementById(tab.dataset.target)
      .classList.add('active');
  });
});
// End tabs script

// register page script
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener ("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  clearErrors();
  if (firstName.value.trim() === "") {
    showError(firstName, "الاسم الأول مطلوب");
    isValid = false;
  }
  if (lastName.value.trim() === "") {
    showError(lastName, "اسم العائلة مطلوب");
    isValid = false;
  }
  if (!validateEmail(email.value)) {
    showError(email, "البريد الإلكتروني غير صالح");
    isValid = false;
  }
  if (phone.value.trim().length < 10) {
    showError(phone, "رقم الهاتف غير صحيح");
    isValid = false;
  }
  if (password.value.length < 6) {
    showError(password, "كلمة المرور يجب أن تكون 6 أحرف على الأقل");
    isValid = false;
  }
  if (isValid) {
    console.log("✅ الفورم جاهز للإرسال");
  }
});
}
function showError(input, message) {
  input.classList.add("error");
  input.value = "";
  input.placeholder = message;
}
function clearErrors() {
  document.querySelectorAll("input").forEach(input => {
    input.classList.remove("error");
  });
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// End Register Page Script


// Start Login Page Script

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;
  const email = document.getElementById("email");
  const password = document.getElementById("password");   

  clearErrors();
  if (!validateEmail(email.value)) {
    showError(email, "البريد الإلكتروني غير صالح");
    isValid = false;
  }                                                 
  if (password.value.length < 6) {
    showError(password, "كلمة المرور يجب أن تكون 6 أحرف على الأقل");
    isValid = false;
  }                                                 
  if (isValid) {
    console.log("✅ الفورم جاهز للإرسال");
  }
});
function showError(input, message) {
  const errorMsg = input.previousElementSibling.querySelector(".error-msg");
  input.classList.add("error");
  errorMsg.innerText = message;
}
function clearErrors() {
  document.querySelectorAll(".error-msg").forEach(msg => {
    msg.innerText = "";
  });

  document.querySelectorAll("input").forEach(input => {
    input.classList.remove("error");
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// End Login Page Script
// Start Animation 
// Search

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
