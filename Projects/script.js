document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Navigation Scroll Effect
    const nav = document.getElementById('main-nav');
    
    window.addEventListener('scroll', () => {
        // Add solid background after scrolling down 50px
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Horizontal Scroll Enhancements (Optional UX touch)
    // Allows desktop users to drag to scroll the 'Resume' section
    const slider = document.getElementById('resume-grid');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (slider) {
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'pointer';
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'pointer';
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});