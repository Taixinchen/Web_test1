const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 这里可以添加真实的登录验证逻辑，比如与后端交互
    // 简单示例，假设用户名和密码都是 'student'
    if (username === '123' && password === '123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('用户名或密码错误');
    }
});