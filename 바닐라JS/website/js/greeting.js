const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

const greeting = document.querySelector("#greeting")
const greeting_text = document.querySelector("#greeting h1")

const index = document.querySelector("#index")

const USERNAME_KEY = 'username'
const HIDDEN_CLASS = 'hidden'

const savedUsername = localStorage.getItem(USERNAME_KEY);

function Login(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  writeGreetings(username);
}

function writeGreetings(username) {
  greeting_text.innerText = `${username}님 환영합니다!`;
  greeting.classList.remove(HIDDEN_CLASS);
  index.classList.remove(HIDDEN_CLASS);
}

function Logout() {
  greeting.classList.add(HIDDEN_CLASS);
  index.classList.add(HIDDEN_CLASS);
  localStorage.clear();
  
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener('submit', Login);
  greeting.addEventListener('submit', Logout);
} else {
  writeGreetings(savedUsername)
  greeting.addEventListener('submit', Logout);
}