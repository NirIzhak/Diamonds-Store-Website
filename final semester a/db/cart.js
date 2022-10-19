// create the cart array
const initializeCart = () => {
    const cart = getCart();
    if (!cart) {
        localStorage.setItem("cart", "[]")
        localStorage.setItem("price", "0")
    }
}


// read items from cart
const getCart = () => JSON.parse(localStorage.getItem("cart"));
const getPrice = () => JSON.parse(localStorage.getItem("price"));



const getItem = (itemId) => {
    for (const jewl of jewlerys) {
        if (jewl.id == itemId) {
            return jewl;
        }
    }
}

const getItemPrice = (itemId) => {
    for (const jewl of jewlerys) {
        if (jewl.id == itemId) {
            return jewl.price;
        }
    }
}




// create item in cart
const addItemIdToCart = (itemId) => {
    const cart = getCart();
    let price = getPrice();


    if (!cart.includes(itemId)) {
        cart.push(itemId);
        price = parseInt(price) + parseInt(getItemPrice(itemId));
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("price", JSON.stringify(price))
    }
    return cart;
}


// delete item from cart
const deleteItemFromCart = (itemId) => {
    let cart = getCart();
    let price = getPrice();
    const deltedItemIdx = cart.indexOf(itemId);
    if (deltedItemIdx !== -1) {
        cart.splice(deltedItemIdx, 1);
        price = parseInt(price) - parseInt(getItemPrice(itemId));
        updateCart(cart);
        updatePrice(price);
    }
}



// update cart details
const updateCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
}


// update price details
const updatePrice = (newPrice) => {
    localStorage.setItem("price", JSON.stringify(newPrice));
    return newPrice;
}


initializeCart();