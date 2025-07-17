const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Animate header and bars, handle section visibility
const activePage = (skipSection = false) => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');
    header.classList.remove('active');
    void header.offsetWidth;
    header.classList.add('active');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);
    if (!skipSection) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
    }
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Navigation link click: activate section and nav link
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        link.classList.add('active');
        sections.forEach((section, sidx) => {
            if (sidx === idx) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        activePage(true);
    });
});

// Logo click: go to Home section
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[0].classList.add('active');
        sections.forEach((section, sidx) => {
            if (sidx === 0) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        activePage(true);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

// Resume tab switching
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;
const totalSlides = document.querySelectorAll('.portfolio-carousel .img-item').length;

// Enable/disable carousel arrows
const updateArrows = () => {
    if (index <= 0) {
        arrowLeft.classList.add('disabled');
    } else {
        arrowLeft.classList.remove('disabled');
    }
    if (index >= totalSlides - 1) {
        arrowRight.classList.add('disabled');
    } else {
        arrowRight.classList.remove('disabled');
    }
};

// Update carousel and project details
const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
    updateArrows();
};

arrowRight.addEventListener('click', () => {
    if (index < totalSlides - 1) {
        index++;
        activePortfolio();
    }
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        activePortfolio();
    }
});

activePortfolio();

document.addEventListener('DOMContentLoaded', () => {
    // Animate each letter in headings
    const headingSelectors = ['.heading', '.home-detail h1'];
    headingSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(heading => {
            heading.innerHTML = heading.textContent.split('').map(char => {
                if (char === ' ') return ' ';
                return `<span class="letter">${char}</span>`;
            }).join('');
        });
    });
});
