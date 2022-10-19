let products = document.querySelector(".products");
// add all jewlerys to product div
function injectProducts() {
    jewlerys.forEach(jewlery => {
        products.innerHTML += `
        <div class="product" id="${jewlery.id}">
        <h3>${jewlery.name}</h3>
        <img src="${jewlery.image}" alt="" onclick="productDetailsWindowOpen(this)">
        <p>price:
            <span class="price">${jewlery.price}</span>
            <span class="currency">$</span>
        </p>
        <br>
        <button class="add-to-cart" onclick="addToCart(${jewlery.id})"><i class="fa-solid fa-cart-plus"></i></button>
        <button"><i class="fas fa-heart add-to-loved" onclick="lovedItems(this)"></i></button>
    </div>
    `;
    })
}
injectProducts();


// open product details window
function productDetailsWindowOpen(el) {
    let productDiv = el.closest(".product");
    let image = productDiv.querySelector("img");
    let imageSource = image.getAttribute("src");
    let content = `
<div class="product-window-wrapper">
<div class="product-details-window">
   <i class="fa-solid fa-xmark" onclick="productWindowClose()"></i>
        <div class="product-image">
                <img src="${imageSource}" alt="">
        </div>
        <div class="product-description">
            <div class="diamond-des">
                <h4>
                    Diamond: 
                    <br>
                    <span style="color: #eeb490;">18k Rose Gold</span>
                    <br>
                    2.7 Carats
                    <br>
                    <span style="text-decoration: underline;">Color:</span> I
                    <br>
                    <span style="text-decoration: underline;">Clarity:</span> VVS2
                    <br>
                    <span style="text-decoration: underline;">Cut:</span> Excellent
                </h4>
            </div>
            <div class="buy">
                <button style="border: 1px solid black; background-color:rgb(41, 209, 239)">Buy It Now</button>
                <button class="add-to-cart">Add To Cart</button>
            </div>
    </div>
</div>
</div>
`;
    let space = document.querySelector(".product-details-window-space");
    space.innerHTML = content;
    let productWindow = document.querySelector(".product-window-wrapper");
    productWindow.style.display = "block";
};

// close product details window
function productWindowClose() {
    let productWindow = document.querySelector(".product-window-wrapper");
    productWindow.style.display = "none";
};



// mark the heart button in red/black
function lovedItems(el) {
    let productDiv = el.closest(".product");
    let button = productDiv.querySelector(".add-to-loved");
    button.classList.toggle("liked");
};


// filter all jewlerys with diamonds
let diamondFilterButton = document.querySelector("#diamondFilter");
diamondFilterButton.addEventListener("click", diamondFilter);

function diamondFilter() {
    products.innerHTML = "";
    jewlerys.forEach(jewlery => {
        if (jewlery.diamond == "yes")
            products.innerHTML += `
        <div class="product" id="${jewlery.id}">
        <h3>${jewlery.name}</h3>
        <img src="${jewlery.image}" alt="" onclick="productDetailsWindowOpen(this)">
        <p>price:
            <span class="price">${jewlery.price}</span>
            <span class="currency">$</span>
        </p>
        <br>
        <button class="add-to-cart" onclick="addToCart(${jewlery.id})"><i class="fa-solid fa-cart-plus"></i></button>
        <button"><i class="fas fa-heart add-to-loved" onclick="lovedItems(this)"></i></button>
    </div>
    `;
    })
};


// filter all jewlerys without diamonds
let withoutDiamondFilterButton = document.querySelector("#witoutDiamondFilter");
withoutDiamondFilterButton.addEventListener("click", witoutDiamondFilter);

function witoutDiamondFilter() {
    products.innerHTML = "";
    jewlerys.forEach(jewlery => {
        if (jewlery.diamond == "no")
            products.innerHTML += `
        <div class="product" id="${jewlery.id}">
        <h3>${jewlery.name}</h3>
        <img src="${jewlery.image}" alt="" onclick="productDetailsWindowOpen(this)">
        <p>price:
            <span class="price">${jewlery.price}</span>
            <span class="currency">$</span>
        </p>
        <br>
        <button class="add-to-cart" onclick="addToCart(${jewlery.id})"><i class="fa-solid fa-cart-plus"></i></button>
        <button"><i class="fas fa-heart add-to-loved" onclick="lovedItems(this)"></i></button>
    </div>
    `;
    })
};



// filter all jewlerys under 13,000$
let priceFilterButton = document.querySelector("#priceFilter");
priceFilterButton.addEventListener("click", priceFilter);

function priceFilter() {
    products.innerHTML = "";
    jewlerys.forEach(jewlery => {
        if (jewlery.price <= 13000)
            products.innerHTML += `
        <div class="product" id="${jewlery.id}">
        <h3>${jewlery.name}</h3>
        <img src="${jewlery.image}" alt="" onclick="productDetailsWindowOpen(this)">
        <p>price:
            <span class="price">${jewlery.price}</span>
            <span class="currency">$</span>
        </p>
        <br>
        <button class="add-to-cart" onclick="addToCart(${jewlery.id})"><i class="fa-solid fa-cart-plus"></i></button>
        <button"><i class="fas fa-heart add-to-loved" onclick="lovedItems(this)"></i></button>
    </div>
    `;
    })
};



// filter all jewlerys under 13,000$
let allItemsButton = document.querySelector("#allItems");
allItemsButton.addEventListener("click", allItems);

function allItems() {
    products.innerHTML = "";
    jewlerys.forEach(jewlery => {
        products.innerHTML += `
        <div class="product" id="${jewlery.id}">
        <h3>${jewlery.name}</h3>
        <img src="${jewlery.image}" alt="" onclick="productDetailsWindowOpen(this)">
        <p>price:
            <span class="price">${jewlery.price}</span>
            <span class="currency">$</span>
        </p>
        <br>
        <button class="add-to-cart" onclick="addToCart(${jewlery.id})"><i class="fa-solid fa-cart-plus"></i></button>
        <button"><i class="fas fa-heart add-to-loved" onclick="lovedItems(this)"></i></button>
    </div>
    `;
    })
};