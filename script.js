/*
INDEX:
12- Global Variables
235- DOM Elements
248- Functions
472- Compile genre list
484- Calls
564- Intersection observer
*/


// Global Variables
const movies = [
    {
        title: "Unorthodox",
        img: "assets/imgs/movies/1.png",
        embedVideo: "http://www.youtube.com/embed/SaqWJ-lQDtE",
        embedVideoTitle: "Unorthodox - Trailer Ufficiale",
        category: "13+",
        content: "Miniserie",
        tags: ["Profondo", "Emozionante", "Dramma"],
        genre: ["Drama"]
    },
    {
        title: "After Life",
        img: "assets/imgs/movies/2.png",
        embedVideo: "https://www.youtube.com/embed/Qad_RHzz9B8",
        embedVideoTitle: "AFTER LIFE | Trailer ITA Della Serie Netflix con Ricky Gervais",
        category: "16+",
        content: "3 stagioni",
        tags: ["Umorismo inglese", "Arguto", "Commedia cupa"],
        genre: ["Drama", "Comedy"]
    },
    {
        title: "Vis a Vis: il Prezzo del Riscatto",
        img: "assets/imgs/movies/3.png",
        embedVideo: "https://www.youtube.com/embed/eqdaWny5Irs",
        embedVideoTitle: "Vis a Vis: El Oasis | Trailer ufficiale (sottotitoli in ITALIANO) | Netflix Italia",
        category: "16+",
        content: "5 stagioni",
        tags: ["Thriller", "LGBTQ", "Carcere"],
        genre: ["Crime", "Thriller"]
    },
    {
        title: "The Place",
        img: "assets/imgs/movies/4.png",
        embedVideo: "https://www.youtube.com/embed/RDQwNVp65HY",
        embedVideoTitle: "The place - Trailer ufficiale",
        category: "13+",
        content: "105 min",
        tags: ["Drammatico", "Noir", "Fantastico"],
        genre: ["Drama", "Thriller"]
    },
    {
        title: "Summertime",
        img: "assets/imgs/movies/5.png",
        embedVideo: "https://www.youtube.com/embed/n1yLsV-IPOk",
        embedVideoTitle: "Summertime | Trailer ufficiale | Netflix Italia",
        category: "13+",
        content: "3 stagioni",
        tags: ["Stile soap", "Dolceamaro", "Adolescenziale"],
        genre: ["Romantic", "Drama"]
    },
    {
        title: "I Delitti di Valhalla",
        img: "assets/imgs/movies/6.png",
        embedVideo: "https://www.youtube.com/embed/pQyy7DJtwEI",
        embedVideoTitle: "Valhalla Murders: Trailer | BBC Trailers",
        category: "16+",
        content: "Miniserie",
        tags: ["Cupo", "Suspense"],
        genre: ["Drama", "Thriller"]
    },
    {
        title: "L'altra Grace",
        img: "assets/imgs/movies/7.png",
        embedVideo: "https://www.youtube.com/embed/A-fofQ9VpPQ",
        embedVideoTitle: "Alias Grace | Official Trailer [HD] | Netflix",
        category: "16+",
        content: "Miniserie",
        tags: ["Intellettuale", "Psicologico", "Profondo"],
        genre: ["Drama"]
    },
    {
        title: "Virgin River",
        img: "assets/imgs/movies/8.png",
        embedVideo: "https://www.youtube.com/embed/DMNjH5MlQXc",
        embedVideoTitle: "Virgin River | Official Trailer | Netflix",
        category: "13+",
        content: "5 stagioni",
        tags: ["Dolceamaro", "Profondo"],
        genre: ["Drama", "Romantic"]
    },
    {
        title: "The English Game",
        img: "assets/imgs/movies/9.png",
        embedVideo: "https://www.youtube.com/embed/wX5SNH_GZ54",
        embedVideoTitle: "The English Game | Trailer ufficiale | Netflix Italia",
        category: "13+",
        content: "Miniserie",
        tags: ["Storici", "Scontri generazionali", "Età vittoriana"],
        genre: ["Drama"]
    },
    {
        title: "Il Metodo Kominsky",
        img: "assets/imgs/movies/10.png",
        embedVideo: "https://www.youtube.com/embed/Aj8ua1zQPSs",
        embedVideoTitle: "The Kominsky Method Season 3 | Official Trailer | Netflix",
        category: "13+",
        content: "3 stagioni",
        tags: ["Ammiccante", "Arguto", "Sitcom"],
        genre: ["Drama", "Comedy", "Sitcom"]
    },
    {
        title: "Patto d'amore",
        img: "assets/imgs/movies/11.png",
        embedVideo: "https://www.youtube.com/embed/-E0jfSGWqUE",
        embedVideoTitle: "Permission Official Trailer",
        category: "13+",
        content: "96 min",
        tags: [],
        genre: ["Comedy", "Romantic"]
    },
    {
        title: "La Casa de las Flores",
        img: "assets/imgs/movies/12.png",
        embedVideo: "https://www.youtube.com/embed/5iXOQUASjLQ",
        embedVideoTitle: "La Casa de las Flores, La película | Tráiler Oficial | Netflix",
        category: "13+",
        content: "3 stagioni",
        tags: ["Camp", "Sensuale"],
        genre: ["Comedy", "Drama"]
    },
    {
        title: "Collateral Beauty",
        img: "assets/imgs/movies/13.png",
        embedVideo: "https://www.youtube.com/embed/VoOxLh-AGkE",
        embedVideoTitle: "Collateral Beauty - Trailer Italiano Ufficiale | HD",
        category: "13+",
        content: "1h 36min",
        tags: ["Sentimentale", "Emozionante", "Dramma"],
        genre: ["Drama"]
    },
    {
        title: "Self-Made: La Vita di Madam C.J. Walker",
        img: "assets/imgs/movies/14.png",
        embedVideo: "https://www.youtube.com/embed/bnHy--yxPK4",
        embedVideoTitle: "Self-made: la vita di Madam C.J. Walker | Trailer ufficiale | Netflix Italia",
        category: "13+",
        content: "Miniserie",
        tags: ["Motivante", "Commovente", "Dramma"],
        genre: ["Drama"]
    },
    {
        title: "Freud",
        img: "assets/imgs/movies/15.png",
        embedVideo: "https://www.youtube.com/embed/vz9h-Bv36VU",
        embedVideoTitle: "Freud | Trailer ufficiale | Netflix Italia",
        category: "16+",
        content: "8 episodi",
        tags: ["Psicologico", "Cupo", "Misteri"],
        genre: ["Drama", "Mistery"]
    },
    {
        title: "Grace and Frankie",
        img: "assets/imgs/movies/16.png",
        embedVideo: "https://www.youtube.com/embed/8q3dTU182EI",
        embedVideoTitle: "Grace and Frankie - Stagione 1 | Trailer | Netflix Italia",
        category: "13+",
        content: "7 stagioni",
        tags: ["Arguto", "Bizzarro", "Sitcom"],
        genre: ["Drama", "Sitcom", "Comedy"]
    },
    {
        title: "Lasciati Andare",
        img: "assets/imgs/movies/17.png",
        embedVideo: "https://www.youtube.com/embed/l7G1iJBUnf0",
        embedVideoTitle: "LASCIATI ANDARE (2017) di Francesco Amato - Trailer ufficiale HD",
        category: "13+",
        content: "99 min",
        tags: [],
        genre: ["Drama", "Thriller", "Comedy"]
    },
    {
        title: "Dogman",
        img: "assets/imgs/movies/18.png",
        embedVideo: "https://www.youtube.com/embed/eum93mpzpE0",
        embedVideoTitle: "DOGMAN (2018) di Matteo Garrone - Trailer ufficiale HD",
        category: "13+",
        content: "102 min",
        tags: [],
        genre: ["Drama"]
    }
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

const sections = [
    "Trending Now",
    "Watch It Again",
    "New Releases",
    "Critically Acclaimed",
    "Underrated Series",
    "Shows You Pretend to Watch",
    "Background Noise",
    "For When You Can't Decide",
    "Because You’ve Watched Everything Else",
    "For When You’re Out of Options",
    "Desperation Station",
    "The Bottom of the Barrel",
    "So Bad, It’s Good",
    "Regrettable Choices",
    "Last Resort",
    "Why Are You Even Watching This?",
    "Absolutely No One’s Favorite"
];

let genresArray = ["All"];


// DOM Elements
const searchContainer = document.querySelector(".search-container");
const searchBtn = document.getElementById("searchButton");
const searchBarInput = document.getElementById("searchInput");
const pageTitle = document.getElementById("page-title");
const genresList = document.getElementById("genres-dropdown");
const showCategoriesBtn = document.getElementById("show-sections");
const showGridBtn = document.getElementById("show-grid");
const showSectionsCointainer = document.getElementById("show-sections-container");
const showGridContainer = document.getElementById("show-grid-container");
const footerLinksContainer = document.getElementById("footer-links-container");


// Functions
const createSectionTitle = (section, container) => {
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "col-12 mt-5 mb-3 scrollable");

    const title = document.createElement("h4");
    title.setAttribute("class", "text-white");
    title.innerText = section;

    titleDiv.appendChild(title);
    container.appendChild(titleDiv);
}

const createSectionSwiper = (section, container) => {
    const sectionCol = document.createElement("div");
    sectionCol.setAttribute("class", "col-12 mb-3 scrollable");

    const swiperDiv = document.createElement("div");
    swiperDiv.setAttribute("class", "swiper");

    const swiperWrapper = document.createElement("div");
    swiperWrapper.setAttribute("class", "swiper-wrapper");

    const swipperBtnPrev = document.createElement("div");
    swipperBtnPrev.setAttribute("class", "swiper-button-prev");

    const swipperBtnNext = document.createElement("div");
    swipperBtnNext.setAttribute("class", "swiper-button-next");

    swiperDiv.append(swiperWrapper, swipperBtnPrev, swipperBtnNext);
    sectionCol.appendChild(swiperDiv);
    container.appendChild(sectionCol);

    createSwiperSlide(movies, swiperWrapper);
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const y = Math.floor(Math.random() * (i + 1));
        [array[i], array[y]] = [array[y], array[i]];
    };
    return array;
}

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

const createGenreButton = (genre, dropdownContainer) => {
    const genreLi = document.createElement("li");

    const genreButton = document.createElement("div");
    genreButton.setAttribute("class", "dropdown-item text-secondary");
    genreButton.innerText = genre;

    genreLi.appendChild(genreButton);
    dropdownContainer.appendChild(genreLi);

    genreButton.addEventListener("click", () => sortMovies(genre))
}

const sortMovies = (genre) => {
    showCategoriesBtn.classList.remove("active");
    showGridBtn.classList.add("active");

    showSectionsCointainer.classList.add("d-none");
    showGridContainer.classList.remove("d-none");

    showGridContainer.replaceChildren();

    if (genre === "All") {
        movies.forEach(movie => {
            createCard(movie, showGridContainer);
        })
        pageTitle.innerText = `TV Shows`;
    } else {
        movies.forEach(movie => {
            if (movie.genre.includes(genre)) {
                createCard(movie, showGridContainer)
            }
        })
        pageTitle.innerText = `TV Shows > ${genre}`;
    }
}

const searchMovies = (query) => {
    query = query.toLowerCase();
    const propertiesToLook = ["title", "tags", "genre"];

    return movies.filter(movie => {
        return propertiesToLook.some(property => {
            return movie[property] && movie[property].toString().toLowerCase().includes(query)
        })
    })
}

const createImageElement = (show) => {
    const img = document.createElement("img");
    img.src = show.img;
    img.alt = show.title;
    return img;
}

const createVideoElement = (show) => {
    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = `${show.embedVideo}?autoplay=1&mute=1&loop=1`;
    iframe.title = show.embedVideoTitle;
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;
    return iframe;
}

const createCard = (show, container) => {
    const showWrapper = document.createElement("div");
    showWrapper.setAttribute("class", "show-card");

    const showCard = document.createElement("div");
    showCard.setAttribute("class", "card bg-black");

    const cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img-top");
    cardImg.appendChild(createImageElement(show));

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
            cardImg.replaceChild(createVideoElement(show), cardImg.firstChild);
        }, 700)
    })
    showWrapper.addEventListener("mouseleave", () => {
        clearTimeout(timerID);
        cardImg.replaceChild(createImageElement(show), cardImg.firstChild);
    })
}

const createCardBody = (show, container) => {
    const cardButtons = document.createElement("div");
    cardButtons.setAttribute("class", "mb-3 d-flex align-items-center gap-3");

    const playButton = document.createElement("i");
    playButton.setAttribute("class", "bi bi-play-circle-fill text-white fs-1");

    const plusButton = document.createElement("i");
    plusButton.setAttribute("class", "bi bi-plus-circle text-white fs-1");

    const thumbsUpButton = document.createElement("i");
    thumbsUpButton.setAttribute("class", "bi bi-hand-thumbs-up text-white fs-1");

    cardButtons.append(playButton, plusButton, thumbsUpButton);

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
    cardTags.setAttribute("class", "d-flex justify-content-start align-items-center text-white list-unstyled");

    show.tags.forEach(tag => {
        const cardLi = document.createElement("li");
        cardLi.innerText = tag;
        cardTags.appendChild(cardLi);
    })

    container.append(cardButtons, cardData, cardTags)
}

const createSwiperSlide = (array, container) => {
    let shuffledArray = shuffleArray(array)
    shuffledArray.forEach(element => {
        const showSwiperSlide = document.createElement("div");
        showSwiperSlide.setAttribute("class", "swiper-slide");
        createCard(element, showSwiperSlide);
        container.appendChild(showSwiperSlide);
    })
}

const swiperInit = () => {
    const swiper = new Swiper(`.swiper`, {
        direction: `horizontal`,
        loop: false,
        autoHeight: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`
        }
    })
}


// Compile genres list
movies.forEach(movie => {
    movie.genre.forEach(genre => {
        if (!genresArray.includes(genre)) {
            genresArray.push(genre)
        }
    })
})

genresArray.sort().forEach(genre => createGenreButton(genre, genresList))


// Calls
sections.forEach(section => {
    createSectionTitle(section, showSectionsCointainer);
    createSectionSwiper(section, showSectionsCointainer);
})

searchBtn.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
    if (searchContainer.classList.contains("active")) {
        searchBarInput.focus();
        console.log("ciao")
    } else {
        searchBarInput.blur();
    }
})

searchBarInput.addEventListener("input", () => {
    const query = searchBarInput.value;
    const results = searchMovies(query);

    pageTitle.innerText = `Search > ${query}`;

    showCategoriesBtn.classList.remove("active");
    showGridBtn.classList.add("active");

    showSectionsCointainer.classList.add("d-none");
    showGridContainer.classList.remove("d-none");

    showGridContainer.replaceChildren();

    results.forEach(movie => createCard(movie, showGridContainer))
})

searchBarInput.addEventListener("blur", () => {
    searchContainer.classList.remove("active");
})

showCategoriesBtn.addEventListener("click", () => {
    pageTitle.innerText = "TV Shows";

    showCategoriesBtn.classList.add("active");
    showGridBtn.classList.remove("active");

    showSectionsCointainer.classList.remove("d-none");
    showGridContainer.classList.add("d-none");

    showSectionsCointainer.replaceChildren();

    sections.forEach(section => {
        createSectionTitle(section, showSectionsCointainer);
        createSectionSwiper(section, showSectionsCointainer);
    })

    swiperInit();

    const elementToTrack = document.querySelectorAll(".scrollable");
    elementToTrack.forEach(element => {
        observer.observe(element);
    })
})

showGridBtn.addEventListener("click", () => {
    pageTitle.innerText = "TV Shows";

    showCategoriesBtn.classList.remove("active");
    showGridBtn.classList.add("active");

    showSectionsCointainer.classList.add("d-none");
    showGridContainer.classList.remove("d-none");

    showGridContainer.replaceChildren();

    movies.forEach(movie => createCard(movie, showGridContainer));
})

footerLinks.forEach(link => createLink(link, footerLinksContainer));

swiperInit()


// INTERSECTION OBSERVER
const elementToTrack = document.querySelectorAll(".scrollable");

const options = {
    rootMargin: `0px`,
    threshold: 0.5
}

const callBack = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(callBack, options)

elementToTrack.forEach(element => {
    observer.observe(element);
})