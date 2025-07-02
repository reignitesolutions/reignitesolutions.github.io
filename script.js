
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
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

    // FAQ Accordion Functionality (only relevant on faq.html)
    window.toggleFaq = function(element) {
        const faqItem = element.closest('.faq-item');
        faqItem.classList.toggle('active');
    };

    // Testimonial Carousel Functionality (only relevant on testimonials.html)
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

    // Mobile Menu Functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeMobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Close mobile menu when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

    // Mobile dropdown toggle (for "Our Approach" and "Company" in mobile menu)
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
// Set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- GitHub Commit Version Update ---
    // IMPORTANT: Replace 'YOUR_GITHUB_USERNAME' and 'YOUR_REPO_NAME' with your actual GitHub details.
    // This fetches the latest commit SHA and date from your public GitHub repository.
    // Be aware of GitHub API rate limits (60 requests per hour for unauthenticated users).
    // For production sites with high traffic, a server-side build process is recommended.
    const githubUsername = 'reignitesolutions'; // e.g., 'your-username' - REPLACE THIS
    const githubRepoName = 'reignitesolutions.github.io';     // e.g., 'your-repo-name' - REPLACE THIS

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
});