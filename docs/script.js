// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Dropdown Toggle for Accounts
  document.getElementById('accounts-toggle').addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const icon = e.target.querySelector('i');
  
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    icon.classList.toggle('fa-chevron-up');
    icon.classList.toggle('fa-chevron-down');
  });
  
  // Smooth scroll for anchor links (optional)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });