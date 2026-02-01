/* ========================================
   Blog Module - FBR Shot
   ======================================== */

export function initBlog() {
  const blogGrid = document.getElementById('blogGrid');
  if (!blogGrid) return;

  // Sample blog posts (in production, this would be loaded from data/blog-posts.json)
  const blogPosts = [
    {
      id: 1,
      title: '10 idées créatives pour personnaliser votre photobooth de mariage',
      slug: '10-idees-creatives-photobooth-mariage',
      excerpt: 'Découvrez comment rendre votre photobooth unique avec des accessoires thématiques, des fonds personnalisés et des filtres sur mesure pour votre jour J.',
      coverImage: 'assets/images/blog/blog-1.jpg',
      category: 'Mariage',
      author: 'Sophie Martin',
      publishedDate: '2026-01-15',
      readingTime: '5 min'
    },
    {
      id: 2,
      title: 'Photobooth en entreprise : booster l\'engagement de vos événements corporate',
      slug: 'photobooth-entreprise-engagement-evenements',
      excerpt: 'Comment utiliser un photobooth pour dynamiser vos séminaires, team buildings et événements d\'entreprise tout en renforçant votre image de marque.',
      coverImage: 'assets/images/blog/blog-2.jpg',
      category: 'Corporate',
      author: 'Jean Dupont',
      publishedDate: '2026-01-10',
      readingTime: '7 min'
    },
    {
      id: 3,
      title: 'Les tendances photobooths 2026 : technologie et créativité',
      slug: 'tendances-photobooths-2026-technologie-creativite',
      excerpt: 'Réalité augmentée, GIF animés, partage instantané... Découvrez les innovations qui révolutionnent l\'expérience photobooth cette année.',
      coverImage: 'assets/images/blog/blog-3.jpg',
      category: 'Tendances',
      author: 'Laura Petit',
      publishedDate: '2026-01-05',
      readingTime: '6 min'
    },
    {
      id: 4,
      title: 'Organiser un anniversaire inoubliable avec un photobooth',
      slug: 'organiser-anniversaire-inoubliable-photobooth',
      excerpt: 'Conseils pratiques et idées originales pour intégrer un photobooth à votre fête d\'anniversaire et créer des souvenirs mémorables.',
      coverImage: 'assets/images/blog/blog-4.jpg',
      category: 'Anniversaire',
      author: 'Marie Dubois',
      publishedDate: '2025-12-28',
      readingTime: '4 min'
    },
    {
      id: 5,
      title: 'Photobooth vs photographe professionnel : comment choisir ?',
      slug: 'photobooth-vs-photographe-professionnel-choisir',
      excerpt: 'Analyse comparative pour vous aider à déterminer la meilleure solution photo pour votre événement selon votre budget et vos besoins.',
      coverImage: 'assets/images/blog/blog-5.jpg',
      category: 'Conseils',
      author: 'Pierre Bernard',
      publishedDate: '2025-12-20',
      readingTime: '8 min'
    },
    {
      id: 6,
      title: 'Guide complet : préparer son espace pour un photobooth',
      slug: 'guide-complet-preparer-espace-photobooth',
      excerpt: 'Dimensions, éclairage, décoration... Tout ce qu\'il faut savoir pour créer l\'espace idéal pour votre photobooth et garantir des photos parfaites.',
      coverImage: 'assets/images/blog/blog-6.jpg',
      category: 'Guides',
      author: 'Sophie Martin',
      publishedDate: '2025-12-15',
      readingTime: '10 min'
    }
  ];

  // Format date
  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  }

  // Render blog posts
  function renderBlogPosts(posts, limit = 6) {
    const postsToShow = limit ? posts.slice(0, limit) : posts;

    blogGrid.innerHTML = postsToShow.map(post => `
      <div class="card blog-card scroll-reveal">
        <div class="card-image-wrapper">
          <img
            src="${post.coverImage}"
            alt="${post.title}"
            class="card-image"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'"
          >
        </div>
        <div class="card-body">
          <span class="blog-card-category">${post.category}</span>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <div class="blog-card-meta">
            <span>📅 ${formatDate(post.publishedDate)}</span>
            <span>⏱️ ${post.readingTime}</span>
          </div>
          <a href="blog/${post.slug}.html" class="btn btn-outline" style="width: 100%; margin-top: var(--spacing-lg);">
            Lire l'article
          </a>
        </div>
      </div>
    `).join('');
  }

  // Initialize
  renderBlogPosts(blogPosts, 6);

  // Load from JSON in production
  async function loadBlogPosts() {
    try {
      const response = await fetch('data/blog-posts.json');
      if (response.ok) {
        const posts = await response.json();
        renderBlogPosts(posts, 6);
      } else {
        // Fallback to hardcoded posts
        renderBlogPosts(blogPosts, 6);
      }
    } catch (error) {
      console.warn('Could not load blog posts from JSON, using fallback data');
      renderBlogPosts(blogPosts, 6);
    }
  }

  // Uncomment to load from JSON:
  // loadBlogPosts();
}
