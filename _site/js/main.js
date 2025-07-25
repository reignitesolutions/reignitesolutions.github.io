// --- Start Global Utility Functions (can be accessed anywhere) ---

// Mobile dropdown toggle function (called directly from HTML onclick)
function toggleMobileDropdown(buttonElement) {
    const dropdownItem = buttonElement.closest('.mobile-dropdown');
    const dropdownMenu = dropdownItem.querySelector('.mobile-dropdown-menu');
    const arrow = buttonElement.querySelector('.mobile-dropdown-arrow');
    const isExpanded = buttonElement.getAttribute('aria-expanded') === 'true';

    // Close other open dropdowns in mobile menu
    document.querySelectorAll('.mobile-dropdown-menu.active').forEach(openMenu => {
        if (openMenu !== dropdownMenu) {
            openMenu.classList.remove('active');
            openMenu.style.maxHeight = '0';
            const correspondingButton = openMenu.closest('.mobile-dropdown').querySelector('.mobile-dropdown-button');
            correspondingButton.setAttribute('aria-expanded', 'false');
            correspondingButton.querySelector('.mobile-dropdown-arrow').style.transform = 'rotate(0deg)';
        }
    });

    dropdownMenu.classList.toggle('active');
    buttonElement.setAttribute('aria-expanded', !isExpanded); // Toggle aria-expanded
    if (dropdownMenu.classList.contains('active')) {
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px'; // Set to actual height
        arrow.style.transform = 'rotate(180deg)';
    } else {
        dropdownMenu.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)'; // Reset arrow
    }
}

// FAQ Accordion Functionality (called directly from HTML onclick)
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const isExpanded = element.getAttribute('aria-expanded') === 'true';

    faqItem.classList.toggle('active');
    element.setAttribute('aria-expanded', !isExpanded); // Toggle aria-expanded

    if (faqItem.classList.contains('active')) {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
    } else {
        faqAnswer.style.maxHeight = '0';
    }
}

// --- End Global Utility Functions ---


// --- Start DOMContentLoaded Listener (main entry point for interactive JS) ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Start Cookie Consent Functionality ---
    const cookieConsentBanner = document.getElementById('cookie-consent-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const rejectCookiesButton = document.getElementById('reject-cookies');

    const COOKIE_CONSENT_KEY = 'reignite_cookie_consent'; // Key for localStorage

    // Function to show the cookie banner
    function showCookieBanner() {
        if (cookieConsentBanner) {
            cookieConsentBanner.classList.add('show');
        }
    }

    // Function to hide the cookie banner
    function hideCookieBanner() {
        if (cookieConsentBanner) {
            cookieConsentBanner.classList.remove('show');
        }
    }

    // Function to set cookie consent in localStorage
    function setCookieConsent(status) {
        localStorage.setItem(COOKIE_CONSENT_KEY, status);
        console.log(`Cookie consent set to: ${status}`); // For debugging
    }

    // Function to get cookie consent from localStorage
    function getCookieConsent() {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
    }

    // Function to initialize Google Analytics
    function initializeGoogleAnalytics() {
        // Only run if gtag is available (loaded by the script in <head>)
        if (typeof gtag === 'function') {
            gtag('js', new Date());
            gtag('config', 'G-YOUR_MEASUREMENT_ID'); // REPLACE WITH YOUR ACTUAL GA MEASUREMENT ID
            console.log("Google Analytics initialized.");
        } else {
            console.warn("gtag function not found. Google Analytics might not load correctly.");
        }
    }

    // Check existing consent on page load
    const userConsent = getCookieConsent();

    if (userConsent === 'accepted') {
        initializeGoogleAnalytics();
        hideCookieBanner(); // Ensure banner is hidden if already accepted
    } else if (userConsent === 'rejected') {
        hideCookieBanner(); // Ensure banner is hidden if already rejected
        // No GA initialization needed
    } else {
        // No consent yet, show the banner immediately
        showCookieBanner();
    }

    // Event Listeners for buttons
    if (acceptCookiesButton) {
        acceptCookiesButton.addEventListener('click', () => {
            setCookieConsent('accepted');
            initializeGoogleAnalytics();
            hideCookieBanner();
        });
    }

    if (rejectCookiesButton) {
        rejectCookiesButton.addEventListener('click', () => {
            setCookieConsent('rejected');
            hideCookieBanner();
            // Optionally, clear any existing GA cookies if they were set before this logic
            // (More complex, often handled by a full CMP, but good to note)
        });
    }
    // --- End Cookie Consent Functionality ---


    // --- Start Header Scroll Effect & Company Name Vanishing (Updated for Hide/Show) ---
    const mainHeader = document.getElementById('main-header');
    const companyNameText = document.getElementById('company-name-text');
    let lastScrollY = 0; // Keep track of the last scroll position

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const headerHeight = mainHeader.offsetHeight; // Get the height of the header

        // Logic for hiding/showing header based on scroll direction
        // Hide header if scrolling down AND scrolled past the header's height
        if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
            mainHeader.classList.add('header-hidden');
        }
        // Show header if scrolling up OR at the very top of the page
        else if (currentScrollY < lastScrollY || currentScrollY <= 0) {
            mainHeader.classList.remove('header-hidden');
        }

        // Existing logic for blur and company name vanishing (can coexist)
        // This part will still make the header blur and company name fade out/in
        // based on the initial 50px scroll threshold, independent of the hide/show.
        if (currentScrollY > 50) {
            //mainHeader.classList.add('backdrop-blur-header');
            //companyNameText.classList.add('opacity-0', 'invisible');
        } else {
            //mainHeader.classList.remove('backdrop-blur-header');
            //companyNameText.classList.remove('opacity-0', 'invisible');
        }

        lastScrollY = currentScrollY; // Update last scroll position for the next scroll event
    });
    // --- End Header Scroll Effect & Company Name Vanishing (Updated for Hide/Show) ---


    // --- Start Smooth Scrolling Functionality ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // --- End Smooth Scrolling Functionality ---

    // --- Start Mobile Menu Functionality ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileNavigation = document.getElementById('mobile-navigation');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    function openMobileMenu() {
        mobileNavigation.classList.remove('translate-x-full');
        mobileNavigation.classList.add('translate-x-0');
        mobileMenuOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling body
        mobileNavigation.focus(); // Move focus to the menu when opened
        mobileMenuButton.setAttribute('aria-expanded', 'true');
    }

    function closeMobileMenu() {
        mobileNavigation.classList.remove('translate-x-0');
        mobileNavigation.classList.add('translate-x-full');
        mobileMenuOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore body scrolling
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.focus(); // Return focus to the button that opened it
    }

    mobileMenuButton.addEventListener('click', openMobileMenu);
    closeMobileMenuButton.addEventListener('click', closeMobileMenu);
    mobileMenuOverlay.addEventListener('click', closeMobileMenu); // Close when clicking outside menu

    // Close mobile menu if window resized to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) { // Tailwind's 'md' breakpoint
            closeMobileMenu();
        }
    });

    // Basic Trap Focus for Mobile Menu (when opened)
    mobileNavigation.addEventListener('keydown', function(event) {
        const focusableElements = mobileNavigation.querySelectorAll('button, a[href]');
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        if (event.key === 'Tab') {
            if (event.shiftKey) { // if Shift + Tab
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                }
            } else { // if Tab
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                }
            }
        }
    });
    // --- End Mobile Menu Functionality ---


    // --- Start Desktop Dropdown Accessibility ---
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        const dropdownMenu = button.nextElementSibling; // The menu immediately after the button
        let timeoutId; // To manage hover delays

        function openDropdown() {
            clearTimeout(timeoutId);
            dropdownMenu.style.display = 'block';
            button.setAttribute('aria-expanded', 'true');
            dropdownMenu.setAttribute('aria-hidden', 'false');
            // Focus the first focusable element in the dropdown, or the first link
            const firstMenuItem = dropdownMenu.querySelector('[role="menuitem"]');
            if (firstMenuItem) {
                firstMenuItem.focus();
            }
        }

        function closeDropdown() {
            clearTimeout(timeoutId);
            dropdownMenu.style.display = 'none';
            button.setAttribute('aria-expanded', 'false');
            dropdownMenu.setAttribute('aria-hidden', 'true');
        }

        // Handle click to toggle
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent document click from immediately closing
            if (button.getAttribute('aria-expanded') === 'true') {
                closeDropdown();
            } else {
                openDropdown();
            }
        });

        // Handle keyboard events for button
        button.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default scroll for spacebar
                if (button.getAttribute('aria-expanded') === 'true') {
                    closeDropdown();
                } else {
                    openDropdown();
                }
            } else if (event.key === 'Escape') {
                closeDropdown();
                button.focus(); // Return focus to the button
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                openDropdown(); // Open if closed
                const firstMenuItem = dropdownMenu.querySelector('[role="menuitem"]');
                if (firstMenuItem) {
                    firstMenuItem.focus();
                }
            }
        });

        // Handle keyboard events for menu items
        dropdownMenu.addEventListener('keydown', (event) => {
            const menuItems = Array.from(dropdownMenu.querySelectorAll('[role="menuitem"]'));
            const focusedItemIndex = menuItems.indexOf(document.activeElement);

            if (event.key === 'Escape') {
                closeDropdown();
                button.focus(); // Return focus to the button
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                if (focusedItemIndex < menuItems.length - 1) {
                    menuItems[focusedItemIndex + 1].focus();
                } else {
                    menuItems[0].focus(); // Loop to first
                }
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                if (focusedItemIndex > 0) {
                    menuItems[focusedItemIndex - 1].focus();
                } else {
                    menuItems[menuItems.length - 1].focus(); // Loop to last
                }
            }
        });

        // Handle mouseenter/mouseleave for hover functionality
        button.parentElement.addEventListener('mouseenter', openDropdown);
        button.parentElement.addEventListener('mouseleave', () => {
            timeoutId = setTimeout(closeDropdown, 300); // Small delay to allow moving to menu
        });
        dropdownMenu.addEventListener('mouseenter', () => clearTimeout(timeoutId));
        dropdownMenu.addEventListener('mouseleave', closeDropdown);

        // Close dropdown if focus moves outside of the dropdown container (button + menu)
        document.addEventListener('focusin', (event) => {
            if (!button.parentElement.contains(event.target)) {
                closeDropdown();
            }
        });
    });
    // --- End Desktop Dropdown Accessibility ---


    // --- Start Testimonial Carousel Functionality ---
    const carouselSlides = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button-prev');
    const nextButton = document.querySelector('.carousel-button-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlideIndex = 0;
    let autoSlideInterval;

    // Determine how many slides to show based on screen width
    const getSlidesPerView = () => {
        return window.innerWidth >= 768 ? 2 : 1; // 2 slides on desktop, 1 on mobile
    };
    let slidesPerView = getSlidesPerView();

    // Create dots
    const createDots = () => {
        dotsContainer.innerHTML = ''; // Clear existing dots
        const totalDots = Math.ceil(slides.length / slidesPerView);
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            dot.setAttribute('role', 'tab');
            dot.setAttribute('aria-label', `Go to slide ${i * slidesPerView + 1}`);
            dot.addEventListener('click', () => {
                currentSlideIndex = i * slidesPerView;
                updateCarousel();
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    };

    // Update carousel position and active dot
    const updateCarousel = () => {
        // Adjust currentSlideIndex to ensure it's valid
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - (slides.length % slidesPerView || slidesPerView);
        } else if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }

        const slideWidth = slides[0].offsetWidth; // Get the actual width of a single slide
        const offset = -currentSlideIndex * slideWidth;
        carouselSlides.style.transform = `translateX(${offset}px)`;

        // Update active dot and aria-selected
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            const dotIndexRepresents = index * slidesPerView;
            if (dotIndexRepresents <= currentSlideIndex && currentSlideIndex < (dotIndexRepresents + slidesPerView)) {
                dot.classList.add('active');
                dot.setAttribute('aria-selected', 'true');
            } else {
                dot.classList.remove('active');
                dot.setAttribute('aria-selected', 'false');
            }
        });

        // Update aria-hidden for visible/hidden slides
        slides.forEach((slide, index) => {
            if (index >= currentSlideIndex && index < currentSlideIndex + slidesPerView) {
                slide.setAttribute('aria-hidden', 'false');
            } else {
                slide.setAttribute('aria-hidden', 'true');
            }
        });
    };

    // Navigate to next slide
    const showNextSlide = () => {
        currentSlideIndex += slidesPerView;
        updateCarousel();
    };

    // Navigate to previous slide
    const showPrevSlide = () => {
        currentSlideIndex -= slidesPerView;
        updateCarousel();
    };

    // Auto-slide functionality
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(showNextSlide, 5000); // Change slide every 5 seconds
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Event Listeners
    prevButton.addEventListener('click', () => {
        showPrevSlide();
        resetAutoSlide();
    });

    nextButton.addEventListener('click', () => {
        showNextSlide();
        resetAutoSlide();
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            slidesPerView = newSlidesPerView;
            createDots(); // Recreate dots if slides per view changes
        }
        updateCarousel(); // Recalculate position on resize
    });

    // Initial setup
    createDots();
    updateCarousel(); // Call once initially to set correct state
    startAutoSlide();
});
// --- End Testimonial Carousel Functionality ---