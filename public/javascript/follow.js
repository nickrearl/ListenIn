async function followHandler(event) {
    event.preventDefault();

    const id = this.id;
    
    // TODO: Verify route is correct in fetch method
    const res = await fetch('/api/u/follow', {
        method: 'post',
        body: JSON.stringify({
            following_id: id,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (res.ok) {
        document.location.reload();
    } else {
        alert(res.statusText);
    }
}

// Event Listeners
document.querySelector('.follow-btn').addEventListener('click', followHandler);