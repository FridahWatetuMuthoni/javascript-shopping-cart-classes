# Shopping Cart

To create a shopping cart using Object-Oriented Programming (OOP) in JavaScript, we can define classes for our products and the cart itself. This approach encapsulates the cart's functionality and provides a clear structure for managing products and the cart's state. Here is a comprehensive example:

### HTML Structure

First, let's set up the basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <style>
        /* Add some basic styling */
        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            margin: 8px;
            text-align: center;
        }
        .cart {
            margin-top: 20px;
        }
        .cart-item {
            margin: 8px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div id="dessertCards"></div>
    <div id="shoppingCart" class="cart"></div>

    <script>
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
                        <button onclick="cart.addProduct('${this.name}')">Add to Cart</button>
                    </div>
                `;
            }
        }

        class ShoppingCart {
            constructor() {
                this.products = [];
            }

            addProduct(productName) {
                const product = products.find(p => p.name === productName);
                if (product) {
                    this.products.push(product);
                    this.renderCart();
                }
            }

            removeProduct(productName) {
                this.products = this.products.filter(p => p.name !== productName);
                this.renderCart();
            }

            renderCart() {
                const cartElement = document.getElementById('shoppingCart');
                cartElement.innerHTML = '<h2>Shopping Cart</h2>';
                if (this.products.length === 0) {
                    cartElement.innerHTML += '<p>The cart is empty</p>';
                } else {
                    this.products.forEach(product => {
                        cartElement.innerHTML += `
                            <div class="cart-item">
                                <h3>${product.name}</h3>
                                <p>Price: $${product.price.toFixed(2)}</p>
                                <p>${product.description}</p>
                                <button onclick="cart.removeProduct('${product.name}')">Remove</button>
                            </div>
                        `;
                    });
                }
            }
        }

        const products = [
            new Product('Chocolate Cake', 10.00, 'Delicious chocolate cake'),
            new Product('Ice Cream', 5.00, 'Creamy vanilla ice cream'),
            new Product('Apple Pie', 8.00, 'Homemade apple pie')
        ];

        const cart = new ShoppingCart();

        const dessertCards = document.getElementById('dessertCards');
        dessertCards.innerHTML = ``;
        products.forEach(product => {
            dessertCards.innerHTML += product.render();
        });
    </script>
</body>
</html>
```

### Explanation

1. **HTML Structure**:
    - We have two main divs: `#dessertCards` for displaying the product cards and `#shoppingCart` for displaying the shopping cart.

2. **JavaScript**:
    - **Product Class**:
        - The `Product` class has a constructor that takes `name`, `price`, and `description` as parameters.
        - The `render` method returns the HTML for a product card, including an "Add to Cart" button that calls `cart.addProduct`.
    - **ShoppingCart Class**:
        - The `ShoppingCart` class manages an array of products.
        - The `addProduct` method adds a product to the cart based on the product name.
        - The `removeProduct` method removes a product from the cart based on the product name.
        - The `renderCart` method updates the cart's HTML to show the current products in the cart.
    - **Initialization**:
        - We create an array of `Product` instances.
        - We create an instance of `ShoppingCart`.
        - We populate the `#dessertCards` div with the HTML for each product by calling the `render` method on each `Product` instance.

This code provides a simple shopping cart system where products can be added and removed from the cart, with the cart's contents dynamically updated in the HTML.