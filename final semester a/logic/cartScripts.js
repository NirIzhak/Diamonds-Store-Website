let cartOpener = document.querySelector("#cart");
let addToCartButtons = document.querySelectorAll(".add-to-cart");
let cartButton = document.querySelector("#cartBut");
cartButton.addEventListener("click", openCart);
let itemArr = [];
let cartItems = document.querySelector(".products-items");


// add item to cart by his ID
const addToCart = (itemId) => {
    const newCart = addItemIdToCart(itemId);
    const cartTotalEl = document.getElementById("cart-total-items");
    cartTotalEl.innerText = newCart.length;
    cleanCart();
    renderCartItems();
}


// print all items that in the cart
const renderCartItems = () => {
    cleanCart();
    const cart = getCart();
    const cartEl = document.getElementById("cart-items");
    for (const itemId of cart) {
        const currentItem = getItem(itemId);
        if (!currentItem) continue;
        let element = `
        <div class="product" id="cart-${itemId}">
        <img src="${currentItem.image}" alt="">
        <p>
        Price:
        <br>
        <span class="price">${currentItem.price}</span>$              
        </p>
        <br>
        <button class="remove-from-cart" onclick="removeItemFromCart(${itemId})"> Remove </button>
        </div>
        `;
        cartEl.innerHTML += element;
    }
    displayCartTotal();
}


// clean the items in the cart
const cleanCart = () => {
    const cartEl = document.getElementById("cart-items");
    cartEl.innerHTML = '';
}

// remove item from cart
function removeItemFromCart(itemId) {
    const deletedItemEl = document.getElementById(`cart-${itemId}`);
    deletedItemEl.remove();
    deleteItemFromCart(itemId);
    renderCartItems();
}


// open mini cart
function openCart() {
    cartOpener.classList.add("cartOpen");
    renderCartItems();
}

// close mini cart
let cartClose = document.querySelector("#close");
cartClose.addEventListener("click", closeCartFunc);

function closeCartFunc() {
    cartOpener.classList.remove("cartOpen");
};


// display the number of items + price in cart
const displayCartTotal = () => {
    const cart = getCart();
    const price = getPrice();
    const cartTotalEl = document.getElementById("cart-total-items");
    const cartTotalPrice = document.getElementById("cart-total-price");
    cartTotalEl.innerText = cart.length;
    cartTotalPrice.innerHTML = getPrice() + "$";
}