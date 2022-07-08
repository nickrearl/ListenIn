async function newFormHandler(event) {
    event.preventDefault();

    const post_url = document.querySelector('input[name="post-url"]').value;

    let oembedUrl = 'https://open.spotify.com/oembed?url=' + post_url;
    
    let results = await fetch(oembedUrl);

    let blob = post_url.substring(31, 53);
    let title = results.json().title;
    let thumbnail = results.json().thumbnail;
    let iframe = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/' + blob + '?utm_source=oembed" width="50%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'



    const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url,
            thumbnail,
            iframe
    }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
    document.location.replace('/dashboard');
    } else {
    alert(response.statusText);
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);