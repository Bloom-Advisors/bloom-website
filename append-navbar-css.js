const fs = require('fs');

const css = `
/* ==========================================================================
   Mobile Adjustments for Navbar
   ========================================================================== */
@media (max-width: 991px) {
  .navbar {
    padding: 0.75rem 1.5rem;
  }
  
  .navbar.scrolled {
    padding: 0.5rem 1.5rem;
  }
  
  .logo-img {
    height: 100px;
    margin: -30px 0;
  }
}

@media (max-width: 576px) {
  .logo-img {
    height: 80px;
    margin: -25px 0;
  }
  
  /* Hide the "Book a Consultation" text and just show icon, or hide button entirely on small screens */
  .btn-consult {
    display: none;
  }
  
  .navbar-actions {
    gap: 1rem;
  }
}
`;

fs.appendFileSync('src/components/Navbar.css', css);
console.log('Appended Navbar mobile adjustments successfully.');
