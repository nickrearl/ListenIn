async function signUpHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // TODO: Verify routes are correct for fetch
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
    
    // TODO: Verify routes are correct for fetch
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

// Event Listeners
// document.querySelector('.signup-form').addEventListener('submit', signUpHandler);
document.querySelector('.login-form').addEventListener('submit', loginHandler);