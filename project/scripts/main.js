// 1. HERO SLIDER
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('#prev-slide');
    const nextBtn = document.querySelector('#next-slide');
    
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        if(dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() { showSlide(currentSlide + 1); }
    function prevSlide() { showSlide(currentSlide - 1); }

    function startAutoSlide() { slideInterval = setInterval(nextSlide, 5000); }
    function resetAutoSlide() { clearInterval(slideInterval); startAutoSlide(); }

    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => { showSlide(index); resetAutoSlide(); });
    });

    startAutoSlide();
}

// 2. COURSE DATA & RENDERING
const coursesData = [
    { id: 1, title: "Web Development", level: "Beginner", description: "Learn HTML, CSS, and responsive design." },
    { id: 2, title: "Python Programming", level: "Intermediate", description: "Master data structures and automation." },
    { id: 3, title: "Digital Mind Crews", level: "Advanced", description: "Hands-on mentorship and real-world projects." }
];

function renderCourses() {
    const courseContainer = document.querySelector("#course-list");
    if (courseContainer) {
        const coursesHTML = coursesData.map(course => `
            <div class="course-card">
                <h3>${course.title}</h3>
                <p class="level-badge">${course.level}</p>
                <p>${course.description}</p>
            </div>
        `).join("");
        courseContainer.innerHTML = coursesHTML;
    }
}

// 3. FORM AUTO-SAVE (LocalStorage)
function setupFormAutoSave() {
    const form = document.querySelector("#registration-form");
    const notice = document.querySelector("#draft-notice");
    if (form && notice) {
        const savedDraft = localStorage.getItem("regFormDraft");
        if (savedDraft) {
            const draftData = JSON.parse(savedDraft);
            form.querySelector("#fullName").value = draftData.fullName || "";
            form.querySelector("#phone").value = draftData.phone || "";
            form.querySelector("#email").value = draftData.email || "";
            notice.style.display = "block";
        } else {
            notice.style.display = "none";
        }
        form.addEventListener("input", () => {
            const formData = {
                fullName: form.querySelector("#fullName").value,
                phone: form.querySelector("#phone").value,
                email: form.querySelector("#email").value
            };
            localStorage.setItem("regFormDraft", JSON.stringify(formData));
        });
        form.addEventListener("submit", () => localStorage.removeItem("regFormDraft"));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initSlider();
    renderCourses();
    setupFormAutoSave();
});