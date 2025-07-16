document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for Anchor Links ---
    // This section handles smooth scrolling when clicking on internal anchor links.
    // It prevents default browser behavior for same-page links and scrolls smoothly.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Get the path of the current page and the target page from the link
            const currentPath = window.location.pathname.split('/').pop();
            const targetPath = this.getAttribute('href').split('#')[0].split('/').pop();

            // Check if the link is an internal anchor on the same page
            // Handles cases like index.html, empty path, or direct hash links
            if (currentPath === targetPath || (currentPath === '' && targetPath === 'index.html') || (currentPath === 'index.html' && targetPath === '')) {
                e.preventDefault(); // Prevent default anchor click behavior
                const targetId = this.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth' // Smooth scroll effect
                    });
                }
            }
            // For external links (to other HTML pages), default behavior is fine and not prevented.
        });
    });

    // --- FAQ Accordion Functionality (for faq.html) ---
    // This function is exposed globally to be called directly from HTML elements (e.g., onclick).
    // It toggles an 'active' class on the parent FAQ item, which should be styled with CSS
    // to show/hide the answer and rotate an icon.
    window.toggleFaq = function(element) {
        const faqItem = element.closest('.faq-item');
        if (faqItem) { // Ensure faqItem exists before trying to toggle
            faqItem.classList.toggle('active');
        }
    };

    // --- Testimonial Carousel Functionality (for testimonials.html) ---
    // This section manages the testimonial carousel, including auto-slide,
    // navigation buttons, and responsive display of slides.
    const carouselSlides = document.querySelector('.carousel-slides');
    if (carouselSlides) { // Only run if the carousel exists on the current page
        const slides = document.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('.carousel-button-prev');
        const nextButton = document.querySelector('.carousel-button-next');
        const dotsContainer = document.querySelector('.carousel-dots');
        let currentSlideIndex = 0; // Tracks the index of the first visible slide
        let autoSlideInterval;

        // Determines how many slides should be visible at once based on screen width
        const getSlidesPerView = () => {
            return window.innerWidth >= 768 ? 2 : 1; // 2 slides on desktop (>=768px), 1 on mobile
        };
        let slidesPerView = getSlidesPerView();

        // Creates pagination dots based on the number of slide groups
        const createDots = () => {
            dotsContainer.innerHTML = ''; // Clear any existing dots
            const totalDots = Math.ceil(slides.length / slidesPerView);
            for (let i = 0; i < totalDots; i++) {
                const dot = document.createElement('span');
                dot.classList.add('carousel-dot');
                // Store the starting index of the slide group this dot represents
                dot.setAttribute('data-slide-index', i * slidesPerView);
                if (i === 0) {
                    dot.classList.add('active'); // Mark the first dot as active initially
                }
                dot.addEventListener('click', (e) => {
                    currentSlideIndex = parseInt(e.target.getAttribute('data-slide-index'));
                    updateCarousel();
                    resetAutoSlide(); // Reset auto-slide timer on manual navigation
                });
                dotsContainer.appendChild(dot);
            }
        };

        // Updates the carousel's position and the active pagination dot
        const updateCarousel = () => {
            // Ensure currentSlideIndex stays within valid bounds
            // It adjusts to ensure we don't try to show slides beyond the last available group
            if (currentSlideIndex < 0) {
                currentSlideIndex = 0;
            } else if (currentSlideIndex > slides.length - slidesPerView) {
                currentSlideIndex = slides.length - slidesPerView;
                // Fallback for cases where slides.length - slidesPerView might be negative
                if (currentSlideIndex < 0) currentSlideIndex = 0;
            }
            
            // Calculate the translation offset for the carousel slides container
            // We move by the width of a single slide multiplied by the current slide index.
            // This assumes each .carousel-slide has a width that corresponds to one visible item.
            const offset = -currentSlideIndex * slides[0].offsetWidth;
            carouselSlides.style.transform = `translateX(${offset}px)`;

            // Update active dot based on the current slide group
            document.querySelectorAll('.carousel-dot').forEach((dot) => {
                const dotSlideIndex = parseInt(dot.getAttribute('data-slide-index'));
                // A dot is active if the currentSlideIndex falls within its represented group
                if (currentSlideIndex >= dotSlideIndex && currentSlideIndex < dotSlideIndex + slidesPerView) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };

        // Navigates to the next set of slides
        const showNextSlide = () => {
            currentSlideIndex += slidesPerView;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0; // Loop back to the start if at the end
            }
            updateCarousel();
        };

        // Navigates to the previous set of slides
        const showPrevSlide = () => {
            currentSlideIndex -= slidesPerView;
            if (currentSlideIndex < 0) {
                // Loop to the end, ensuring we land on a valid starting index for a group
                currentSlideIndex = slides.length - (slides.length % slidesPerView || slidesPerView);
                if (currentSlideIndex < 0) currentSlideIndex = 0; // Fallback for very few slides
            }
            updateCarousel();
        };

        // Starts the automatic slide rotation
        const startAutoSlide = () => {
            autoSlideInterval = setInterval(showNextSlide, 5000); // Change slide every 5 seconds
        };

        // Resets the auto-slide timer (called on manual navigation)
        const resetAutoSlide = () => {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        };

        // Event Listeners for carousel navigation buttons
        prevButton.addEventListener('click', () => {
            showPrevSlide();
            resetAutoSlide();
        });

        nextButton.addEventListener('click', () => {
            showNextSlide();
            resetAutoSlide();
        });

        // Handle window resize events for responsive carousel behavior
        window.addEventListener('resize', () => {
            const newSlidesPerView = getSlidesPerView();
            if (newSlidesPerView !== slidesPerView) {
                slidesPerView = newSlidesPerView;
                createDots(); // Recreate dots if the number of slides per view changes
            }
            updateCarousel(); // Recalculate carousel position on resize
        });

        // Initial setup for the carousel when the page loads
        createDots();
        updateCarousel();
        startAutoSlide();
    } // End of carouselSlides if block

    // --- Set the current year in the footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- GitHub Commit Version Update ---
    // IMPORTANT: Replace 'reignitesolutions' and 'reignitesolutions.github.io' with your actual GitHub details.
    // This fetches the latest commit SHA and date from your public GitHub repository.
    // Be aware of GitHub API rate limits (60 requests per hour for unauthenticated users).
    // For production sites with high traffic, a server-side build process or build-time injection is recommended.
    const githubUsername = 'reignitesolutions'; // e.g., 'your-username' - REPLACE THIS
    const githubRepoName = 'reignitesolutions.github.io';     // e.g., 'your-repo-name' - REPLACE THIS

    const versionShaSpan = document.getElementById('website-version-sha');
    const versionDateSpan = document.getElementById('website-version-date');

    // Only attempt to fetch if both spans exist and the GitHub details are updated from placeholders
    if (versionShaSpan && versionDateSpan && githubUsername !== 'YOUR_GITHUB_USERNAME' && githubRepoName !== 'YOUR_REPO_NAME') {
        fetch(`https://api.github.com/repos/${githubUsername}/${githubRepoName}/commits?per_page=1`)
            .then(response => {
                if (!response.ok) {
                    // Throw an error if the network response was not ok (e.g., 404, 500)
                    throw new Error(`GitHub API error: ${response.statusText} (Status: ${response.status})`);
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
                    // Handle case where API returns no commit data
                    versionShaSpan.textContent = 'N/A';
                    versionDateSpan.textContent = 'N/A';
                    console.warn('No commit data found from GitHub API.');
                }
            })
            .catch(error => {
                // Catch any errors during the fetch operation
                console.error('Error fetching GitHub commit info:', error);
                versionShaSpan.textContent = 'Error';
                versionDateSpan.textContent = 'Error';
            });
    } else if (versionShaSpan && versionDateSpan) {
        // Fallback if GitHub details are not configured (still show something)
        versionShaSpan.textContent = 'Manual';
        versionDateSpan.textContent = 'N/A';
        console.warn('GitHub username or repository name not configured in script.js. Automatic version update disabled.');
    }

    // --- Scroll-based Text Animation ---
    // This effect dynamically changes the opacity, font weight, and font size
    // of elements with the class 'textDiv' based on their position relative to the viewport center.
    window.addEventListener("scroll", () => {
        const textDivs = document.querySelectorAll(".textDiv");
        const viewportHeight = window.innerHeight;
        const quarterHeight = viewportHeight / 4;
        // const centerY = window.scrollY + viewportHeight / 2; // Not directly used in current logic, but useful for debugging

        textDivs.forEach((div) => {
            const rect = div.getBoundingClientRect(); // Get size and position relative to viewport
            const divCenterY = rect.top + rect.height / 2; // Calculate center of the div in viewport

            let opacity;
            let weight;
            let size;

            // Fading logic:
            // If div center is in the top quarter or bottom quarter of the viewport,
            // opacity/weight/size diminish. Otherwise, they are full.
            if (divCenterY < quarterHeight) {
                opacity = divCenterY / quarterHeight;
            } else if (divCenterY > viewportHeight - quarterHeight) {
                opacity = (viewportHeight - divCenterY) / quarterHeight;
            } else {
                opacity = 1; // Fully visible in the middle 50% of the viewport
            }

            // Clamp opacity between 0 and 1
            opacity = Math.max(0, Math.min(1, opacity));
            
            // Calculate font weight and size based on opacity
            // Note: font-weight accepts integer values (100-900). Floating points
            // will be rounded by the browser, which might not be perfectly smooth.
            weight = opacity * 900; 
            size = opacity * 3 + 1; // Adjust calculation for better visual effect, e.g., from 1vw to 4vw
            
            div.style.opacity = opacity;
            div.style.fontWeight = weight;
            div.style.fontSize = size + "vw";
        });
    });

    // Trigger the scroll event once on page load to apply initial styles
    window.dispatchEvent(new Event("scroll"));

});
