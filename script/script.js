document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // DATABASE PROYEK ANDA - GANTI KONTEN DI SINI
  // =========================================================================
  const projectsData = {
    1: {
      title: "Reels Video Series for Shinjipedia",
      category: "Reels Video & Motion Graphics",
      thumbnail: "images/shinjipedia-reels-thumb-1.jpg", // GANTI dengan gambar thumbnail Anda
      images: [
        "images/shinjipedia-reels-thumb-1.jpg", // GANTI dengan screenshot/video Anda
      ],
      challenge:
        "Shinjipedia wanted to leverage the short-form video trend to increase reach and engagement, but lacked the resources for consistent video production.",
      solution:
        "We produced a series of dynamic Reels videos that followed trends, incorporating motion graphics and popular audio. This video series significantly increased account visibility and follower growth.",
    },
    2: {
      title: "Strategic Social Media Design for Shinjipedia",
      category: "Social Media Design & Brand Identity",
      thumbnail: "images/shinjipedia-feed-mockup.jpg", // GANTI dengan gambar thumbnail Anda
      images: [
        "images/shinjipedia-feed-mockup.jpg",
        "images/shinjipedia-carousel-example.jpg",
        "images/shinjipedia-promo-example.jpg",
      ],
      challenge:
        "As a legally registered company (PT), Shinjipedia needed a social media visual identity that clearly communicated trust, professionalism, and reliability to stand out from informal competitors.",
      solution:
        "We took over the visual strategy, focusing on brand consistency with the Shinji-chan mascot, creating educational content about transaction security, and designing engaging templates for quizzes and testimonials. This transformed Shinjipedia's feed to be more professional and effective.",
    },
    3: {
      title: "Karangjaya Independence Day Campaign",
      category: "Event Branding & Social Media",
      thumbnail: "images/karangjaya-poster-final.jpg", // GANTI dengan gambar thumbnail Anda
      images: [
        "images/karangjaya-poster-final.jpg",
        "images/karangjaya-banner-final.jpg",
        "images/karangjaya-brosur-final.jpg",
      ],
      challenge:
        "The Karangjaya youth committee required a professional and festive visual campaign to maximize citizen participation in the annual Independence Day celebration.",
      solution:
        "We designed a complete set of promotional materials, including banners, posters, and social media graphics. The cohesive and spirited design successfully increased event awareness and helped achieve record participation.",
    },
    4: {
      title: "Social Media Campaign for Waroeng Es Teh Yuyun",
      category: "Social Media Design & Marketing",
      thumbnail: "images/teh-yuyun-mockup.jpg", // GANTI dengan gambar thumbnail Anda
      images: [
        "images/teh-yuyun-mockup.jpg",
        "images/teh-yuyun-promo.jpg",
        "images/teh-yuyun-testimoni.jpg",
      ],
      challenge:
        "Waroeng Es Teh Yuyun, a local culinary business, needed a strong visual strategy to increase brand awareness and engagement on social media.",
      solution:
        "We designed and executed a series of cohesive visual content, including product photos and engaging graphics, which resulted in an average engagement rate increase of 30%.",
    },
    5: {
      title: "Brand Credibility Campaign for HiSport",
      category: "Visual Branding & Social Media",
      thumbnail: "images/hisport-mockup.jpg", // GANTI dengan gambar thumbnail Anda
      images: [
        "images/hisport-mockup.jpg",
        "images/hisport-new-collection.jpg",
        "images/hisport-testimonial.jpg",
      ],
      challenge:
        "As an SME sports brand, HiSport needed to build credibility and trust in a competitive market. They required visuals that effectively showcased product quality and positive customer reviews.",
      solution:
        "We designed various engaging and informative visual elements, including high-quality product graphics. By highlighting positive testimonials from customers and athletes, we successfully built a more trustworthy and professional brand image.",
    },
  };

  // =========================================================================
  // FUNGSI UNTUK MENAMPILKAN PROYEK SECARA DINAMIS
  // =========================================================================
  const projectGrid = document.querySelector(".project-grid");
  if (projectGrid) {
    projectGrid.innerHTML = ""; // Kosongkan grid terlebih dahulu
    // Tampilkan proyek sesuai urutan ID (1, 2, 3, 4, 5)
    Object.keys(projectsData)
      .sort((a, b) => a - b)
      .forEach((id) => {
        const project = projectsData[id];
        const projectCardHTML = `
                <div class="project-card" data-project-id="${id}">
                    <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
                    <div class="project-card-content">
                        <span class="badge">${project.category}</span>
                        <h3>${project.title}</h3>
                    </div>
                </div>
            `;
        projectGrid.innerHTML += projectCardHTML;
      });
  }

  // =========================================================================
  // FUNGSI UNTUK MODAL (POP-UP)
  // =========================================================================
  const projectModal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");
  const closeProjectModalBtn = document.getElementById("close-project-modal");

  // Kita harus menambahkan event listener setelah kartu proyek dibuat
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.projectId;
      const project = projectsData[projectId];

      if (project) {
        modalBody.innerHTML = `
                    <h2 class="modal-title">${project.title}</h2>
                    <span class="badge">${project.category}</span>
                    <div class="modal-gallery">
                        ${project.images
                          .map(
                            (img) =>
                              `<img src="${img}" alt="${project.title}" class="modal-img">`
                          )
                          .join("")}
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
        projectModal.style.display = "block";
      }
    });
  });

  if (closeProjectModalBtn) {
    closeProjectModalBtn.onclick = () => (projectModal.style.display = "none");
  }

  window.onclick = (event) => {
    if (event.target == projectModal) {
      projectModal.style.display = "none";
    }
  };

  // =========================================================================
  // FUNGSI UNTUK MENU MOBILE
  // =========================================================================
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileNavLinks = document.getElementById("mobile-nav-links");

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", () => {
      mobileNavLinks.classList.toggle("active");
    });
  }

  document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileNavLinks.classList.contains("active")) {
        mobileNavLinks.classList.remove("active");
      }
    });
  });
});
