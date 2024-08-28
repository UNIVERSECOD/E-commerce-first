const tableContent = document.querySelector(".table-content")
function fillTable() {
    products.forEach((product) => {

        const rowElement = document.createElement("div")
        rowElement.className = "table-row";
        rowElement.innerHTML = `
         <div class="table-data">${product.id}</div>
         <div class="table-data">${product.title}</div>
         <div class="table-data">${product.description}</div>
         <div class="table-data">${product.price}</div>
         <div class="table-data"></div>
         <div class="table-data"><img width="40" src="../assets/shopping-cart.svg" alt=""></div>
         `;


        rowElement.querySelector("img").addEventListener("click", () => addToCart(product));

        tableContent.append(rowElement);


    });
}

function addToCart(product) {
    console.log(product);
    
}


fillTable();
