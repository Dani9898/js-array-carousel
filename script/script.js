
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

// 2) // cliccare e dare active a quello dopo e toglierlo a quello prima. Per trackare quello active si puo fare con queryselector .item.active.
// se la posizione arriva al valore della lunghezza dell'array delle classi allora portarla a 0.

document.getElementsByClassName("item")[0].classList.add("active");
document.getElementsByClassName("thumb")[0].classList.add("active");



let activePosition = 0;
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", 
    function() {

        // se la posizione dell'active è in posizione 4 allora active position = 0 altrimenti active position ++
         if (activePosition === items.length - 1 ) {
             activePosition = 0;
         } else {
             activePosition++;
         }
   
        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");
        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active"); 
          
    }
);

prev.addEventListener("click", 
    function() {

        // se la posizione dell'active è 0 allora active position = 4 altrimenti active position --

        if (activePosition === 0) {
            activePosition = items.length - 1;
        } else {
            activePosition--;
        }

        document.querySelector(".item.active").classList.remove("active");
        document.getElementsByClassName("item")[activePosition].classList.add("active");
        document.querySelector(".thumb.active").classList.remove("active");
        document.getElementsByClassName("thumb")[activePosition].classList.add("active"); 
          
    }
);




