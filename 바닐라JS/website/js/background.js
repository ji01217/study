const body = document.body
const loginimage = "url('img/1.jpeg')"
const logoutimage = "url('img/2.jpg')"

function loginbg() {
  body.style.background = loginimage;
  body.style.backgroundSize = "100%"
}

function logoutbg() {
  body.style.background = logoutimage;
  body.style.backgroundSize = "100%"
}

if (savedUsername === null) {
  body.style.background = loginimage;
  loginForm.addEventListener('submit', logoutbg);
} else {
  logoutbg()
  greeting.addEventListener('submit', loginbg);
}