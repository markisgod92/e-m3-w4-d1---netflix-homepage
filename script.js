const movies = [
    {
        title: "Unorthodox",
        img: `<img src="assets/imgs/movies/1.png" alt="unorthox">`,
        embedVideo: `<iframe width="100%" height="100%" src="http://www.youtube.com/embed/SaqWJ-lQDtE?autoplay=1&mute=1&loop=1" 
                        title="Unorthodox  - Trailer Ufficiale" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin"></iframe>`,
        category: "13+",
        content: "Miniserie",
        tags: ["Profondo", "Emozionante", "Dramma"],
        genre: "Drama"
    },
    {
        title: "After Life",
        img: `<img src="assets/imgs/movies/2.png" alt="after life">`,
        embedVideo: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Qad_RHzz9B8?autoplay=1&mute=1&loop=1" 
                        title="AFTER LIFE | Trailer ITA Della Serie Netflix con Ricky Gervais" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        category: "16+",
        content: "3 stagioni",
        tags: ["Umorismo inglese", "Arguto", "Commedia cupa"],
        genre: ["Drama", "Comedy"]
    },
    {
        title: "Vis a Vis: il Prezzo del Riscatto",
        img: `<img src="assets/imgs/movies/3.png" alt="vis a vis">`,
        embedVideo: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/eqdaWny5Irs?autoplay=1&mute=1&loop=1" 
                        title="Vis a Vis: El Oasis | Trailer ufficiale (sottotitoli in ITALIANO) | Netflix Italia" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        category: "16+",
        content: "5 stagioni",
        tags: ["Thriller", "LGBTQ", "Carcere"],
        genre: ["Crime", "Thriller"]
    },
    {
        title: "The Place",
        img: `<img src="assets/imgs/movies/4.png" alt="the place">`,
        embedVideo: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/RDQwNVp65HY?autoplay=1&mute=1&loop=1" 
                        title="The place - Trailer ufficiale" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        category: "13+",
        content: "105 min",
        tags: ["Drammatico", "Noir", "Fantastico"],
        genre: ["Drama", "Thriller"]
    },
    {
        title: "Summertime",
        img: `<img src="assets/imgs/movies/5.png" alt="summertime">`,
        embedVideo: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/n1yLsV-IPOk?autoplay=1&mute=1&loop=1" 
                        title="Summertime | Trailer ufficiale | Netflix Italia" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        category: "13+",
        content: "3 stagioni",
        tags: ["Stile soap", "Dolceamaro", "Adolescenziale"],
        genre: ["Romantic", "Drama"]
    },
    {
        title: "I Delitti di Valhalla",
        img: `<img src="assets/imgs/movies/6.png" alt="i delitti di valhalla">`,
        embedVideo: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/pQyy7DJtwEI?autoplay=1&mute=1&loop=1" 
                        title="Valhalla Murders: Trailer | BBC Trailers" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        category: "16+",
        content: "Miniserie",
        tags: ["Cupo", "Suspense"],
        genre: ["Drama", "Thriller"]
    },
];

const footerLinks = [
    { title: "Audio and Subtitles", link: "#" },
    { title: "Audio Description", link: "#" },
    { title: "Help Center", link: "#" },
    { title: "Gift Cards", link: "#" },
    { title: "Media Center", link: "#" },
    { title: "Investor Relations", link: "#" },
    { title: "Jobs", link: "#" },
    { title: "Terms of Use", link: "#" },
    { title: "Privacy", link: "#" },
    { title: "Legal Notices", link: "#" },
    { title: "Cookie Preferences", link: "#" },
    { title: "Corporate Information", link: "#" },
    { title: "Contact Us", link: "#" }
]


// DOM Elements
const showCategoriesBtn = document.getElementById("show-sections");
const showGridBtn = document.getElementById("show-grid");
const showsCointaner = document.getElementById("shows-container");
const footerLinksContainer = document.getElementById("footer-links-container");

// Functions
const createLink = (link, container) => {
    const linkLi = document.createElement("li");
    linkLi.setAttribute("class", "col-6 col-md-4 mb-2");

    const linkAnchor = document.createElement("a");
    linkAnchor.innerText = link.title;
    linkAnchor.href = link.link;
    linkAnchor.setAttribute("class", "text-secondary text-decoration-none");

    linkLi.appendChild(linkAnchor);
    container.appendChild(linkLi);
}

const createCard = (show, container) => {
    const showWrapper = document.createElement("div");
    showWrapper.setAttribute("class", "show-card position-relative");

    const showCard = document.createElement("div");
    showCard.setAttribute("class", "card bg-black");

    const cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.innerHTML = show.img;

    showCard.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    createCardBody(show, cardBody)

    showCard.append(cardImg, cardBody);
    showWrapper.appendChild(showCard);
    container.appendChild(showWrapper);

    let timerID;
    showWrapper.addEventListener("mouseenter", () => {
        timerID = setTimeout(() => {
            cardImg.innerHTML = show.embedVideo;
        })
    })
    showWrapper.addEventListener("mouseleave", () => {
        clearTimeout(timerID);
        cardImg.innerHTML = show.img;
    })

}

const createCardBody = (show, container) => {
    const cardButtons = document.createElement("div");
    cardButtons.setAttribute("class", "mb-3 d-flex align-items-center gap-2");
    cardButtons.innerHTML = `<i class="bi bi-play-circle-fill text-white fs-1"></i>
                                <i class="bi bi-plus-circle text-white fs-1"></i>
                                <i class="bi bi-hand-thumbs-up text-white fs-1"></i>`;

    const cardData = document.createElement("div");
    cardData.setAttribute("class", "mb-3 d-flex align-items-center gap-3");

    const showCategory = document.createElement("div");
    showCategory.setAttribute("class", "border border-secondary border-1 px-1 text-secondary");
    showCategory.innerText = show.category;

    const showContent = document.createElement("div");
    showContent.setAttribute("class", "text-secondary");
    showContent.innerText = show.content;

    cardData.append(showCategory, showContent);

    const cardTags = document.createElement("ul");
    cardTags.setAttribute("class", "d-flex justify-content-start align-items-center gap-5 text-white list-unstyled");

    show.tags.forEach(tag => {
        const cardLi = document.createElement("li");
        cardLi.innerText = tag;
        cardTags.appendChild(cardLi);
    })

    container.append(cardButtons, cardData, cardTags)
}


// Calls
movies.forEach(movie => {
    createCard(movie, showsCointaner);
})

footerLinks.forEach(link => createLink(link, footerLinksContainer));