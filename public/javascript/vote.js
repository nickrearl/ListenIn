// Event Listeners
$(document).on('click', '.upvote-btn', async function(event) {
    event.preventDefault();
    console.log('button clicked');
    const id = this.id;
    
    // TODO: Verify route is correct in fetch method
    const res = await fetch('/api/post/upvote', {
        method: 'put',
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
});