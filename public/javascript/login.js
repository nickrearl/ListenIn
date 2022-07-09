async function signUpHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-sign-up').value.trim();
    const email = document.querySelector('#email-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();

    if (username && email && password) {
        const res = await fetch('/api/u', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (res.ok) {
            document.location.replace('/');
            } else {
            alert(res.statusText);
        }
    }
}

async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    
    if (email && password) {
        const res = await fetch('/api/u/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }
    }
}


document.querySelector('#sign-up-form').addEventListener('submit', signUpHandler);
document.querySelector('#login-form').addEventListener('submit', loginHandler);