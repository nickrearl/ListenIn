async function parsing(post_url) {

    let oembedUrl = 'https://open.spotify.com/oembed?url=' + post_url;
    
    let results = await fetch(oembedUrl);
    let data = await results.json();
    let blob = await post_url.substring(31, 53);
    let title = data.title;
    console.log(data);
    let thumbnail = data.thumbnail_url;
    let iframe = '<iframe src="https://open.spotify.com/embed/track/' + blob + '?utm_source=oembed" width="275" height="350" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    return { title, thumbnail, iframe};
}

async function newFormHandler(event) {
    event.preventDefault();

    const url = document.querySelector('input[name="spotify"]').value.trim();
    
    const post_url = url.slice(0, 53);

    let data = await parsing(post_url);
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
    alert("-- Please enter a Spotify link --");
    }
}
  
document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);