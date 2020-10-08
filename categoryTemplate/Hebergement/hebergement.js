const articles = document.querySelector("#articles-box");

/* Pour ajouter un article sur la page Catégorie, on le rajoute
dans le tableau suivant, avec le titre de l'article, l'image
associée, le lien vers l'article ainsi que la description qui
n'apparait que sur desktop. La boite se crée automatiquement.
*/

const articlesList = [
    {
        title: 'Appartement "Toits de Chartres"',
        picture: "../assets/ToitsDeChartres/toits-de-chartres2.jpg",
        link: "https://github.com/FlorentLem/Project1-BlogChartres",
        description: "Très bel appartement de 75 m2 à louer. Situé dans un petit immeuble calme, à quelques minutes de la cathédrale et des rues piétonnes. Très bien équipé, le linge, draps et serviettes, sont fournis et inclus. Bibliothèque, documentation, jeux de société [...]"
    },
    {
        title: "Première Classe Chartres Sud",
        picture: "../assets/hotel-premiere-classe.jpg",
        link: "https://github.com/FlorentLem/Project1-BlogChartres",
        description: "Hôtel le plus abordable de Chartres, toutes les chambres comprennent la climatisation, une armoire, un bureau et une télévision à écran plat. Les salles de bains privatives sont même munies d'une douche.[...]"
    },
]

function createArticleBox(title, imageUrl, url, description) {
    const articleLink = document.createElement("a");
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
    boxTitle.classList.add("article-title");
    boxTitle.innerText = title;
    boxBody.appendChild(boxTitle);

    const articleDescription = document.createElement("p");
    articleDescription.classList.add("article-description");
    articleDescription.innerText = description;
    boxBody.appendChild(articleDescription);
};

for (let i = 0; i < articlesList.length; i++) {
    createArticleBox(articlesList[i].title, articlesList[i].picture, articlesList[i].link, articlesList[i].description);
};

console.log("script is working my boi");