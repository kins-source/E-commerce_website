  // Use the global window object to expose the store for easy debugging and interaction
        window.store = null; 

        // --- PRODUCT DATA DEFINITIONS (FIXED AND ENHANCED) ---
        // This is the fixed product data from your original script, slightly enhanced.
       const productDefinitions = { 
    Electronics: [
        { name: 'AuraSound Elite ANC Headphones', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgFoJHfcSmrgR_2mg1eTxkbq6OVCz4HcqvrA&s', priceUSD: 79, comparePriceUSD: 129, description: 'Over-ear Bluetooth headphones with noise isolation and 20h battery.' },
        { name: 'SonicFlow Pro Wireless Headset', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIdaWZXTEUGCVR-rCiiT0Eqiv28trWj2Fh-w&s', priceUSD: 99, comparePriceUSD: 149, description: 'Lightweight wireless headphones with built-in mic and comfortable fit.' },
        { name: 'NovaTech X9 128GB Smartphone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTZaxmUtY6xvb9Z-MmF7QMXtoRPsCQtTPQXA&s', priceUSD: 699, comparePriceUSD: 899, description: '6.5" display smartphone with multi-lens camera and 128GB storage.' },
        { name: 'ZenBook 14 Ultra-Thin Laptop', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrGFIJ_YeN45PdjpvJI2IuwvoguqC_l4CMQA&s', priceUSD: 799, comparePriceUSD: 999, description: '14" ultrabook with SSD and 8GB RAM for portable productivity.' },
        { name: 'PulseFit Fitness Smartwatch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYIbYRhkJYavARBAlWfht-yzPXusUDXfrLw&s', priceUSD: 199, comparePriceUSD: 249, description: 'Fitness-oriented smartwatch with heart-rate monitoring.' },
        { name: 'PocketBoom 10Hr Bluetooth Speaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSd1rB4mD1lTCHN9L1uDFyxAThnlKBcYKxgA&s', priceUSD: 49, comparePriceUSD: 79, description: 'Portable Bluetooth speaker with 10-hour battery.' },
        { name: 'AeroMini 4K GPS Drone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKzVoYNwwVLAYsS6ieTg2isfJKnNXnI247w&s', priceUSD: 299, comparePriceUSD: 399, description: 'Compact drone with 4K camera and GPS stabilization.' },
        { name: 'LensPro Mirrorless Enthusiast Camera', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeSUUWP4j-oRmqZZTuWgGfmhJxiDqnLe2rMQ&s', priceUSD: 449, comparePriceUSD: 549, description: 'Mirrorless camera with interchangeable lenses for enthusiasts.' },
        { name: 'MediaPad 10-inch Wi-Fi Tablet', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdOB9iJhi4AS34Qnt3Dc-Fm_z83kd_PHzSw&s', priceUSD: 329, comparePriceUSD: 429, description: '10" tablet with Wi-Fi, lightweight design for media consumption.' },
    ],
    Clothing: [
        { name: 'LuxeComfy Classic Cotton Tee', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcCyONZV_1TRqolok8G3_xW6tfG_y_J5gYQ&s', priceUSD: 19, comparePriceUSD: 29, description: 'Soft cotton tee with classic fit, available in multiple colors.' },
        { name: 'FlexDenim Slim-Fit Stretch Jeans', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGUSzUnreRb3BqejaJgPRFCHJCnYShi9Cww&s', priceUSD: 49, comparePriceUSD: 69, description: 'Slim-fit denim jeans with stretch for maximum comfort.' },
        { name: 'Willow Casual A-line Dress', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj61iPK3AJUf8XhM4ZJRohqNWNUOQjHZHb8TafEHQVoydezGxDfcQWZsGzu9df708b4Ow&usqp=CAU', priceUSD: 79, comparePriceUSD: 109, description: 'Casual A-line dress in lightweight fabric, perfect for summer.' },
        { name: 'RibKnit Cozy Crewneck Sweater', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnfdXdKIOjZy5au9mE53T215ZBx_E7_Vsfg&s', priceUSD: 45, comparePriceUSD: 65, description: 'Cozy knit sweater with ribbed cuffs and soft fleece interior.' },
        { name: 'BreezeGuard Lightweight Windbreaker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifiH2li7zVXJXfm8EMVrtpEgK-gMRG4MZNg&s', priceUSD: 99, comparePriceUSD: 149, description: 'Lightweight windbreaker with water resistance and hood.' },
        { name: 'LoungeDraw Casual Cotton Shorts', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPVPv6n1SwBOy_16JcklnQXSE2pATtiSqI6a3wwu3MWRqEjqyPoH1-WTjvo7zNA7hfu8&usqp=CAU', priceUSD: 29, comparePriceUSD: 39, description: 'Casual cotton shorts with drawstring waist for ultimate relaxation.' },
        { name: 'FleeceCloud Pullover Hoodie', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4pmMJqeFz4vCpLyNOBZNw_8g8B2pm7ogTzw&s', priceUSD: 49, comparePriceUSD: 79, description: 'Pullover hoodie with soft fleece interior and kangaroo pocket.' },
        { name: 'Piqué Classic Breathable Polo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_etyIxJW6_cRx1cxAslsVq05XbVHuN8VJjQ&s', priceUSD: 29, comparePriceUSD: 49, description: 'Classic polo with breathable pique knit for a smart-casual look.' },
        { name: 'GalaHour Elegant Evening Gown', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsRezh0WXKTE6-j6jggxQ00QKJJI38uBArg&s', priceUSD: 129, comparePriceUSD: 199, description: 'Elegant evening dress with a stunning silhouette.' },
    ],
    'Home & Kitchen': [
        { name: 'DailyBrew 12-Cup Drip Maker', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtwWQIYPDLkAXoi67q_fsgdvXBKv9XFV2cw&s', priceUSD: 59, comparePriceUSD: 79, description: 'Drip coffee maker with 12-cup capacity and programmable timer.' },
        { name: 'SmoothMix 700W Countertop Blender', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRLbb4ueJTY29QYkoGVV6pA0yKikoTqcnxQ&s', priceUSD: 49, comparePriceUSD: 69, description: 'Countertop blender with 700W motor for smoothies and sauces.' },
        { name: 'QuickToast 2-Slice Toaster', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Us4KIJpgeXu4MMmB0l_h4o7lGD8LnE5UQA&s', priceUSD: 29, comparePriceUSD: 39, description: '2-slice toaster with adjustable browning settings and defrost function.' },
        { name: 'CounterQuick 700W Microwave', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnBieHEgsD_YLPd5PEiZCB28SeJuCC3wlnQ&s', priceUSD: 89, comparePriceUSD: 119, description: 'Compact countertop microwave with quick-cook functions.' },
        { name: 'NonStick 10-Piece Cookware Set', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WThvVIL0VI3E0JlVTApn2f6d_naQM3r4mg&s', priceUSD: 99, comparePriceUSD: 149, description: '10-piece nonstick cookware set for everyday cooking needs.' },
        { name: 'BlockBasic 6-Piece Stainless Knife Set', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ73Zpu54jCXKIAhB4zr7VhIq3Sbkqxu9QeQ&s', priceUSD: 49, comparePriceUSD: 79, description: '6-piece stainless steel knife set with wooden block.' },
        { name: 'FryQuick 4-Quart Digital Air Fryer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlIHiHXHx_aLs34HN82PCtMXRT7u6_cB2ew&s', priceUSD: 79, comparePriceUSD: 119, description: '4-quart digital air fryer with preset cooking programs.' },
        { name: 'BakerStar 5-Quart Stand Mixer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4q-VlAeFuO3xzJOJYWhe66Q0gHDTWFq9RQ&s', priceUSD: 199, comparePriceUSD: 299, description: '5-quart stand mixer for baking and mixing tasks.' },
        { name: 'ChillBase Top-Freezer Refrigerator', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTpVqo_0jcon6X5nQV0vuZMfCLemekwAbrA&s', priceUSD: 599, comparePriceUSD: 799, description: 'Top-freezer refrigerator with adjustable shelves.' },
    ],
    Books: [
        { name: 'The Unseen Threads (Modern Lit)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwe9xIQTqN7YbwUthsUG4AVHNjQ0sDTT5LgA&s', priceUSD: 14, comparePriceUSD: 18, description: 'Modern literary novel exploring relationships and identity.' },
        { name: 'Atomic Habits: The Productivity Guide', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5eUjkhd0b5X5Wwz5V3BHhoLdDKsvs3dKbg&s', priceUSD: 12, comparePriceUSD: 16, description: 'Practical self-help guide focused on habits and productivity.' },
        { name: 'Simple Suppers: Weeknight Recipes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT36VCU4VBj15kaJCJBa2ntpByMs0Wie7cB-Q&s', priceUSD: 24, comparePriceUSD: 30, description: 'Beginner-friendly cookbook with simple weeknight recipes.' },
        { name: 'Foundations of Computer Science', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcycy_36gv-asWxdCIQfN94rjTowuYfcAt1Q&s', priceUSD: 89, comparePriceUSD: 120, description: 'Comprehensive textbook for undergraduate courses.' },
    ],
    Beauty: [
        { name: 'HydroShield Daily Cream SPF 30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgg12R9Wn7Jtwv5cxZscOBCOjFYIT09O3iw&s', priceUSD: 24, comparePriceUSD: 34, description: 'Hydrating daily face cream with SPF protection.' },
        { name: 'GentleClean Daily Normal Hair Shampoo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqy399l4h8xrN6KznD77Jz8aemrrp8m8HLw&s', priceUSD: 12, comparePriceUSD: 16, description: 'Daily shampoo for normal hair with gentle cleansing.' },
        { name: 'Essential Starter Makeup Kit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXbavWu340ekiLr6ltZhZUfFaa6Y6MB8Thxg&s', priceUSD: 29, comparePriceUSD: 45, description: 'Starter makeup kit with essential palettes and brushes.' },
    ],
    Sports: [
        { name: 'CloudRun Cushioned Mesh Running Shoes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWi1wCoXf_LQg-UEPB5fUsMTZEcwzGmySGw&s', priceUSD: 69, comparePriceUSD: 99, description: 'Cushioned running shoes with breathable mesh upper.' },
        { name: 'FlexiMat Lightweight Non-Slip Yoga Mat', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyic_VMFyugghch_hIiRsmqPOWSwwJWbWUXQ&s', priceUSD: 19, comparePriceUSD: 29, description: 'Lightweight yoga mat with non-slip surface.' },
        { name: 'WeightMax Adjustable Dumbbell Set', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb1G321fYXpvd8EwTGtP2LTj1T8IWDp8law&s', priceUSD: 29, comparePriceUSD: 49, description: 'Set of adjustable dumbbells for home workouts.' },
        { name: 'OfficialPro Indoor/Outdoor Basketball', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PmYofUTujaZTzaFgqoKp2nhqCj4zr_QUUw&s', priceUSD: 25, comparePriceUSD: 35, description: 'Official size indoor/outdoor basketball with grip.' },
    ],
};


        const generateAllProducts = () => {
            let products = [];
            let id = 1;

            Object.keys(productDefinitions).forEach(category => {
                const categoryList = productDefinitions[category];
                // For a 250+ count, loop through the list several times, modifying slightly
                for (let j = 0; j < 6; j++) { // Loop 6 times
                    categoryList.forEach(p => {
                        const basePrice = p.priceUSD;
                        const price = basePrice - (Math.floor(Math.random() * 5) * (j % 2)); // slight variation/sale simulation
                        const comparePrice = p.comparePriceUSD;
                        const rating = (Math.floor(Math.random() * 15) + 30) / 10; // 3.0 to 4.5
                        const reviews = Math.floor(Math.random() * 500) + 10;
                        
                        products.push({
                            id: id++,
                            name: p.name + (j > 0 ? ` (Gen ${j})` : ''),
                            description: p.description,
                            price: price > 5 ? price : 5, // Minimum price of $5
                            comparePrice: comparePrice,
                            // Use the unique image URL from the definition
                            image: p.image + `&variation=${id}`, 
                            category: category,
                            rating: rating,
                            reviews: reviews,
                            isOnSale: price < comparePrice || Math.random() < 0.2
                        });
                    });
                }
            });
            // Shuffle and cap at 250 for display
            return products.sort(() => Math.random() - 0.5).slice(0, 250); 
        };

        // --- CORE APPLICATION CLASS ---
        class EcommerceStore {
            constructor() {
                this.products = generateAllProducts();
                this.cart = JSON.parse(localStorage.getItem('cart')) || [];
                this.user = JSON.parse(localStorage.getItem('user')) || null;
                this.currentPage = 'home';
                this.activeProductId = null; // Track which product is being viewed
                this.init();
            }

            init() {
                this.bindEvents();
                this.updateUI();
                this.loadProducts();
                this.renderDeals();
                this.startHeroSlider();
                this.startCountdown();
            }

            // --- State Management ---
            setState(newState) {
                Object.assign(this, newState);
                this.updateUI();
                this.saveState();
            }

            saveState() {
                localStorage.setItem('cart', JSON.stringify(this.cart));
                if (this.user) {
                    localStorage.setItem('user', JSON.stringify(this.user));
                } else {
                    localStorage.removeItem('user');
                }
            }

            // --- UI Updates ---
            updateUI() {
                this.updateCartCount();
                this.updateAuthUI();
                this.updatePage();
                this.updateProfile();
            }

            updateCartCount() {
                const count = this.cart.reduce((total, item) => total + item.quantity, 0);
                const cartCountEl = document.querySelector('.cart-count-badge');
                if (cartCountEl) {
                    cartCountEl.textContent = count;
                    cartCountEl.classList.toggle('hidden', count === 0);
                }
            }

            updateAuthUI() {
                const displayNameEl = document.getElementById('user-display-name');
                const accountStatusEl = document.getElementById('account-status');
                const authActionBtn = document.getElementById('auth-action-btn');
                const logoutLink = document.getElementById('logout-link');

                if (this.user) {
                    displayNameEl.textContent = this.user.name;
                    accountStatusEl.textContent = 'Hello, ' + this.user.name;
                    authActionBtn.style.display = 'none';
                    logoutLink.classList.remove('hidden');
                } else {
                    displayNameEl.textContent = 'Sign in';
                    accountStatusEl.textContent = 'Account';
                    authActionBtn.style.display = 'block';
                    authActionBtn.textContent = 'Sign In';
                    logoutLink.classList.add('hidden');
                }
            }

            updateProfile() {
                if (this.user) {
                    document.getElementById('profile-name').textContent = this.user.name;
                    document.getElementById('profile-email-info').textContent = this.user.email;
                    document.getElementById('profile-join-date').textContent = this.user.joinDate || 'Jan 2025';
                    document.getElementById('profile-cart-count').textContent = `${this.cart.length} items`;
                }
            }

            updatePage() {
                document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
                const page = document.getElementById(this.currentPage);
                if (page) {
                    page.classList.add('active');
                }
                window.scrollTo(0, 0);
                if (this.currentPage === 'cart') this.renderCart();
            }

            // --- Navigation & Modals ---
            navigateTo(pageId) {
                if ((pageId === 'cart' || pageId === 'profile') && !this.user) {
                    this.showToast('Please log in to view this page.', 'warning');
                    this.showAuthModal();
                    return;
                }
                this.currentPage = pageId;
                this.updatePage();
            }

            showAuthModal() {
                const modal = document.getElementById('auth-modal');
                modal.style.display = 'flex';
                setTimeout(() => modal.querySelector('.modal-content').classList.add('active'), 10);
            }

            hideAuthModal() {
                const modal = document.getElementById('auth-modal');
                modal.querySelector('.modal-content').classList.remove('active');
                setTimeout(() => modal.style.display = 'none', 300);
            }

            // --- Product Rendering ---
            loadProducts() {
                this.renderProducts(this.products);
            }

            filterProducts(category) {
                const filtered = category === 'all' ? this.products : this.products.filter(p => p.category === category);
                this.renderProducts(filtered);
            }

            renderStars(rating) {
                const fullStars = Math.floor(rating);
                const hasHalfStar = rating % 1 >= 0.5;
                const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                
                return '<span class="text-yellow-500">' + '★'.repeat(fullStars) + (hasHalfStar ? '½' : '') + '</span>' + 
                       '<span class="text-gray-300">' + '★'.repeat(emptyStars) + '</span>';
            }

            renderProducts(productsToRender) {
                const container = document.getElementById('products-container');
                if (!container) return;
                
                container.innerHTML = productsToRender.map(product => `
                    <div class="product-card bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group" data-id="${product.id}">
                        <div class="product-image h-48 mb-4 overflow-hidden rounded-lg">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='https://placehold.co/600x400/FF9900/131921?text=Product';">
                        </div>
                        <div class="product-info">
                            <h3 class="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">${product.name}</h3>
                            <p class="text-xs text-gray-500 mb-2">${product.category}</p>
                            <div class="flex items-center justify-between mb-3">
                                <div class="product-rating flex text-sm">
                                    ${this.renderStars(product.rating)}
                                </div>
                                <span class="text-xs text-gray-400">(${product.reviews} reviews)</span>
                            </div>
                            <div class="product-price-section mb-3">
                                <span class="product-price text-xl font-extrabold text-red-600">$${product.price.toFixed(2)}</span>
                                ${product.comparePrice ? `<span class="product-compare-price text-sm text-gray-400 line-through ml-2">$${product.comparePrice.toFixed(2)}</span>` : ''}
                            </div>
                            <button class="add-to-cart-home w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors" data-id="${product.id}">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                `).join('');
                
                this.bindProductCardEvents();
            }

            bindProductCardEvents() {
                 // Add event listeners to add to cart buttons
                document.querySelectorAll('.add-to-cart-home').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation(); // Prevent the parent card click
                        const id = parseInt(e.currentTarget.dataset.id);
                        const product = this.products.find(p => p.id === id);
                        if (product) {
                            this.addToCart(product, 1);
                        }
                    });
                });

                // Add event listeners to product cards for viewing details
                document.querySelectorAll('.product-card').forEach(card => {
                    card.addEventListener('click', (e) => {
                        const id = parseInt(card.dataset.id);
                        this.viewProduct(id);
                    });
                });
            }

            viewProduct(productId) {
                const product = this.products.find(p => p.id === productId);
                if (product) {
                    this.activeProductId = productId; // Set the active product
                    document.getElementById('product-image').src = product.image;
                    document.getElementById('product-name').textContent = product.name;
                    document.getElementById('product-name-breadcrumb').textContent = product.name;
                    document.getElementById('product-category-breadcrumb').textContent = product.category;
                    document.getElementById('product-category-tag').textContent = product.category;
                    document.getElementById('product-stars').innerHTML = this.renderStars(product.rating);
                    document.getElementById('product-reviews').textContent = `(${product.reviews} reviews)`;
                    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
                    
                    const comparePriceEl = document.getElementById('product-compare-price');
                    comparePriceEl.textContent = product.comparePrice ? `$${product.comparePrice.toFixed(2)}` : '';
                    comparePriceEl.classList.toggle('hidden', !product.comparePrice);

                    document.getElementById('product-description').textContent = product.description;
                    document.getElementById('product-quantity').value = 1;
                    
                    this.navigateTo('product');
                }
            }

            // --- Cart Logic ---
            addToCart(product, quantity) {
                if (!this.user) {
                    this.showToast('Please log in to add items to your cart.', 'warning');
                    this.showAuthModal();
                    return;
                }

                const existingItem = this.cart.find(item => item.id === product.id);
                
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    this.cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        comparePrice: product.comparePrice,
                        image: product.image,
                        quantity: quantity
                    });
                }
                
                this.setState({ cart: this.cart });
                this.showToast('Product added to cart!', 'success');
            }

            updateCartItem(id, quantity) {
                if (quantity <= 0) {
                    this.removeItem(id);
                    return;
                }
                
                const item = this.cart.find(item => item.id === id);
                if (item) {
                    item.quantity = quantity;
                    this.setState({ cart: this.cart });
                }
            }

            removeItem(id) {
                this.cart = this.cart.filter(item => item.id !== id);
                this.setState({ cart: this.cart });
                this.showToast('Item removed from cart', 'info');
            }

            clearCart() {
                this.cart = [];
                this.setState({ cart: this.cart });
                this.showToast('Cart cleared successfully', 'info');
            }

            getCartTotal() {
                return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            }

            renderCart() {
                const container = document.getElementById('cart-items');
                const emptyMessage = document.getElementById('cart-empty-message');
                const cartContent = document.querySelector('.grid-cols-3 > div:first-child');
                
                if (!container || !emptyMessage || !cartContent) return;

                if (this.cart.length === 0) {
                    container.innerHTML = '';
                    emptyMessage.classList.remove('hidden');
                    cartContent.classList.add('hidden');
                } else {
                    emptyMessage.classList.add('hidden');
                    cartContent.classList.remove('hidden');
                    container.innerHTML = this.cart.map(item => `
                        <div class="cart-item flex items-center gap-4 py-4" data-id="${item.id}">
                            <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg flex-shrink-0" onerror="this.onerror=null; this.src='https://placehold.co/96x96/FF9900/131921?text=Item';">
                            <div class="flex-grow">
                                <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
                                <p class="text-sm text-gray-500">Price: <span class="font-medium text-red-600">$${item.price.toFixed(2)}</span></p>
                                <div class="cart-item-actions flex items-center mt-2">
                                    <div class="cart-quantity flex items-stretch border border-gray-300 rounded-md overflow-hidden">
                                        <button class="cart-qty-btn decrease w-8 h-8 bg-gray-100 hover:bg-gray-200 text-lg font-bold transition-colors" data-id="${item.id}">-</button>
                                        <input type="number" class="cart-qty-input w-8 h-8 text-center text-sm font-semibold border-x border-gray-300 focus:outline-none" value="${item.quantity}" min="1" data-id="${item.id}">
                                        <button class="cart-qty-btn increase w-8 h-8 bg-gray-100 hover:bg-gray-200 text-lg font-bold transition-colors" data-id="${item.id}">+</button>
                                    </div>
                                    <button class="remove-item ml-4 text-red-500 hover:text-red-700 transition-colors" data-id="${item.id}">
                                        <i class="fas fa-trash-alt"></i> Remove
                                    </button>
                                </div>
                            </div>
                            <div class="cart-item-total text-xl font-extrabold text-gray-800">$${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                    `).join('');
                    
                    // Re-bind cart controls
                    this.bindCartControls();
                }
                
                // Update totals
                const subtotal = this.getCartTotal();
                const taxRate = 0.08;
                const tax = subtotal * taxRate;
                const total = subtotal + tax;
                
                document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
                document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
                document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
            }

            bindCartControls() {
                document.querySelectorAll('.decrease').forEach(btn => {
                    btn.onclick = (e) => {
                        const id = parseInt(e.currentTarget.dataset.id);
                        const item = this.cart.find(item => item.id === id);
                        if (item && item.quantity > 1) this.updateCartItem(id, item.quantity - 1);
                        else if (item) this.removeItem(id);
                    };
                });
                document.querySelectorAll('.increase').forEach(btn => {
                    btn.onclick = (e) => {
                        const id = parseInt(e.currentTarget.dataset.id);
                        const item = this.cart.find(item => item.id === id);
                        if (item) this.updateCartItem(id, item.quantity + 1);
                    };
                });
                document.querySelectorAll('.cart-qty-input').forEach(input => {
                    input.onchange = (e) => {
                        const id = parseInt(e.currentTarget.dataset.id);
                        const quantity = parseInt(e.currentTarget.value) || 1;
                        this.updateCartItem(id, quantity);
                    };
                });
                document.querySelectorAll('.remove-item').forEach(btn => {
                    btn.onclick = (e) => this.removeItem(parseInt(e.currentTarget.dataset.id));
                });
            }

            // --- Authentication ---
            login(email, password) {
                if (email && password) {
                    this.user = {
                        email: email,
                        name: email.split('@')[0].split('.').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' '),
                        joinDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
                    };
                    this.setState({ user: this.user });
                    this.hideAuthModal();
                    this.showToast('Login successful! Welcome back.', 'success');
                } else {
                    this.showToast('Invalid credentials. Try "test@user.com" and "password"', 'error');
                }
            }

            register(name, email, password) {
                if (name && email && password) {
                    this.user = {
                        email: email,
                        name: name,
                        joinDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
                    };
                    this.setState({ user: this.user });
                    this.hideAuthModal();
                    this.showToast(`Welcome, ${name}! Registration successful.`, 'success');
                } else {
                    this.showToast('Please fill all registration fields.', 'error');
                }
            }
            
            logout() {
                this.user = null;
                this.setState({ user: null, cart: [] });
                this.showToast('Logged out successfully.', 'info');
                this.navigateTo('home');
            }

            // --- Checkout ---
            checkout() {
                if (this.cart.length === 0) {
                    this.showToast('Your cart is empty! Add items before checking out.', 'warning');
                    return;
                }
                
                const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'gpay';
                const total = this.getCartTotal() * 1.08; 
                
                document.getElementById('order-id').textContent = `NEXUS-${new Date().getFullYear()}-${Math.floor(Math.random() * 900) + 100}`;
                document.getElementById('order-total').textContent = `$${total.toFixed(2)}`;
                document.getElementById('order-payment').textContent = paymentMethod === 'gpay' ? 'GPay' : paymentMethod === 'paypal' ? 'PayPal' : 'Credit Card';
                
                const modal = document.getElementById('checkout-success');
                modal.style.display = 'flex';
                setTimeout(() => modal.querySelector('.modal-content').classList.add('active'), 10);

                setTimeout(() => {
                    this.cart = [];
                    this.setState({ cart: this.cart });
                }, 1000);
            }

            closeCheckoutSuccess() {
                const modal = document.getElementById('checkout-success');
                modal.querySelector('.modal-content').classList.remove('active');
                setTimeout(() => modal.style.display = 'none', 300);
                this.navigateTo('home');
            }

            // --- Utility Components ---
            showToast(message, type = 'info') {
                const toast = document.createElement('div');
                toast.className = `toast ${type}`;
                toast.textContent = message;
                document.body.appendChild(toast);
                
                setTimeout(() => toast.classList.add('show'), 10);
                setTimeout(() => toast.classList.remove('show'), 3000);
                setTimeout(() => toast.remove(), 3300);
            }

            // --- Home Page Dynamics ---
            startHeroSlider() {
                let currentSlide = 0;
                const slides = document.querySelectorAll('.hero-slide');
                const dots = document.querySelectorAll('.hero-dots .dot');
                const totalSlides = slides.length;

                const showSlide = (index) => {
                    slides.forEach((s, i) => s.classList.toggle('active', i === index));
                    dots.forEach((d, i) => d.classList.toggle('bg-white', i === index));
                    dots.forEach((d, i) => d.classList.toggle('bg-white/50', i !== index));
                    currentSlide = index;
                };

                dots.forEach((dot) => {
                    dot.addEventListener('click', (e) => {
                        showSlide(parseInt(e.target.dataset.slide));
                        // Reset interval when user manually clicks
                        clearInterval(this.sliderInterval); 
                        this.sliderInterval = setInterval(nextSlide, 5000);
                    });
                });

                const nextSlide = () => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    showSlide(currentSlide);
                };

                this.sliderInterval = setInterval(nextSlide, 5000);
                showSlide(0);
            }

            startCountdown() {
                const countdownElements = {
                    hours: document.getElementById('hours'),
                    minutes: document.getElementById('minutes'),
                    seconds: document.getElementById('seconds'),
                };

                const updateTime = () => {
                    const now = new Date();
                    const endOfDay = new Date(now);
                    endOfDay.setHours(24, 0, 0, 0); 
                    const diff = endOfDay.getTime() - now.getTime();

                    let h = Math.floor(diff / (1000 * 60 * 60));
                    let m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    let s = Math.floor((diff % (1000 * 60)) / 1000);

                    if (countdownElements.hours) {
                        countdownElements.hours.textContent = h.toString().padStart(2, '0');
                        countdownElements.minutes.textContent = m.toString().padStart(2, '0');
                        countdownElements.seconds.textContent = s.toString().padStart(2, '0');
                    }
                };

                setInterval(updateTime, 1000);
                updateTime(); // Initial call
            }

            renderDeals() {
                const deals = this.products
                    .filter(p => p.isOnSale && p.price < p.comparePrice)
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 4); 

                const container = document.getElementById('deals-container');
                if (!container) return;

                container.innerHTML = deals.map(deal => {
                    const percentOff = Math.floor(((deal.comparePrice - deal.price) / deal.comparePrice) * 100);
                    const claimed = Math.floor(Math.random() * 40) + 50; // 50% to 90% claimed
                    return `
                        <div class="deal-card bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-200" data-id="${deal.id}" onclick="store.viewProduct(${deal.id})">
                            <div class="deal-image h-32 mb-4 relative overflow-hidden rounded-lg">
                                <img src="${deal.image}" alt="${deal.name}" class="w-full h-full object-cover transition-transform duration-500" onerror="this.onerror=null; this.src='https://placehold.co/600x400/FF9900/131921?text=Deal';">
                                <div class="deal-badge absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">${percentOff}% OFF</div>
                            </div>
                            <div class="deal-info">
                                <h3 class="text-md font-bold text-gray-800 line-clamp-2">${deal.name}</h3>
                                <div class="deal-price flex items-center gap-2 my-2">
                                    <span class="current-price text-xl font-extrabold text-red-600">$${deal.price.toFixed(2)}</span>
                                    <span class="original-price text-sm text-gray-400 line-through">$${deal.comparePrice.toFixed(2)}</span>
                                </div>
                                <div class="deal-progress mt-3">
                                    <div class="progress-bar w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div class="progress-fill h-full bg-red-500 rounded-full" style="width: ${claimed}%;"></div>
                                    </div>
                                    <span class="progress-text text-xs text-gray-500 mt-1 block">${claimed}% claimed - Hurry!</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            // --- Event Binding ---
            bindEvents() {
                // Global Navigation
                window.navigateTo = (page) => this.navigateTo(page);
                window.filterCategory = (category) => {
                    this.filterProducts(category);
                    document.querySelectorAll('.category-btn').forEach(btn => {
                        btn.classList.toggle('bg-white', btn.dataset.category !== category);
                        btn.classList.toggle('text-gray-800', btn.dataset.category !== category);
                        btn.classList.toggle('bg-[--primary]', btn.dataset.category === category);
                        btn.classList.toggle('text-white', btn.dataset.category === category);
                    });
                };
                window.showAuthModal = () => this.showAuthModal();
                window.handleAuthAction = () => {
                    if (this.user) this.logout();
                    else this.showAuthModal();
                };

                // Category Filters on Home Page
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        window.filterCategory(e.currentTarget.dataset.category);
                    });
                });
                
                // Auth Modal Events
                document.querySelector('#auth-modal .close-modal').onclick = () => this.hideAuthModal();
                document.getElementById('auth-modal').onclick = (e) => { if (e.target.id === 'auth-modal') this.hideAuthModal(); };
                
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.onclick = () => {
                        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active', 'text-blue-600', 'border-blue-600'));
                        document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
                        btn.classList.add('active', 'text-blue-600', 'border-blue-600');
                        document.getElementById(`${btn.dataset.tab}-tab`).classList.remove('hidden');
                    };
                });
                
                document.getElementById('login-form').onsubmit = (e) => {
                    e.preventDefault();
                    this.login(document.getElementById('login-email').value, document.getElementById('login-password').value);
                };
                document.getElementById('register-form').onsubmit = (e) => {
                    e.preventDefault();
                    this.register(document.getElementById('register-name').value, document.getElementById('register-email').value, document.getElementById('register-password').value);
                };
                
                // Checkout Button
                document.getElementById('checkout-btn').onclick = () => this.checkout();

                // Product Page Controls (Assuming Product Page is active)
                document.getElementById('add-to-cart').onclick = () => {
                    const product = this.products.find(p => p.id === this.activeProductId);
                    const qty = parseInt(document.getElementById('product-quantity').value);
                    if (product && qty > 0) this.addToCart(product, qty);
                };

                document.getElementById('increase-qty').onclick = () => {
                    const qtyInput = document.getElementById('product-quantity');
                    qtyInput.value = parseInt(qtyInput.value) + 1;
                };

                document.getElementById('decrease-qty').onclick = () => {
                    const qtyInput = document.getElementById('product-quantity');
                    if (parseInt(qtyInput.value) > 1) qtyInput.value = parseInt(qtyInput.value) - 1;
                };

                // Initial active category for visual feedback
                window.filterCategory('all');
            }
        }

        // Initialize store when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            window.store = new EcommerceStore();
        });
