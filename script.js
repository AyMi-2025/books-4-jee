// ====================================
// CONFIGURATION - UPDATE THESE VALUES
// ====================================

// Your WhatsApp number (format: country code + number, no spaces or +)
// Example: For India +91 9876543210, use "919876543210"
const WHATSAPP_NUMBER = "918981641447";

// Your Books Data - Replace this with your actual books
const BOOKS_DATA = [
    {
        id: 1,
        title: "Concepts of Physics Vol 1",
        author: "H.C. Verma",
        subject: "Physics",
        condition: "Good - Minimal highlighting",
        originalPrice: 495,
        sellingPrice: 230,
        image: "https://www.onetouchbook.com/cdn/shop/files/4ujgh-512.webp?v=1719127969"
    },
    {
        id: 2,
        title: "Concepts of Physics Vol 2",
        author: "H.C. Verma",
        subject: "Physics",
        condition: "Excellent - Like new",
        originalPrice: 560,
        sellingPrice: 300,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop"
    },
    {
        id: 3,
        title: "Elementary Problems in Organic Chemistry for JEE",
        author: "M.S Chouhan",
        subject: "Chemistry",
        condition: "Good - Some highlighting",
        originalPrice: 578,
        sellingPrice: 300,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop"
    },
    {
        id: 4,
        title: "Problems in Physical Chemistry for JEE",
        author: "Narendra Avasthi",
        subject: "Chemistry",
        condition: "Very Good",
        originalPrice: 658,
        sellingPrice: 350,
        image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=500&fit=crop"
    },
    {
        id: 5,
        title: "Problems in Inorganic Chemistry for JEE",
        author: "V.K Jaiswal",
        subject: "Chemistry",
        condition: "Good - Minor wear",
        originalPrice: 618,
        sellingPrice: 300,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=500&fit=crop"
    },
    {
        id: 6,
        title: "PW Class 11th JEE Physics Modules",
        author: "Physics Wallah",
        subject: "Physics",
        condition: "Good",
        originalPrice: 400,
        sellingPrice: 200,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 7,
        title: "PW Class 11th JEE Chemistry Modules",
        author: "Physics Wallah",
        subject: "Chemistry",
        condition: "Good",
        originalPrice: 400,
        sellingPrice: 200,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 8,
        title: "PW Class 11th JEE Mathematics Modules",
        author: "Physics Wallah",
        subject: "Mathematics",
        condition: "Good",
        originalPrice: 400,
        sellingPrice: 200,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 9,
        title: "PW Class 12th JEE Physics Modules",
        author: "Physics Wallah",
        subject: "Physics",
        condition: "Good",
        originalPrice: 500,
        sellingPrice: 300,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 14,
        title: "PW Class 12th JEE Chemistry Modules",
        author: "Physics Wallah",
        subject: "Chemsitry",
        condition: "Good",
        originalPrice: 500,
        sellingPrice: 300,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 10,
        title: "PW Class 12th JEE Mathematics Modules",
        author: "Physics Wallah",
        subject: "Mathematics",
        condition: "Good",
        originalPrice: 500,
        sellingPrice: 300,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 11,
        title: "Chapterwise & Topicwise JEE Main & Advanced PHYSICS PYQs (2013 - 2024)",
        author: "Disha",
        subject: "Physics",
        condition: "Good",
        originalPrice: 950,
        sellingPrice: 400,
        image: "IMG_20260206_112729_589.jpg"
    },
    {
        id: 12,
        title: "Chapterwise & Topicwise JEE Main & Advanced CHEMISTRY PYQs (2013 - 2024)",
        author: "Disha",
        subject: "Chemistry",
        condition: "Good",
        originalPrice: 775,
        sellingPrice: 350,
        image: "IMG_20260206_112729_589.jpg"
    },
    {
        id: 13,
        title: "Chapterwise & Topicwise JEE Main & Advanced MATHEMATICS PYQs (2013 - 2024)",
        author: "Disha",
        subject: "Mathematics",
        condition: "Good",
        originalPrice: 900,
        sellingPrice: 350,
        image: "IMG_20260206_112729_589.jpg"
    },
    {
        id: 14,
        title: "CBSE PHYSICS Chapterwise Question Bank (2011 - 2024)",
        author: "Arihant",
        subject: "Physics",
        condition: "New",
        originalPrice: 430,
        sellingPrice: 200,
        image: "IMG_20260206_112729_589.jpg"
    },
    {
        id: 15,
        title: "CBSE CHEMISTRY Chapterwise Question Bank (2011 - 2024)",
        author: "Arihant",
        subject: "Chemistry",
        condition: "New",
        originalPrice: 430,
        sellingPrice: 200,
        image: "IMG_20260206_112729_589.jpg"
    },
    {
        id: 16,
        title: "CBSE MATHEMATICS Chapterwise Question Bank (2011 - 2024)",
        author: "Arihant",
        subject: "Mathematics",
        condition: "New",
        originalPrice: 430,
        sellingPrice: 200,
        image: "IMG_20260206_112729_589.jpg"
    },
    {
        id: 17,
        title: "PW : The Catalyst - Chemistry for Class 12th BOARDS",
        author: "Physics Wallah",
        subject: "Chemistry",
        condition: "New",
        originalPrice: 430,
        sellingPrice: 200,
        image: "IMG_20260206_112729_589.jpg"
    },
    {
        id: 18,
        title: "PW : The Catalyst - Physics for Class 12th BOARDS",
        author: "Physics Wallah",
        subject: "Physics",
        condition: "New",
        originalPrice: 430,
        sellingPrice: 200,
        image: "IMG_20260206_112729_589.jpg"
    }
];

// ====================================
// APPLICATION CODE
// ====================================

let currentFilter = 'All';
let currentSearch = '';
let cart = [];

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();
    
    // Initialize dark mode
    initDarkMode();
    
    // Render initial books
    renderBooks(BOOKS_DATA);
    
    // Setup all event listeners
    setupEventListeners();
    
    // Update cart UI
    updateCartUI();
});

// Dark Mode Initialization
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // Toggle dark mode on button click
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDark);
        });
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearch = e.target.value.toLowerCase();
            filterAndRenderBooks();
        });
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-subject');
            filterAndRenderBooks();
        });
    });
    
    // Cart toggle
    const cartToggle = document.getElementById('cartToggle');
    if (cartToggle) {
        cartToggle.addEventListener('click', openCart);
    }
    
    // Cart close
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    // Cart modal background click
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                closeCart();
            }
        });
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkoutCart);
    }
    
    // Lightbox events
    setupLightboxEvents();
}

// Setup lightbox close events
function setupLightboxEvents() {
    const lightbox = document.getElementById('imageLightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Filter and render books
function filterAndRenderBooks() {
    let filteredBooks = BOOKS_DATA.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(currentSearch) ||
                            book.author.toLowerCase().includes(currentSearch);
        const matchesFilter = currentFilter === 'All' || book.subject === currentFilter;
        return matchesSearch && matchesFilter;
    });

    renderBooks(filteredBooks);
}

// Render books to the grid
function renderBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    const noResults = document.getElementById('noResults');

    if (books.length === 0) {
        booksGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    booksGrid.style.display = 'grid';
    noResults.style.display = 'none';

    booksGrid.innerHTML = books.map(book => createBookCard(book)).join('');

    // Add event listeners to buttons
    books.forEach(book => {
        // WhatsApp button
        const whatsappBtn = document.getElementById('whatsapp-' + book.id);
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function() {
                openWhatsApp(book);
            });
        }
        
        // Add to Cart button
        const cartBtn = document.getElementById('add-to-cart-' + book.id);
        if (cartBtn) {
            cartBtn.addEventListener('click', function() {
                toggleCart(book);
            });
        }
    });
}

// Create a book card HTML
function createBookCard(book) {
    const discount = Math.round((1 - book.sellingPrice / book.originalPrice) * 100);
    const safeTitle = book.title.replace(/'/g, "\\'");
    const safeAuthor = book.author.replace(/'/g, "\\'");
    const caption = safeTitle + ' by ' + safeAuthor;
    const inCart = cart.some(item => item.id === book.id);
    
    return '<div class="book-card">' +
            '<div class="book-image-container">' +
                '<img src="' + book.image + '" ' +
                     'alt="' + book.title + '" ' +
                     'class="book-image" ' +
                     'onclick="openLightbox(\'' + book.image + '\', \'' + caption + '\')">' +
                '<div class="book-subject-badge">' + book.subject + '</div>' +
            '</div>' +
            '<div class="book-details">' +
                '<h3 class="book-title">' + book.title + '</h3>' +
                '<p class="book-author">by ' + book.author + '</p>' +
                '<div class="book-condition-section">' +
                    '<span class="condition-label">Condition:</span>' +
                    '<span class="condition-text">' + book.condition + '</span>' +
                '</div>' +
                '<div class="book-pricing">' +
                    '<span class="selling-price">₹' + book.sellingPrice + '</span>' +
                    '<span class="original-price">₹' + book.originalPrice + '</span>' +
                    '<span class="discount-badge">' + discount + '% OFF</span>' +
                '</div>' +
                '<div class="book-actions">' +
                    '<button id="add-to-cart-' + book.id + '" class="add-to-cart-btn' + (inCart ? ' in-cart' : '') + '">' +
                        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                            (inCart ? '<path d="M20 6L9 17l-5-5"></path>' : '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>') +
                        '</svg>' +
                        (inCart ? 'In Cart' : 'Add to Cart') +
                    '</button>' +
                    '<button id="whatsapp-' + book.id + '" class="whatsapp-btn">' +
                        '<svg class="whatsapp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
                            '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>' +
                        '</svg>' +
                        'WhatsApp' +
                    '</button>' +
                '</div>' +
            '</div>' +
        '</div>';
}

// Open WhatsApp with pre-filled message
function openWhatsApp(book) {
    const message = "Hi! I'm interested in buying \"" + book.title + "\" by " + book.author + " for ₹" + book.sellingPrice;
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
}

// Lightbox functions
function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    lightbox.style.display = 'block';
    lightboxImg.src = imageSrc;
    lightboxCaption.textContent = caption;
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ====================================
// CART FUNCTIONS
// ====================================

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('bookCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('bookCart', JSON.stringify(cart));
}

// Add or remove book from cart
function toggleCart(book) {
    const index = cart.findIndex(item => item.id === book.id);
    
    if (index > -1) {
        // Remove from cart
        cart.splice(index, 1);
    } else {
        // Add to cart
        cart.push(book);
    }
    
    saveCart();
    updateCartUI();
    renderBooks(BOOKS_DATA.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(currentSearch) ||
                            b.author.toLowerCase().includes(currentSearch);
        const matchesFilter = currentFilter === 'All' || b.subject === currentFilter;
        return matchesSearch && matchesFilter;
    }));
}

// Update cart count and UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalPrice = document.getElementById('cartTotalPrice');
    
    // Update cart count
    if (cartCount) {
        cartCount.textContent = cart.length;
        if (cart.length === 0) {
            cartCount.classList.add('hidden');
        } else {
            cartCount.classList.remove('hidden');
        }
    }
    
    // Update cart items display
    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartItems) cartItems.style.display = 'none';
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        if (emptyCart) emptyCart.style.display = 'none';
        if (cartItems) cartItems.style.display = 'block';
        if (cartFooter) cartFooter.style.display = 'block';
        
        // Render cart items
        if (cartItems) {
            cartItems.innerHTML = cart.map(book => createCartItem(book)).join('');
            
            // Add remove button listeners
            cart.forEach(book => {
                const removeBtn = document.getElementById('remove-' + book.id);
                if (removeBtn) {
                    removeBtn.addEventListener('click', function() {
                        toggleCart(book);
                    });
                }
            });
        }
        
        // Update total price
        const total = cart.reduce((sum, book) => sum + book.sellingPrice, 0);
        if (cartTotalPrice) {
            cartTotalPrice.textContent = '₹' + total;
        }
    }
}

// Create cart item HTML
function createCartItem(book) {
    return '<div class="cart-item">' +
            '<img src="' + book.image + '" alt="' + book.title + '" class="cart-item-image">' +
            '<div class="cart-item-details">' +
                '<div class="cart-item-title">' + book.title + '</div>' +
                '<div class="cart-item-author">by ' + book.author + '</div>' +
                '<div class="cart-item-price">₹' + book.sellingPrice + '</div>' +
            '</div>' +
            '<button id="remove-' + book.id + '" class="cart-item-remove">×</button>' +
        '</div>';
}

// Open cart modal
function openCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        updateCartUI();
    }
}

// Close cart modal
function closeCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Checkout via WhatsApp
function checkoutCart() {
    if (cart.length === 0) return;
    
    let message = "Hi! I'm interested in ordering the following books:\n\n";
    
    cart.forEach((book, index) => {
        message += (index + 1) + ". " + book.title + " by " + book.author + " - ₹" + book.sellingPrice + "\n";
    });
    
    const total = cart.reduce((sum, book) => sum + book.sellingPrice, 0);
    message += "\nTotal: ₹" + total;
    
    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
    
    // Optional: Clear cart after checkout
    // cart = [];
    // saveCart();
    // updateCartUI();
    // closeCart();
}
