const tableContent = document.querySelector(".table-content")
function fillTable() {
    const products = getCartItems ();
    products.forEach((product) => {
        const rowElement = document.createElement("div")
        rowElement.className = "table-row";
        rowElement.innerHTML = `
         <div class="table-data">${product.id}</div>
         <div class="table-data">${product.title}</div>
         <div class="table-data">${product.description}</div>
         <div class="table-data">${product.price}</div>
         <div class="table-data"></div>
         <div class="table-data"><img width="20" src="../assets/trash.svg" alt=""></div>
         `;

         rowElement.querySelector("img").addEventListener("click", () => {
            removeFromCart(product);
            rowElement.remove();
    });

        tableContent.append(rowElement);
        
    });

function removeFromCart(product) {
    const cart = getCartItems();
    const productIdx = cart.findIndex((p)=> p.id === product.id);
    if(productIdx !== -1){
        cart.splice(productIdx, 1);
        setCart(cart);
    }
}


function getCartItems(){
    return JSON.parse(localStorage.getItem("cart")) ?? [];
    
}

function setCart(cart){
    localStorage.setItem("cart", JSON.stringify(cart));
}

fillTable();




     
    // // localStorage.setItem("product", JSON.stringify([product2]))
    // const productJson = localStorage.getItem("products");
    // const products = JSON.parse(productJson);
    // console.log(products);
    // products.push(product2);
    // localStorage.setItem("products", JSON.stringify(products));

