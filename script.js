const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

// товары, которые мы будем показывать пользователю, после пременения поиска/фильтров
const searchMatch = [...items];

// шаблон для товара
const cardTemplate = document.querySelector('#item-template');
// переменная с контейнером для товара
const container = document.querySelector('#shop-items');


// функция создания верстки карточки
function createСard(cardItem) {

    const { title, description, tags, price, img } = cardItem;
    // копируем основу товара из шаблона
    const copyCard = cardTemplate.content.cloneNode(true);

    copyCard.querySelector('h1').textContent = title;
    copyCard.querySelector('p').textContent = description;
    copyCard.querySelector('img').src = img;
    copyCard.querySelector('.price').textContent = price;


    // Находим шаблон для тегов
    const tagsContainer = copyCard.querySelector(".tags");

    // добавляем теги карточки товара
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagElement.classList.add('tag');
        tagsContainer.append(tagElement);
    })


    return copyCard;
}



// Текст, если ничего не найдено
const nothingFound = document.querySelector("#nothing-found");

// функция отрисовки карточек
function addСard(items) {

    // Сбрасываем текст "Ничего не найдено" после предыдущего поиска
    nothingFound.textContent = "";
    // И чистим контейнер с товарами на случай, если там что-то было
    container.innerHTML = "";

    // Отрисовываем товары из переданного параметра
    items.forEach((item) => {

        container.append(createСard(item));

    });
    if (!items.length) {
        nothingFound.textContent = "Ничего не найдено";
    }

}

// вызов функции для начальной отрисовки карточек товаров
addСard(items);


const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn');




// функция поиска
function searchCard() {

    // причесываем значение инпута
    const searchString = searchInput.value.trim().toLowerCase();

    // ищем все товары, в title которых есть searchString
    searchMatch = items.filter((element) =>
        element.title.toLocaleLowerCase().includes(searchString)
    );

    // Отрисовываем результаты поиска
    addСard(searchMatch);

}

// обработчик события при клике на кнопку
searchButton.addEventListener("click", searchCard);
// обработчик события при нажатии enter в input
searchInput.addEventListener("search", searchCard);