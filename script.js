const productGrid = document.getElementById("product-grid");
const loader = document.getElementById("loader");

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    loader.textContent = "❌ Failed to load products. Try again later.";
    console.error(error);
  }
}

function displayProducts(products) {
  loader.style.display = "none"; // Hide loader
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>$${product.price.toFixed(2)}</p>
    `;

    productGrid.appendChild(card);
  });
}

// Init
fetchProducts();
