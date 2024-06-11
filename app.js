class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  render() {
    return `
            <div class="card">
                <h2>${this.name}</h2>
                <p>Price: $${this.price.toFixed(2)}</p>
                <p>${this.description}</p>
                <button onclick="cart.addProduct('${
                  this.name
                }')">Add to Cart</button>
            </div>
                `;
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(productName) {
    const product = products.find((p) => p.name === productName);
    if (product) {
      this.products.push(product);
      this.renderCart();
    }
  }

  removeProduct(productName) {
    this.products = this.products.filter((p) => p.name !== productName);
    this.renderCart();
  }

  renderCart() {
    const cartElement = document.getElementById("shoppingCart");
    cartElement.innerHTML = "<h2>Shopping Cart</h2>";
    if (this.products.length === 0) {
      cartElement.innerHTML += "<p>The cart is empty</p>";
    } else {
      this.products.forEach((product) => {
        cartElement.innerHTML += `
                            <div class="cart-item">
                                <h3>${product.name}</h3>
                                <p>Price: $${product.price.toFixed(2)}</p>
                                <p>${product.description}</p>
                                <button onclick="cart.removeProduct('${
                                  product.name
                                }')">Remove</button>
                            </div>
                        `;
      });
    }
  }
}

const products = [
  new Product("Chocolate Cake", 10.0, "Delicious chocolate cake"),
  new Product("Ice Cream", 5.0, "Creamy vanilla ice cream"),
  new Product("Apple Pie", 8.0, "Homemade apple pie"),
];

const cart = new ShoppingCart();

const dessertCards = document.getElementById("dessertCards");
dessertCards.innerHTML = ``;
products.forEach((product) => {
  dessertCards.innerHTML += product.render();
});
