const movies = [
    {
        title: "Unorthodox",
        img: "assets/imgs/movies/1.png",
        category: "13+",
        content: "Miniserie",
        genre: ["profondo", "emozionante", "dramma"],
    },
    {
        title: "After Life",
        img: "assets/imgs/movies/2.png",
        category: "16+",
        content: "3 stagioni",
        genre: ["Umorismo inglese", "Arguto", "Commedia cupa"]
    },
    {
        title: "Vis a Vis: il Prezzo del Riscatto",
        img: "assets/imgs/movies/3.png",
        category: "16+",
        content: "5 stagioni",
        genre: ["Thriller", "LGBTQ", "Carcere"]
    },
    {
        title: "The Place",
        img: "assets/imgs/movies/4.png",
        category: "13+",
        content: "105 min",
        genre: ["Drammatico", "Noir", "Fantastico"]
    },
    {
        title: "Summertime",
        img: "assets/imgs/movies/5.png",
        category: "13+",
        content: "3 stagioni",
        genre: ["Stile soap", "Dolceamaro", "Adolescenziale"]
    },
    {
        title: "I Delitti di Valhalla",
        img: "assets/imgs/movies/6.png",
        category: "16+",
        content: "Miniserie",
        genre: ["Cupo", "Suspense"]
    },
];

const footerLinks = [
    {title: "Audio and Subtitles", link: "#"},
    {title: "Audio Description", link: "#"},
    {title: "Help Center", link: "#"},
    {title: "Gift Cards", link: "#"},
    {title: "Media Center", link: "#"},
    {title: "Investor Relations", link: "#"},
    {title: "Jobs", link: "#"},
    {title: "Terms of Use", link: "#"},
    {title: "Privacy", link: "#"},
    {title: "Legal Notices", link: "#"},
    {title: "Cookie Preferences", link: "#"},
    {title: "Corporate Information", link: "#"},
    {title: "Contact Us", link: "#"}
]


// DOM Elements
const showCategoriesBtn = document.getElementById("show-sections");
const showGridBtn = document.getElementById("show-grid");
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

// Calls
footerLinks.forEach(link => createLink(link, footerLinksContainer));


// TEST CARD
let timerID;
const showCard = document.querySelector(".card");
const showImg = document.querySelector(".card-img-top");
const showBody = document.querySelector(".card-body");

showCard.addEventListener("mouseover", () => {
    timerID = setTimeout(() => {
        showImg.innerHTML = `<iframe class="card-img-top" width="100%" height="100%" src="http://www.youtube.com/embed/SaqWJ-lQDtE?autoplay=1&mute=1&loop=1" 
                                title="Unorthodox  - Trailer Ufficiale" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin"></iframe>`
    }, 1000)
    
})

showCard.addEventListener("mouseout", () => {
    clearTimeout(timerID);
    showImg.innerHTML = `<img src="assets/imgs/movies/1.png" alt="show pic">`
})