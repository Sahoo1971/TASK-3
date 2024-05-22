document.addEventListener('DOMContentLoaded', () => {
    // Sample product data
    const products = [
        {
            name: 'Smartphone',
            price: '₹20,000',
            image: 'product1.jpg',
            description: 'A high-quality smartphone with all the latest features.',
        },
        {
            name: 'Laptop',
            price: '₹50,000',
            image: 'product.jpg',
            description: 'A powerful laptop perfect for work and play.',
        },
        {
            name: 'Smart TV',
            price: '₹40,000',
            image: 'product3.jpg',
            description: 'A smart TV with stunning visuals and smart features.',
        },
    ];

    // Render products
    const productContainer = document.querySelector('.products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button data-name="${product.name}">View Details</button>
        `;
        productContainer.appendChild(productDiv);
    });

    // Modal functionality
    const modal = document.getElementById('product-modal');
    const modalContent = {
        name: document.getElementById('modal-product-name'),
        image: document.getElementById('modal-product-image'),
        price: document.getElementById('modal-product-price'),
        description: document.getElementById('modal-product-description'),
    };

    document.querySelectorAll('.product button').forEach(button => {
        button.addEventListener('click', () => {
            const product = products.find(p => p.name === button.dataset.name);
            modalContent.name.textContent = product.name;
            modalContent.image.src = product.image;
            modalContent.price.textContent = product.price;
            modalContent.description.textContent = product.description;
            modal.style.display = 'block';
        });
    });

    // Close modal
    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form validation
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message!');
        form.reset();
    });

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
