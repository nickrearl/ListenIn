async function signUpHandler(e) {
    e.preventDefault();

    const username = $('#username-signup').value.trim();
    const email = $('#email-signup').value.trim();
    const pw = $('#password-signup').value.trim();

    // TODO: Verify routes are correct for fetch
    if (username && email && pw) {
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (res.ok) {
            document.location.replace('/home/');
            } else {
            alert(res.statusText);
        }
    }
}

async function loginHandler(e) {
    e.preventDefault();

    const email = $('#email-login').value.trim();
    const pw = $('#password-login').value.trim();
    
    // TODO: Verify routes are correct for fetch
    if (email && pw) {
        const res = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                pw
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            document.location.replace('/home/');
        } else {
            alert(res.statusText);
        }
    }
}

// Event Listeners
$('.signup-form').addEventListener('submit', signUpHandler);
$('.login-form').addEventListener('submit', loginHandler);