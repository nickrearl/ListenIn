async function commentHandler(e) {
    e.preventDefault();

    const comment_text = $('textarea[name="comment-body"]').value.trim();
    const post_id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1];
    
    if (comment_text) {
        const res = await fetch ('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                comment_text,
                post_id
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
$('.comment-form').addEventListener('submit', commentHandler);