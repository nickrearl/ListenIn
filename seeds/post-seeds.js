const { Post } = require('../models');

const postdata = [
    {
        title: "Love You When You're Gone",
        post_url: 'https://open.spotify.com/track/4a5a4NpPcsp8lKLjsGqks2?si=38a65e07b5294955',
        user_id: 10,
        thumbnail: "https://i.scdn.co/image/ab67616d00001e02e86b856d0bbba7b181be49d5",
        iframe: '<iframe src="https://open.spotify.com/embed/track/4a5a4NpPcsp8lKLjsGqks2?utm_source=oembed" width="275px" height="350px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>'
    },
    {
        title: "Love You When You're Gone",
        post_url: 'https://open.spotify.com/track/2qtryeKSrI7RgSBo1N3uXv?si=1ba17f30705f4bcf',
        user_id: 8,
        thumbnail: "https://i.scdn.co/image/ab67616d00001e02e86b856d0bbba7b181be49d5",
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/0antLtimJI3w7eJFkTWB5g?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: "Love You When You're Gone",
        post_url: 'https://open.spotify.com/track/0bjk1vn5sMOoZOPqSzwoTC?si=2cf42aa9223d4fe1',
        user_id: 1,
        thumbnail: "https://i.scdn.co/image/ab67616d00001e02e86b856d0bbba7b181be49d5",
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/3c5YuBi87xc8hzoLIg4gWy?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: "Love You When You're Gone",
        post_url: 'https://open.spotify.com/track/69OR7bYhVphLuTd9dyJjT9?si=d3a6fec649214f2c',
        user_id: 4,
        thumbnail: "https://i.scdn.co/image/ab67616d00001e02e86b856d0bbba7b181be49d5",
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/1ryZqVEOlwHL6JxwiP9kFe?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: "Love You When You're Gone",
        post_url: 'https://open.spotify.com/track/2IKix80lBA5ppm6096p5U7?si=da9f7b15e3f54ed1',
        user_id: 7,
        thumbnail: "https://i.scdn.co/image/ab67616d00001e02e86b856d0bbba7b181be49d5",
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/21jca8bFM2kewsQ8kyAElU?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: "Love You When You're Gone",
        post_url: 'https://open.spotify.com/track/0UV1xzcuNfWs4fWc8ZsB3Y?si=59eb9c9e19144868',
        user_id: 4,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/0bjk1vn5sMOoZOPqSzwoTC?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"

    },
    {
        title: "Love You When You're Gone",
        post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
        user_id: 1,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/1CJ2lDRCEm8GP4q90VSOOs?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"

    },
    {
        title: "Love You When You're Gone",
        post_url: 'http://ucla.edu/consequat/nulla.html',
        user_id: 1,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/6GXRPqb0daBCcA9SRJMTMe?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"

    },
    {
        title: "Love You When You're Gone",
        post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
        user_id: 9,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/6VN3dKYTClhY5eYQEnBehr?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"

    },
    {
        title: "Love You When You're Gone",
        post_url: 'https://reverbnation.com/ligula/sit.jpg',
        user_id: 5,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/2Z9BEKyEfi58oeLUYkreZM?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: "Love You When You're Gone",
        post_url: 'http://china.com.cn/lectus/vestibulum.json',
        user_id: 3,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/66q3yNMEO2tOsiFny1IPQW?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: "Love You When You're Gone",
        post_url: 'http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
        user_id: 10,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/5RxpYHVbGJPOvSEATQyg9P?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: 'Donec dapibus.',
        post_url: 'https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml',
        user_id: 8,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"

    },
    {
        title: 'Nulla tellus.',
        post_url: 'https://lycos.com/natoque/penatibus/et.html',
        user_id: 3,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        post_url: 'https://gmpg.org/lorem.jpg',
        user_id: 3,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        post_url: 'https://paginegialle.it/mattis/egestas.jsp',
        user_id: 7,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: 'In hac habitasse platea dictumst.',
        post_url: 'http://wikia.com/turpis/eget.jpg',
        user_id: 6,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: 'Etiam justo.',
        post_url: 'https://shareasale.com/quis.json',
        user_id: 4,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
        user_id: 6,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    },
    {
        title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        post_url: 'https://java.com/at/nibh/in.png',
        user_id: 7,
        iframe: "<iframe src=\"https://open.spotify.com/embed/track/7888F1QWPTn4cPbuknNV4T?utm_source=generator\" width=\"275\" height=\"350\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
