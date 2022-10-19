let cartOpener = document.querySelector("#cart");
let addToCartButtons = document.querySelectorAll(".add-to-cart");
let cartButton = document.querySelector("#cartBut");
cartButton.addEventListener("click", openCart);
let cartItems = document.querySelector(".products-items");
let buyAllProductsButton = document.querySelector("#bigCartBuyNowButton");
let removeAllProductsButton = document.querySelector("#bigCartRemoveButton");
let noItemsMessege = document.querySelector(".messege");


// print all items that in the cart
const renderCartItems = () => {
    cleanCart();
    if(getCart().length == 0){
        buyAllProductsButton.style.display = "none";
        removeAllProductsButton.style.display = "none";
        noItemsMessege.style.display = " block";
        }
    const cart = getCart();
    const bigCartEl = document.querySelector(".items-in-cart");
    for (const itemId of cart) {
        const currentItem = getItem(itemId);
        if (!currentItem) continue;
        let element = `
        <div class="big-cart-product" id="cart-${itemId}">
        <img src="${currentItem.image}" alt="">
        <p>
        Price:
        <span class="price">${currentItem.price}</span>$              
        </p>
        quantity: <input type="number" class="quantity-in-cart" value="1">
        <button class="remove-from-cart" onclick="removeItemFromCart(${itemId})"> Remove </button>
        <button class="buy-from-cart"> Buy Now </button>

        </div>
        `;
        bigCartEl.innerHTML += element;
    }
    displayCartTotal();
}


// clean the items in the cart
const cleanCart = () => {
    const bigCartEl = document.querySelector(".items-in-cart");
    bigCartEl.innerHTML = '';
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
renderCartItems();



function removeAllProducts(){
    localStorage.clear();
    let miniCart = document.querySelector("#cart-items");
    let bigCart = document.querySelector(".items-in-cart");
    bigCart.innerHTML = "";
    miniCart.innerHTML = "";
    localStorage.setItem("cart", "[]")
    localStorage.setItem("price", "0")
}