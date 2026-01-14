const menuBtn = document.querySelector('.menu-button');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeMenu');

// Function to open menu
menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.style.display = 'block';
});

// Function to close menu
const closeMenu = () => {
    sideMenu.classList.remove('active');
    overlay.style.display = 'none';
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // Close when clicking outside