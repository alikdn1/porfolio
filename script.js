 const projects = [
    { name:'auction', src:'pictures/auction', caption:'Auction Platform — Rare items sold through live auctions' },
    { name:'menu', src:'pictures/c7d47092-dcc6-4fdb-b376-f41fae42f28a.jpeg', caption:'Digital Menu — Restaurant menu experience' },
    { name:'gamestore', src:'pictures/steam.jpeg', caption:'Game Store — Steam-style game marketplace' },
    { name:'store', src:'pictures/store.jpeg', caption:'Clothes Store — E-commerce storefront' },
  ];

  let currentIndex = 0;

  function openModal(name) {
    currentIndex = projects.findIndex(p => p.name === name);
    if (currentIndex === -1) return;
    showSlide(currentIndex);
    document.getElementById('myModal').classList.add('open');
  }

  function showSlide(i) {
    document.getElementById('modalImg').src = projects[i].src;
    document.getElementById('modalCaption').textContent = projects[i].caption;
  }

  function closeModal() {
    document.getElementById('myModal').classList.remove('open');
  }

  function navigateSlides(dir) {
    currentIndex = (currentIndex + dir + projects.length) % projects.length;
    showSlide(currentIndex);
  }

  function handleModalClick(e) {
    if (e.target === document.getElementById('myModal')) closeModal();
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateSlides(-1);
    if (e.key === 'ArrowRight') navigateSlides(1);
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
