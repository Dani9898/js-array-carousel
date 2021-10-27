
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// 1) creare 5 div class item con dentro un img e un div con un h2 e un p, creare 5 div class thumb con dentro un l'img => for 
//  il contenuto dell' img, h2, p e img è uguale al contenuto degli array in posizione corrispondente al numero del div. => Xvettore[i]

const contItems = document.getElementById("items");
const contThumbs = document.getElementById("thumbs");

for (let i = 0; i < items.length; i++) {
    contItems.innerHTML += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}"></img>
    <div class="text">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
    </div>
    </div>`;
    contThumbs.innerHTML += `
    <div class="thumb"><img src="${items[i]}" alt="${title[i]}"></div>`
}

document.querySelector(".item").classList.add("active");
document.querySelector(".thumb").classList.add("active");






