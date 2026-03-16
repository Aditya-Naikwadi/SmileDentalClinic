// SmileCare Dental - Interactive Elements

document.addEventListener('DOMContentLoaded', () => {
    // 1. Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);

    // 2. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
        
        // Hamburger animation
        const spans = hamburger.querySelectorAll('span');
        if (hamburger.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu on clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // 4. Scroll Reveal Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-up, .animate-fade').forEach(el => {
        observer.observe(el);
    });

    // 5. Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // 6. Counter Animation
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));

                const updateCount = () => {
                    const current = parseInt(entry.target.innerText.replace('+', '')) || 0;
                    const increment = Math.ceil(target / 50);
                    if (current < target) {
                        entry.target.innerText = (Math.min(current + increment, target)) + (target >= 1000 ? '+' : '');
                        setTimeout(updateCount, 30);
                    } else {
                        entry.target.innerText = target + (target >= 1000 ? '+' : '');
                    }
                };
                updateCount();
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
    // 7. Booking Widget Logic
    let currentStep = 1;
    const bookingSteps = document.querySelectorAll('.booking-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // State
    let bookingData = {
        service: null,
        doctor: null,
        date: null,
        time: null
    };

    const updateBookingUI = () => {
        bookingSteps.forEach((step, idx) => {
            step.classList.toggle('active', idx === currentStep - 1);
        });
        progressSteps.forEach((step, idx) => {
            step.classList.toggle('active', idx === currentStep - 1);
            step.classList.toggle('completed', idx < currentStep - 1);
        });

        prevBtn.disabled = currentStep === 1;
        if (currentStep === 4) nextBtn.innerText = "Confirm Appointment";
        else if (currentStep === 5) {
            nextBtn.style.display = 'none';
            prevBtn.style.display = 'none';
            // Update summary
            document.getElementById('summary-service').innerText = bookingData.service;
            document.getElementById('summary-doctor').innerText = bookingData.doctor;
            document.getElementById('summary-datetime').innerText = `${bookingData.date} at ${bookingData.time}`;
        } else {
            nextBtn.innerText = "Next Step";
            nextBtn.style.display = 'block';
            prevBtn.style.display = 'block';
        }
    };

    nextBtn.addEventListener('click', () => {
        if (currentStep < 5) {
            currentStep++;
            updateBookingUI();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateBookingUI();
        }
    });

    // Selection handlers
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
            chip.classList.add('selected');
            bookingData.service = chip.innerText;
        });
    });

    document.querySelectorAll('.dentist-option').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelectorAll('.dentist-option').forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            bookingData.doctor = option.querySelector('h4').innerText;
        });
    });

    // Mock Calendar
    const calGrid = document.getElementById('calGrid');
    if (calGrid) {
        for (let i = 1; i <= 31; i++) {
            const span = document.createElement('span');
            span.innerText = i;
            if (i === 12 || i === 15) span.classList.add('booked');
            else {
                span.addEventListener('click', () => {
                    document.querySelectorAll('.cal-grid span').forEach(s => s.classList.remove('selected'));
                    span.classList.add('selected');
                    bookingData.date = `March ${i}, 2026`;
                });
            }
            calGrid.appendChild(span);
        }
    }

    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.addEventListener('click', () => {
            if (slot.classList.contains('booked')) return;
            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
            bookingData.time = slot.getAttribute('data-time');
        });
    });

    // 8. Patient Portal Tabs
    const tabs = document.querySelectorAll('.p-tab');
    const contents = document.querySelectorAll('.p-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });

    // 9. Dental Chart Interaction
    const teeth = document.querySelectorAll('.tooth');
    const tooltip = document.getElementById('tooth-tooltip');

    teeth.forEach(tooth => {
        tooth.addEventListener('mouseenter', (e) => {
            const status = tooth.getAttribute('data-status');
            const date = tooth.getAttribute('data-date');
            const id = tooth.getAttribute('data-id');
            tooltip.innerHTML = `<strong>Tooth #${id}</strong>: ${status}<br>Last Treatment: ${date}`;
            tooltip.classList.add('active');
            
            // Position tooltip
            const rect = tooth.getBoundingClientRect();
            const portalRect = document.querySelector('.portal-content').getBoundingClientRect();
            tooltip.style.left = (rect.left - portalRect.left + rect.width / 2) + 'px';
            tooltip.style.bottom = (portalRect.bottom - rect.top + 20) + 'px';
        });

        tooth.addEventListener('mouseleave', () => {
            tooltip.classList.remove('active');
        });
    });
    // 10. Before & After Slider
    const baSlider = document.getElementById('baSlider');
    const imgAfter = document.getElementById('imgAfter');
    const baHandle = document.getElementById('baHandle');

    if (baSlider) {
        const moveSlider = (e) => {
            const rect = baSlider.getBoundingClientRect();
            let x;
            if (e.type.includes('touch')) {
                x = e.touches[0].clientX;
            } else {
                x = e.clientX;
            }
            let offset = x - rect.left;
            
            if (offset < 0) offset = 0;
            if (offset > rect.width) offset = rect.width;
            
            const percent = (offset / rect.width) * 100;
            imgAfter.style.width = percent + '%';
            baHandle.style.left = percent + '%';
        };

        baSlider.addEventListener('mousemove', moveSlider);
        baSlider.addEventListener('touchmove', moveSlider);
    }

    // 11. FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            const isActive = item.classList.toggle('active');
            q.setAttribute('aria-expanded', isActive);
        });
    });

    // 12. Pricing Toggle (Simple visual)
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
