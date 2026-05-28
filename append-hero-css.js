const fs = require('fs');

const css = `
/* ==========================================================================
   Mobile Adjustments
   ========================================================================== */
@media (max-width: 991px) {
  .hero {
    padding: 8rem 2rem 4rem;
  }
  
  .hero-title {
    font-size: 4rem;
    margin-bottom: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.05rem;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 7rem 1.5rem 3rem;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .stat-divider {
    width: 100%;
    height: 1px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
}
`;

fs.appendFileSync('src/components/Hero.css', css);
console.log('Appended Hero.css mobile queries successfully.');
