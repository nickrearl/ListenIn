async function parsing(post_url) {

    let oembedUrl = 'https://open.spotify.com/oembed?url=' + post_url;
    
    let results = await fetch(oembedUrl);
    let data = await results.json();
    let blob = await post_url.substring(31, 53);
    let title = data.title;
    console.log(data);
    let thumbnail = data.thumbnail_url;
    let iframe = '<iframe src="https://open.spotify.com/embed/track/' + blob + '?utm_source=generator" width="100%" height="300" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
// <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3aIhJDHxr1kgTSnutJxPTH?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    return { title, thumbnail, iframe};
}

async function newFormHandler(event) {
    event.preventDefault();

    const post_url = document.querySelector('input[name="spotify"]').value;

    let data = await parsing(post_url);
    console.log(data)
    let title = data.title;
    let thumbnail = data.thumbnail;
    let iframe = data.iframe;
    
    const response = await fetch(`/api/post`, {
        method: 'post',
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
    document.location.replace('/');
    } else {
    alert(response.statusText);
    }
}
  
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);