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

  total = 0;

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
      <h3>$${product.price}</h3>
      <p>${product.description}</p>
      <button>Add to Cart</button>
      </div>
      `;
      products.appendChild(productItem);
      const buy = productItem.querySelector('button');
      buy.addEventListener('click', this.cartValue.bind(this, product.price));
    });
    app.appendChild(products);
  }

  cartValue(item) {
    this.total += item;
    const cart = new Cart();
    cart.render(this.total);
  }
}
class Cart {
  render(total) {
    const app = document.getElementById('app');
    const cart = document.createElement('div');
    cart.className = 'cart';
    cart.innerHTML = `
    <h2>Total: \$${total}</h2>
    <button>Order Now!</button>
    `;

    app.appendChild(cart);
    console.log(total);
  }
}
class App {
  static init() {
    const list = new ProductList();
    list.render();
  }
}

App.init();
