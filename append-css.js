const fs = require('fs');

const css = `
/* ==========================================================================
   Full-Screen Menu Overlay
   ========================================================================== */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0B1F33;
  z-index: 90; /* Below navbar (100) */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease-in-out;
}

.menu-overlay.open {
  opacity: 1;
  pointer-events: auto;
}

.menu-overlay-content {
  width: 100%;
  max-width: 1200px;
  padding: 0 4rem;
}

.menu-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.menu-links li {
  opacity: 0;
  transform: translateY(30px);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
}

/* Staggered entry animation using inline CSS variable */
.menu-overlay.open .menu-links li {
  opacity: 1;
  transform: translateY(0);
  transition-delay: calc(var(--animation-order) * 0.1s);
}

.menu-links a {
  font-family: inherit;
  font-size: 4.5rem;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: -1px;
  display: inline-block;
  transition: color 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.menu-links a:hover {
  color: var(--brand-primary);
  transform: translateX(15px);
}

/* Ensure navbar text is white when menu is open */
.navbar.menu-open {
  background-color: transparent !important;
  box-shadow: none !important;
}

.navbar.menu-open .btn-consult {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.navbar.menu-open .btn-consult:hover {
  background-color: var(--brand-primary);
  color: #000;
}

.navbar.menu-open .btn-menu {
  color: #ffffff;
}

.navbar.menu-open .logo-img {
  filter: brightness(0) invert(1) !important;
}

/* Mobile Adjustments for Menu */
@media (max-width: 768px) {
  .menu-overlay-content {
    padding: 0 2rem;
  }
  
  .menu-links a {
    font-size: 3rem;
  }
}
`;

fs.appendFileSync('src/components/Navbar.css', css);
console.log('Appended menu overlay CSS successfully.');
