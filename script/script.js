document.addEventListener('DOMContentLoaded', () => {

    // Data untuk proyek (agar tidak perlu ditulis ulang di JS)
    const projectsData = {
        1: {
            title: "Karangjaya Independence Day Campaign",
            category: "Social Media Design",
            images: [
                "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop"
            ],
            challenge: "The committee needed to create a festive and informative visual campaign to attract community participation for the 80th Indonesian Independence Day celebration.",
            solution: "We designed a cohesive set of visual assets including banners, posters, and brochures, using a vibrant and nationalistic theme to boost excitement and clarify event information."
        },
        2: {
            title: "E-commerce Pin Merchandise Design",
            category: "Graphic Design",
            images: [
                "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
            ],
            challenge: "A Tokopedia seller needed eye-catching product designs for their pin merchandise collection to stand out in the competitive e-commerce marketplace.",
            solution: "We created a series of modern, trendy pin designs with bold colors and contemporary graphics that appeal to young consumers and drive sales."
        },
        3: {
            title: "Product Teaser Video",
            category: "Reels Video",
            images: [
                "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop"
            ],
            challenge: "A startup needed to create buzz around their new product launch with engaging short-form video content for social media.",
            solution: "We produced dynamic teaser videos with motion graphics and trending audio that generated excitement and drove pre-order sign-ups across Instagram and TikTok."
        }
    };

    // Fungsi untuk Modal Proyek
    const projectModal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeProjectModalBtn = document.getElementById('close-project-modal');
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            const project = projectsData[projectId];
            
            if (project) {
                modalBody.innerHTML = `
                    <h2 class="modal-title">${project.title}</h2>
                    <span class="badge">${project.category}</span>
                    <div class="modal-gallery">
                        ${project.images.map(img => `<img src="${img}" alt="${project.title}" class="modal-img">`).join('')}
                    </div>
                    <div>
                        <h4>The Challenge</h4>
                        <p>${project.challenge}</p>
                    </div>
                    <div>
                        <h4>The Solution</h4>
                        <p>${project.solution}</p>
                    </div>
                `;
                projectModal.style.display = 'block';
            }
        });
    });

    closeProjectModalBtn.onclick = () => projectModal.style.display = "none";

    // Fungsi untuk Modal Proses
    const processModal = document.getElementById('process-modal');
    const openProcessModalBtn = document.getElementById('open-process-modal');
    const closeProcessModalBtn = document.getElementById('close-process-modal');

    openProcessModalBtn.onclick = () => processModal.style.display = "block";
    closeProcessModalBtn.onclick = () => processModal.style.display = "none";
    
    // Fungsi untuk menutup modal jika klik di luar konten
    window.onclick = (event) => {
        if (event.target == projectModal) {
            projectModal.style.display = "none";
        }
        if (event.target == processModal) {
            processModal.style.display = "none";
        }
    };

    // Fungsi untuk Mobile Menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNavLinks = document.getElementById('mobile-nav-links');

    mobileMenuButton.addEventListener('click', () => {
        mobileNavLinks.classList.toggle('active');
    });

    // Menutup menu mobile setelah link diklik
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNavLinks.classList.remove('active');
        });
    });
});