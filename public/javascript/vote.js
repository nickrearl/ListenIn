async function voteHandler(e) {
    e.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    // TODO: Verify route is correct in fetch method
    const res = await fetch('/api/post/vote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
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
document.querySelector('.upvote-btn').addEventListener('submit', voteHandler);