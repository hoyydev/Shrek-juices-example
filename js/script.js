// Seach 


// add to cart

let carts = document.querySelectorAll('.round-black-btn');

let products = [
    {
        name : 'Apple',
        price : 39,
        tag : 'Apple',
        inCart : 0,
    },
    {
        name : 'Citrus Superstar',
        price : 39,
        tag : 'CitrusSuperstar',
        inCart : 0,
    },
    {
        name : 'Grape Fruit',
        price : 39,
        tag : 'GrapeFruit',
        inCart : 0,
    },
    {
        name : 'Orange',
        price : 39,
        tag : 'Orange',
        inCart : 0,
    },
    {
        name : 'Pine Apple',
        price : 39,
        tag : 'Pineapple',
        inCart : 0,
    },
    {
        name : 'The Killer',
        price : 39,
        tag : 'TheKiller',
        inCart : 0,
    },
    {
        name : 'Water Melon',
        price : 39,
        tag : 'Watermelon',
        inCart : 0,
    },
    {
        name :'Young Thai Coconut',
        price : 39,
        tag : 'YoungThaiCoconut',
        inCart : 0,
    }

    
]

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadNumber(){
    let productNumber = localStorage.getItem('cartNumbers');

    if(productNumber){
        document.querySelector('.d-flex span').textContent = productNumber;
    }
}

function cartNumbers(product){
    
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);

    if( productNumber) {
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.querySelector('.d-flex .qtycart').textContent = productNumber + 1;
    }else{
        localStorage.setItem('cartNumbers' , 1);
        document.querySelector('.d-flex .qtycart').textContent = 1;
    }
    setItem(product);
}

function setItem(product){

    let CartItems = localStorage.getItem('productsInCart');
    CartItems = JSON.parse(CartItems);

    if(CartItems != null) {
        if(CartItems[product.tag] == undefined){
            CartItems = {
                ...CartItems,
                [product.tag]: product
            }
        }
        CartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;
        CartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(CartItems));
}

function totalCost(product) {
    // console.log('the product price is ', product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log('my cartCost is', cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }else{
        localStorage.setItem('totalCost', product.price);
    }

}

function displayCart(){
    let CartItems = localStorage.getItem('productsInCart');
    CartItems = JSON.parse(CartItems);
    let productContainer = document.querySelector('#order');

    if(CartItems != null){
        document.querySelector('.no-item').style.display = "none";
    }else{
        document.querySelector('.product-container').style.display = "none"
    }
    let cartCost = localStorage.getItem('totalCost');
    console.log(CartItems)
    if(CartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(CartItems).map(item => {
            productContainer.innerHTML += `
            <div class="main d-flex p-3  mt-5">
             <div class="col-md-3 ">
                 <img src="img/Fruit Juice/${item.tag}.png" class="w-50"/>
             </div>
             <div id="title" class="col-md-3 d-flex flex-wrap align-content-center"
                 <h6 style="font-size:25px;">${item.name}</h6>
             </div>
             <div class=" col-md-3 d-flex flex-wrap align-content-center">
            <div class="product-count">
                <form action="#" class="display-flex">
                    <div class="qtyminus">-</div>
                    <input type="text" name="quantity" value="${item.inCart}" class="qty">
                    <div class="qtyplus">+</div>
                </form>
            </div>
             </div>
             <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price"> 
                 <h4 class=" mt-2 d-flex"><span class="cart_item_price">$${item.price}.00</span></h4>
             </div>
             <div class="col-md-1 d-flex flex-wrap align-content-center"> 
                 <span class="close" style="cursor: pointer; font-size:25px;">&times;</span>
             </div>
         </div>
            ` 
        });

        productContainer.innerHTML +=`
        <div class="total d-flex justify-content-md-end mt-5">
             <div class="col-md-10"><h3>Total : </h3></div>
             <div class="col-md-2"><h3>$${cartCost}.00 </h3></div>
         </div>
         <div class="discount d-flex justify-content-md-end mt-5">
            <div class="col-md-10"><h3>Discount Code :</h3></div>
            <div class="col-md-2"></div>
         </div>
        `
    }
}


onLoadNumber();
displayCart();

// remove cartItems 
let remove_cart = document.getElementsByClassName("close");
for (let i = 0; i < remove_cart.length; i++) {
  let button = remove_cart[i]
  button.addEventListener("click", function () {
    let button_remove = event.target
    button_remove.parentElement.parentElement.remove()
  })
  
}

//  update cartItems

function updateCart(){
    let cart_item = document.getElementById("#order");
    let cart_row = document.getElementsByClassName("main");
    
}