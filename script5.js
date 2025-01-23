document.getElementById('register-btn').addEventListener('click', registerUser);
document.getElementById('login-btn').addEventListener('click', loginUser);
document.getElementById('post-btn').addEventListener('click', createPost);

let currentUser = null;

function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        alert('User already exists!');
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('
