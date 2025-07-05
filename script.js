document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is an internal anchor on the same page
            const currentPath = window.location.pathname.split('/').pop();
            const targetPath = this.getAttribute('href').split('#')[0].split('/').pop();

            if (currentPath === targetPath || (currentPath === '' && targetPath === 'index.html') || (currentPath === 'index.html' && targetPath === '')) {
                e.preventDefault(); // Prevent default anchor click behavior only for same-page links
                const targetId = this.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // For external links (to other HTML pages), default behavior is fine.
        });
    });

    // --- FAQ Accordion Functionality (only relevant on faq.html) ---
    window.toggleFaq = function(element) {
        const faqItem = element.closest('.faq-item');
        faqItem.classList.toggle('active');
    };

    // --- Testimonial Carousel Functionality (only relevant on testimonials.html) ---
    const carouselSlides = document.querySelector('.carousel-slides');
    if (carouselSlides) { // Only run if carousel exists on the page
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
                dot.setAttribute('data-slide-index', i * slidesPerView); // Store the start index of the group
                if (i === 0) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', (e) => {
                    currentSlideIndex = parseInt(e.target.getAttribute('data-slide-index'));
                    updateCarousel();
                    resetAutoSlide();
                });
                dotsContainer.appendChild(dot);
            }
        };

        // Update carousel position and active dot
        const updateCarousel = () => {
            // Ensure currentSlideIndex is within bounds
            if (currentSlideIndex < 0) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex >= slides.length) {
                currentSlideIndex = slides.length - (slides.length % slidesPerView || slidesPerView); // Adjust to show full slides
                if (currentSlideIndex < 0) currentSlideIndex = 0; // Fallback for very few slides
            }

            const offset = -currentSlideIndex * (slides[0].offsetWidth / slidesPerView);
            carouselSlides.style.transform = `translateX(${offset}px)`;

            // Update active dot
            document.querySelectorAll('.carousel-dot').forEach((dot) => {
                const dotSlideIndex = parseInt(dot.getAttribute('data-slide-index'));
                // Check if the current slide index falls within the range covered by this dot
                if (currentSlideIndex >= dotSlideIndex && currentSlideIndex < dotSlideIndex + slidesPerView) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        // Navigate to next slide
        const showNextSlide = () => {
            currentSlideIndex += slidesPerView;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0; // Loop back to the start
            }
            updateCarousel();
        };

        // Navigate to previous slide
        const showPrevSlide = () => {
            currentSlideIndex -= slidesPerView;
            if (currentSlideIndex < 0) {
                // Loop to the end, ensuring full slides are shown
                currentSlideIndex = slides.length - (slides.length % slidesPerView || slidesPerView);
                if (currentSlideIndex < 0) currentSlideIndex = 0; // Fallback for very few slides
            }
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

        // Event Listeners for carousel
        prevButton.addEventListener('click', () => {
            showPrevSlide();
            resetAutoSlide();
        });

        nextButton.addEventListener('click', () => {
            showNextSlide();
            resetAutoSlide();
        });

        // Handle window resize for carousel
        window.addEventListener('resize', () => {
            const newSlidesPerView = getSlidesPerView();
            if (newSlidesPerView !== slidesPerView) {
                slidesPerView = newSlidesPerView;
                createDots(); // Recreate dots if slides per view changes
            }
            updateCarousel(); // Recalculate position on resize
        });

        // Initial setup for carousel
        createDots();
        updateCarousel();
        startAutoSlide();
    } // End of carouselSlides if block

    // --- Mobile Menu Functionality ---
    // Note: Alpine.js is handling the core mobile menu open/close,
    // so these direct JS interactions for mobile-menu-button etc.
    // might be redundant or conflict if Alpine is managing the 'active' class.
    // If you're using Alpine's x-show, these parts might not be necessary.
    // However, I'll keep them combined for completeness if you decide to remove Alpine for this.
    const mobileMenuButton = document.getElementById('mobile-menu-button'); // This ID is NOT in your HTML, Alpine uses @click="mobileOpen = true"
    const closeMobileMenuButton = document.getElementById('close-mobile-menu'); // This ID is NOT in your HTML, Alpine uses @click="mobileOpen = false"
    const mobileMenu = document.getElementById('mobile-menu'); // This ID is NOT in your HTML, Alpine targets the div directly

    // Given your HTML uses Alpine.js for the mobile menu, the following block
    // (mobileMenuButton, closeMobileMenuButton, mobileMenu) is largely redundant and
    // the IDs don't exist in your HTML. Alpine's `x-show` and `@click` handle this.
    // The only part that might still be useful is closing the menu when a link inside it is clicked,
    // which Alpine's `@click.outside` doesn't inherently do for navigation clicks.
    // I've commented out the `if` condition to prevent errors due to missing elements,
    // but the `mobileMenu.querySelectorAll('a')` part can remain if you want that specific behavior.

    // if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
    //     mobileMenuButton.addEventListener('click', () => {
    //         mobileMenu.classList.add('active');
    //     });

    //     closeMobileMenuButton.addEventListener('click', () => {
    //         mobileMenu.classList.remove('active');
    //     });

    // Close mobile menu when a link is clicked (this part *is* useful with Alpine too)
    if (mobileMenu) { // Check if the mobile menu element exists, assuming you give it an ID like `id="mobile-nav-panel"`
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Assuming Alpine.js controls `mobileOpen`, you'd set it to false.
                // If you *don't* want to rely on Alpine for this, you'd add/remove a class.
                // Since Alpine manages x-show, the easiest way is to trigger Alpine's state change:
                // This would require a direct Alpine function call or ensuring the link click
                // triggers the Alpine `mobileOpen = false`.
                // For a pure JS approach, you'd need the menu to have a class Alpine adds (e.g., 'open')
                // and then remove that class.
                // For now, given your current HTML with x-data="mobileOpen: false" on <html>,
                // this direct manipulation might not sync perfectly with Alpine's state.
                // It's generally better to manage Alpine's state or trigger Alpine methods.
                // However, for immediate visual effect:
                // If the mobile menu has a class like 'is-open' when active:
                // mobileMenu.classList.remove('is-open');
                // Or, if using Alpine and want to manipulate its state from JS:
                // You'd need a more advanced Alpine.js interop or direct variable access,
                // which is not straightforward.
                // The simplest is to ensure your Alpine setup `x-show="mobileOpen"` and
                // `@click.outside="mobileOpen = false"` handles this, or add `@click="mobileOpen = false"`
                // directly to mobile nav links in your HTML.

                // For the purpose of keeping this JS self-contained and working *if* Alpine wasn't there
                // or if you prefer pure JS closing, you'd typically have a class like 'active' on the menu itself.
                // Since Alpine handles `x-show`, this part might be more effectively handled by Alpine directly on the link.
                // Example: <a @click="mobileOpen = false" href="..." >...</a>
                // Without knowing your exact Alpine setup for the mobile menu closing on link click,
                // I'm leaving this as a general placeholder.
            });
        });
    }


    // --- Mobile dropdown toggle (for "Our Approach" and "Company" in mobile menu) ---
    // Alpine.js is already handling this with x-data="{ open: false }" and x-show="open".
    // This `window.toggleMobileDropdown` function is redundant and potentially conflicting if Alpine is active.
    // I recommend removing this entire function as Alpine handles it more elegantly.
    /*
    window.toggleMobileDropdown = function(buttonElement) {
        const dropdownItem = buttonElement.closest('.mobile-dropdown');
        const dropdownMenu = dropdownItem.querySelector('.mobile-dropdown-menu');
        const arrow = buttonElement.querySelector('.mobile-dropdown-arrow');

        // Close other open dropdowns in mobile menu
        document.querySelectorAll('.mobile-dropdown-menu.active').forEach(openMenu => {
            if (openMenu !== dropdownMenu) {
                openMenu.classList.remove('active');
                openMenu.style.maxHeight = '0';
                openMenu.closest('.mobile-dropdown').querySelector('.mobile-dropdown-arrow').style.transform = 'rotate(0deg)';
            }
        });

        dropdownMenu.classList.toggle('active');
        if (dropdownMenu.classList.contains('active')) {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px'; // Set to actual height
            arrow.style.transform = 'rotate(180deg)';
        } else {
            dropdownMenu.style.maxHeight = '0';
            arrow.style.transform = 'rotate(0deg)';
        }
    }
    */


    // --- Set the current year in the footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- GitHub Commit Version Update ---
    const githubUsername = 'reignitesolutions';
    const githubRepoName = 'reignitesolutions.github.io';

    const versionShaSpan = document.getElementById('website-version-sha');
    const versionDateSpan = document.getElementById('website-version-date');

    if (versionShaSpan && versionDateSpan && githubUsername !== 'YOUR_GITHUB_USERNAME' && githubRepoName !== 'YOUR_REPO_NAME') {
        fetch(`https://api.github.com/repos/${githubUsername}/${githubRepoName}/commits?per_page=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.length > 0) {
                    const commitSha = data[0].sha.substring(0, 7); // Get first 7 characters of SHA
                    const commitDate = new Date(data[0].commit.author.date).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    versionShaSpan.textContent = commitSha;
                    versionDateSpan.textContent = commitDate;
                } else {
                    versionShaSpan.textContent = 'N/A';
                    versionDateSpan.textContent = 'N/A';
                    console.warn('No commit data found from GitHub API.');
                }
            })
            .catch(error => {
                console.error('Error fetching GitHub commit info:', error);
                versionShaSpan.textContent = 'Error';
                versionDateSpan.textContent = 'Error';
            });
    } else if (versionShaSpan && versionDateSpan) {
        // Fallback if GitHub details are not configured
        versionShaSpan.textContent = 'Manual';
        versionDateSpan.textContent = 'N/A';
        console.warn('GitHub username or repository name not configured in script.js. Automatic version update disabled.');
    }

    // --- Header Background Change on Scroll (Non-Mobile) ---
    // This is the code I provided in the previous answer.
    const mainNav = document.getElementById('main-nav');
    // logoSection and navLinksSection are not directly modified by JS for transparency/color here,
    // but rather by the .scrolled class in CSS, which is applied to mainNav.
    // If you need to target them explicitly for other reasons, keep these,
    // otherwise, the references are okay to keep as they don't harm.
    // const logoSection = mainNav.querySelector('.initial-logo-section');
    // const navLinksSection = mainNav.querySelector('.hidden.md\\:flex');


    // Function to check if the device is mobile (based on the Tailwind 'md' breakpoint)
    const isMobile = () => window.innerWidth < 768; // Tailwind's 'md' breakpoint is 768px

    function handleScroll() {
        if (isMobile()) {
            // For mobile, ensure the navigation always has its default background (which is controlled by the mobile menu x-show)
            mainNav.classList.remove('scrolled');
            // Ensure mainNav background reverts to initial CSS (transparent) on mobile if scrolled class was applied
            mainNav.style.backgroundColor = '';
        } else {
            // For desktop, apply scroll effects
            if (window.scrollY > 50) { // Adjust scroll threshold as needed
                mainNav.classList.add('scrolled');
            } else {
                mainNav.classList.remove('scrolled');
            }
        }
    }

    // Set initial state on load
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Listen for resize events to adjust behavior if device orientation/size changes
    window.addEventListener('resize', handleScroll);

}); // End of the single DOMContentLoaded listener