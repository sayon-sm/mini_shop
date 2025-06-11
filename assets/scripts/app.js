class ProductItem {
  constructor(name, price, description, imageUrl) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}

class ProductList {
  products = [
    new ProductItem(
      'clock',
      50,
      'a modern clock with minimilist design',
      'assets/images/clock.jpg'
    ),
    new ProductItem(
      'pillow',
      30,
      'a confortable pillow for a good night sleep',
      'assets/images/pillow.jpg'
    ),
  ];

  render() {
    const app = document.getElementById('app');
    const products = document.createElement('ul');
    products.className = 'products-list';
    this.products.forEach((product) => {
      const productItem = document.createElement('li');
      productItem.className = 'product-item';
      productItem.innerHTML = `
      <div class="product-image">
        <img src="${product.imageUrl}" alt="${product.name}">
      </div>
      <div class="product-item__content">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <span>$${product.price}</span>
      </div>
      `;
      products.appendChild(productItem);
    });
    app.appendChild(products);
  }
}

class Cart {
  render() {
    const app = document.getElementById('app');
    const cart = document.createElement('div');
    cart.className = 'cart';
    cart.innerHTML = `
      <h2>Total: \$${1}</h2>
      <button>Order Now!</button>
    `;

    app.appendChild(cart);
  }
}

new Cart().render();
new ProductList().render();
