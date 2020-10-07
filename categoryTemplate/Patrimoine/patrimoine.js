const articles = document.querySelector("#articles-box");

/* Pour ajouter un article sur la page Catégorie, on le rajoute
dans le tableau suivant, avec le titre de l'article, l'image
associée, le lien vers l'article ainsi que la description qui
n'apparait que sur desktop. La boite se crée automatiquement.
*/

const articlesList = [
    {
        title: "Marché aux Halles",
        picture: "../assets/HallMarket/hall-666887_640.jpg",
        link: "https://github.com/FlorentLem/Project1-BlogChartres",
        description: "Sous une halle de style Baltard, les producteurs de la région chartraine et d’Eure-et-Loir se retrouvent pour vendre ce qu’ils ont de meilleur[...]"
    },
    {
        title: "La Maison Picassiette",
        picture: "../assets/Picassiette/picassiette1.jpg",
        link: "https://github.com/FlorentLem/Project1-BlogChartres",
        description: " Issu d’un milieu modeste, Raymond Isidore s’installe dans une petite maison dans le quartier chartrain de Saint-Chéron. Lors de ses promenades, il prend l'habitude de ramasser des morceaux de verre et de faïence qu'il transforme en [...]"
    },
    {
        title: "Médiathèque L'Apostrophe",
        picture: "../assets/MediathequeApostrophe/apostrophe1.jpeg",
        link: "",
        description: "L'Hôtel des Postes transformé en médiathèque est haut de près de 55m sur 33m de longueur. Le bâtiment en béton armé, à la charpente métallique est composé d’un beffroi à horloge avec encorbellements [...]"
    }
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

