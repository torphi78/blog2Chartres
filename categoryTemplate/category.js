const articles = document.querySelector(".articles-box");

/* Pour ajouter un article sur la page Catégorie, on le rajoute
dans le tableau suivant, avec le titre de l'article, l'image
associée et le lien vers l'article. Ensuite la boite se crée
automatiquement.
*/
const articlesList = [
    {
        title: "Article 2",
        picture: "https://placekitten.com/200/287",
        link: ""
    },
    {
        title: "Article 3",
        picture: "https://placekitten.com/200/139",
        link: ""
    },
    {
        title: "Article 4",
        picture: "https://placekitten.com/200/90",
        link: ""
    },
    {
        title: "Article 5",
        picture: "https://placekitten.com/200/194",
        link: ""
    }
];

function createArticleBox(title, imageUrl) {
    const articleBox = document.createElement("div");
    articleBox.classList.add("article-display");
    articles.appendChild(articleBox);

    const imgBox = document.createElement("div");
    imgBox.style.backgroundImage = `url(${imageUrl})`;
    imgBox.classList.add("article-img");
    articleBox.appendChild(imgBox);

    const boxBody = document.createElement("div");
    boxBody.classList.add("box-body");
    articleBox.appendChild(boxBody);

    const boxTitle = document.createElement("h2");
    boxTitle.classList.add("card-title");
    cardTitle.innerHTML = `${title}`;
    cardBody.appendChild(cardTitle);