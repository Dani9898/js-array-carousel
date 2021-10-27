
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
let item = "";
let thumb = "";
const next = document.getElementById("next");
const prev = document.getElementById("prev");

for (let i = 0; i < items.length; i++) {
    item += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}"></img>
    <div class="text">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
    </div>
    </div>`;
    thumb += `
    <div class="thumb"><img src="${items[i]}" alt="${title[i]}"></div>`
}

contItems.innerHTML = item;
contThumbs.innerHTML += thumb;

// 2) al click del pulsante next => next.addEventListener (click), 
// selezionare il div con active attuale, togliere la classe active e darlo a quello dopo. => variabile per la posizione
// se l'active lo ha il div ultimo => if (activePosition > document.getElementsByClassName("item").length )
// la variabile activePosition torna a 0

let itemActive = document.getElementsByClassName("item");
let thumbActive = document.getElementsByClassName("thumb");
itemActive[0].classList.add("active");
thumbActive[0].classList.add("active");


let activePosition = 0;

document.getElementById("next").addEventListener("click", 
    function() {
         activePosition++;

        document.querySelector(".item.active").classList.remove("active");
        document.querySelector(".thumb.active").classList.remove("active");
        
        if (activePosition == 5) {
            activePosition = 0;
        }

        document.getElementsByClassName("item")[activePosition].classList.add("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active");
    }
);


// cliccare e dare active a quello dopo e toglierlo a quello prima. Per trackare quello active si puo fare con queryselector .item.active.
// quando arriva all'ultimo div cioe quando activePosition ha valore della lunghezza dell'array della classe item/thumb allora al click togliere l'active a quello nella posizione lungo = array classi - 1

