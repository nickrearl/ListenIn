async function logoutHandler() {
    // TODO: Verify that routes are correct in fetch
    const res = await fetch('/api/u/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        document.location.replace('/',{
        });
        } else {
        alert(res.statusText);
    }
}

// Event Listener
// no input fields triggers null error
document.querySelector('#logout').addEventListener('click', logoutHandler);
