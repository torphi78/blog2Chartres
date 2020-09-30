const articles = document.querySelector("#articles-box");

/* Pour ajouter un article sur la page Catégorie, on le rajoute
dans le tableau suivant, avec le titre de l'article, l'image
associée et le lien vers l'article. Ensuite la boite se crée
automatiquement.
*/
const articlesList = [
    {
        title: "Article 2",
        picture: "https://placekitten.com/200/287",
        link: "",
        description: "Description de l'article"
    },
    {
        title: "Article 3",
        picture: "https://placekitten.com/200/139",
        link: "",
        description: "Description de l'article"
    },
    {
        title: "Article 4",
        picture: "https://placekitten.com/200/90",
        link: "",
        description: "Description de l'article"
    },
    {
        title: "Article 5",
        picture: "https://placekitten.com/200/194",
        link: "",
        description: "Description de l'article"
    }
];

function createArticleBox(title, imageUrl, url, description) {
    const articleLink = document.querySelector("a");
    articleLink.setAttribute("href", url);
    articles.appendChild(articleLink);

    const articleBox = document.createElement("div");
    articleBox.classList.add("article-display");
    articleLink.appendChild(articleBox);

    const imgBox = document.createElement("div");
    imgBox.style.backgroundImage = `url(${imageUrl})`;
    imgBox.classList.add("article-img");
    articleBox.appendChild(imgBox);

    const boxBody = document.createElement("div");
    boxBody.classList.add("box-body");
    articleBox.appendChild(boxBody);

    const boxTitle = document.createElement("h2");
    boxTitle.classList.add("card-title");
    boxTitle.innerHTML = `${title}`;
    boxBody.appendChild(boxTitle);

    const articleDescription = document.createElement("p");
    articleDescription.classList.add("article-description");
    boxTitle.innerText = description;
    boxBody.appendChild(articleDescription);
};

for (let i = 0; i < articlesList.length; i++) {
    createArticleBox(articlesList[i].title, articlesList[i].picture, articlesList[i].link, articlesList[i].description);
};

console.log("script is working my boi");

