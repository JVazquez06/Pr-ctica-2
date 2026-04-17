const form = document.getElementById('formProducto');
const tablaBody = document.querySelector('#listaProductos tbody');
const tablaContainer = document.getElementById('listaProductos');
const btnToggle = document.getElementById('btnToggleLista');
const botonesFilter = document.querySelectorAll('.filter-btn');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('inputID').value;
    const productName = document.getElementById('inputProduct').value;
    const category = document.getElementById('inputCategory').value;

    if(!id || !productName || category === 'Selecciona la categoria'){
        return;
    }
    
    const newProduct = {id, productName, category};
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));
    form.reset();
    showProducts();
});

function showProducts(filter='Todos') {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    if(filter !== 'Todos'){
        prodcuts = prodcuts.filter(p => p.category === filter);
    }
    tablaBody.innerHTML = ``;

    products.forEach(p => {
        const row = `
            <tr>
                <td>${p.id}</td>
                <td>${p.productName}</td>
                <td>${p.category}</td>
            </tr>
        `;
        tablaBody.innerHTML += row;
    });
}

btnToggle.addEventListener('click', () => {
    if (tablaContainer.style.display === "none") {
        tablaContainer.style.display = "table";
    } else {
        tablaContainer.style.display = "none";
    }
});
