

document.addEventListener('DOMContentLoaded', function () {
    // Elements
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    let header = document.querySelector('.header-2'); // Change as needed

    // Scroll and click listeners
    menu.addEventListener('click', () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');

        if (window.scrollY > 150) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    };

    // Countdown Timer
    let countDate = new Date('June 1, 2024 00:00:00').getTime();
    function CountDown() {
        let now = new Date().getTime();
        let gap = countDate - now;

        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        let d = Math.floor(gap / (day));
        let h = Math.floor((gap % (day)) / (hour));
        let m = Math.floor((gap % (hour)) / (minute));
        let s = Math.floor((gap % (minute)) / (second));

        document.getElementById('day').innerText = d;
        document.getElementById('hour').innerText = h;
        document.getElementById('minute').innerText = m;
        document.getElementById('second').innerText = s;
    }
    setInterval(CountDown, 1000);

    // Cart Functions
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');

    function updateCart() {
                cartItemsContainer.innerHTML = '';
                let total = 0;
                let itemCount = 0;
        
                cart.forEach((item, index) => {
                    total += item.price * item.quantity;
                    itemCount += item.quantity;
        
                    const itemElement = document.createElement('div');
                    itemElement.className = 'cart-item';
                    itemElement.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h4 style="margin: 0;">${item.name}</h4>
                            <button class="remove-item" data-index="${index}" style="background-color: #218838; color: white; margin-left: 10px; width: 90px; height: 30px; border-radius: 8px; border: none; cursor: pointer;text-align:center">Remove</button>
                        </div>
                        <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
                        <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
                    `;
                    
                    cartItemsContainer.appendChild(itemElement);
                });
        
                cartTotalElement.textContent = total.toFixed(2);
                cartCountElement.textContent = itemCount;
        
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        

    // Add to cart buttons
 
    const addToCartButtons = document.querySelectorAll('.product .btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            openConfirmationModal(this);
        });
    });
        // Remove item from cart
        cartItemsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('remove-item')) {
                const index = event.target.getAttribute('data-index');
                cart.splice(index, 1);
                updateCart();
            }
        });
    
        // Clear all items in cart
        const clearCartButton = document.getElementById('clear-cart');
        clearCartButton.addEventListener('click', function () {
            cart = [];
            updateCart();
        });

    // Open and close cart modal
    document.getElementById('cart-icon').addEventListener('click', () => {
        cartModal.style.display = 'block';
    });

    document.getElementById('close-cart').addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Confirmation Modal
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeConfirmation = document.getElementById('close-confirmation');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');
    const confirmationIcon = document.getElementById('confirmation-icon');
    const successmessage = document.getElementById('successmessage');

    let selectedProduct = null;

    function openConfirmationModal(product) {
        selectedProduct = product;
        confirmationModal.style.display = 'flex';
    }

    function closeConfirmationModal() {
        confirmationModal.style.display = 'none';
    }

    confirmYes.addEventListener('click', function() {
        if (selectedProduct) {
            const box = selectedProduct.closest('.box');
            const name = box.querySelector('h3').textContent;
            const price = parseFloat(box.querySelector('.price').textContent.replace('$', '').split(' ')[0]);
            const quantity = parseInt(box.querySelector('.quantity input').value);

            // Add item to cart
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ name, price, quantity });
            }

            confirmationIcon.style.display = 'block';
            successmessage.style.display='block';

            setTimeout(() => {
                confirmationIcon.style.display = 'none';
                successmessage.style.display = 'none';
            }, 1000);
            updateCart();
        }
        closeConfirmationModal();
    });

    confirmNo.addEventListener('click', closeConfirmationModal);
    closeConfirmation.addEventListener('click', closeConfirmationModal);

    // Initialize cart on page load
    updateCart();
});












