let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Acer Aspire 5 A514-55-3361 (Haze Gold)',
        image: 'img/pro1.jpg',
        price: 29500,
    },
    {
        id: 2,
        name: 'Lenovo Ideapad Gaming 3 16IAH7 82SA001CPH',
        image: 'img/pro2.jpg',
        price: 65500,
    },
    {
        id: 3,
        name: 'HP Envy X360 2in1 Laptop 13-BF0109TU',
        image: 'img/pro3.jpg',
        price: 75000,
    },
    {
        id: 4,
        name: 'Asus Vivobook E1504FA-L1412WS',
        image: 'img/pro4.jpg',
        price: 40999,
    },
    {
        id: 5,
        name: 'CHUWI Corebook X I3',
        image: 'img/pro5.jpg',
        price: 24499,
    },
    {
        id: 6,
        name: 'Gigabyte G5 MF F2VN333SH',
        image: 'img/pro6.jpg',
        price: 56999,
    },
    {
        id: 7,
        name: 'Dell Inspiron 15 3520',
        image: 'img/pro7.jpg',
        price: 30399,
    },
    {
        id: 8,
        name: 'Asus Zenbook 14X UX5401ZAS-KN016WS',
        image: 'img/pro8.jpg',
        price: 89899,
    },
    {
        id: 9,
        name: 'Lenovo Yoga Slim 7 Pro X 14ARH7 82TL0088PH',
        image: 'img/pro9.jpg',
        price: 95000,
    },
    {
        id: 10,
        name: 'Huawei Matebook B3-410',
        image: 'img/pro10.jpg',
        price: 35000,
    },
    {
        id: 11,
        name: 'MSI Modern 14 C11M-080PH',
        image: 'img/pro11.jpg',
        price: 26500,
    },
    {
        id: 12,
        name: 'Asus TUF Gaming F15 FX506HC-HN083W',
        image: 'img/pro12.jpg',
        price: 57499,
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title"> ${value.name}</div>
            <div class="price">₱ ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">View</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div> ${value.name}</div>
                <div>₱ ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
