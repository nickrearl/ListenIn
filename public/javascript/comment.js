async function commentHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1];
    
    
    if (comment_text) {
        const res = await fetch ('/api/comment', {
            method: 'post',
            body: JSON.stringify({
                comment_text,
                post_id,
                // comment_id // comment back in for comment threads
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            document.location.reload();
        } else {
            alert(res.statusText)
        }
    }
}

// Event Listeners
document.querySelector('.comment-form').addEventListener('submit', commentHandler);