const articles = document.querySelector("#articles-box");

/* Pour ajouter un article sur la page Catégorie, on le rajoute
dans le tableau suivant, avec le titre de l'article, l'image
associée, le lien vers l'article ainsi que la description qui
n'apparait que sur desktop. La boite se crée automatiquement.
*/

const articlesList = [
    {
        title: "Burger King",
        picture: "../assets/restauration/burger-king-chartres.jpg",
        link: "https://github.com/FlorentLem/Project1-BlogChartres",
        description: "Etape de passage obligé pour tout parisien faisant la route vers la Baule ou l'Ile de Ré, ce Burger King est populaire chez les [...]"
    },
    {
        title: "O Tire Bouchon",
        picture: "../assets/restauration/o-tire-bouchon/o-tire-bouchon1.jpg",
        link: "https://github.com/FlorentLem/Project1-BlogChartres",
        description: "C'est une bonne adresse dans une petite rue proche de la cathédrale. La cuisine est bonne et les produits frais. On recommande les quenelles, qui fondent sous [...]"
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

