async function searchProducts() {
  const query = document.getElementById("searchInput").value
  const resultsDiv = document.getElementById("results")
  resultsDiv.innerHTML = "Loading..."
  try {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    if (!res.ok) throw new Error("Failed to fetch products")
    const data = await res.json()
    resultsDiv.innerHTML = ""
    data.products.forEach(p => {
      resultsDiv.innerHTML += `
        <div class="product-card">
          <img src="${p.thumbnail}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>$${p.price}</p>
        </div>`
    })
  } catch (err) {
    resultsDiv.innerHTML = `<p style="color:red">${err.message}</p>`
  }
}

async function loadProducts() {
  const productsDiv = document.getElementById("products")
  productsDiv.innerHTML = "Loading..."
  try {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    if (!res.ok) throw new Error("Failed to fetch products")
    const data = await res.json()
    productsDiv.innerHTML = ""
    data.products.forEach(p => {
      productsDiv.innerHTML += `
        <div class="product-card">
          <img src="${p.thumbnail}" alt="${p.title}">
          <h3>${p.title}</h3>
          <p>$${p.price}</p>
        </div>`
    })
  } catch (err) {
    productsDiv.innerHTML = `<p style="color:red">${err.message}</p>`
  }
}

async function viewProduct() {
  const id = document.getElementById("productId").value
  const detailsDiv = document.getElementById("productDetails")
  detailsDiv.innerHTML = "Loading..."
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) throw new Error("Product not found")
    const p = await res.json()
    detailsDiv.innerHTML = `
      <img src="${p.thumbnail}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p><strong>Price:</strong> $${p.price}</p>
      <p>${p.description}</p>`
  } catch (err) {
    detailsDiv.innerHTML = `<p style="color:red">${err.message}</p>`
  }
}
