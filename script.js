const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active'); 
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}


// Navbar toggle
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}


let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-cart').forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const name = product.querySelector('h5').innerText;
    const price = parseFloat(product.querySelector('h4').innerText.replace('$', ''));
    const image = product.querySelector('img').src;

    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
  });
});


