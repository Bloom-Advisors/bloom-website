const fs = require('fs');

const newCSS = `/* Service Cards - Split Layout */
.service-card {
  flex-shrink: 0;
  width: 450px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #0B1F33;
  border: 1px solid #163A5F;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: 
    border-color 0.5s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.service-image-wrapper {
  width: 100%;
  height: 45%;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #163A5F;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9);
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* Solid Content Wrapper */
.service-card-content {
  flex: 1;
  padding: 2.5rem 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: #0B1F33;
}

.service-card-title-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.service-card-dot {
  width: 8px;
  height: 8px;
  background-color: var(--brand-primary);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--brand-primary);
  opacity: 0.8;
  transition: transform 0.4s ease;
}

.service-card-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.service-card-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0;
}

/* Hover States (Desktop Only) */
@media (hover: hover) and (min-width: 992px) {
  .service-card:hover {
    transform: translateY(-8px);
    border-color: var(--brand-primary);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.6), 
      0 0 25px rgba(95, 167, 119, 0.2);
  }

  .service-card:hover .service-image {
    transform: scale(1.08);
  }

  .service-card:hover .service-card-dot {
    transform: scale(1.3);
  }
}

/* Responsive Fallback Styles - Mobile/Tablet Swipe Layout */
@media (max-width: 991px) {
  .services-section {
    height: auto !important;
    padding: 5rem 0 4rem;
  }

  .services-sticky-wrapper {
    position: static;
    height: auto;
    overflow: visible;
    padding: 0;
  }

  .services-container-vertical {
    padding: 0;
    gap: 3rem;
  }

  .services-track-container {
    width: 100%;
    overflow-x: auto;
    padding: 1rem 0;
    margin-top: 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: #163A5F #0B1F33;
  }

  .services-track {
    transform: none !important;
    gap: 1.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .service-card {
    width: 340px;
    height: 540px;
  }
  
  .service-card-content {
    padding: 2rem 1.75rem;
  }
}
`;

const targetPath = 'src/components/Services.css';
let content = fs.readFileSync(targetPath, 'utf8');

// Find the start index
const startIndex = content.indexOf('/* Service Cards - Glassmorphic Overlay */');
// Find the end index right before @media (max-width: 576px)
const endIndex = content.indexOf('@media (max-width: 576px)');

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.slice(0, startIndex);
  const after = content.slice(endIndex);
  fs.writeFileSync(targetPath, before + newCSS + after);
  console.log('Successfully replaced the card CSS.');
} else {
  console.log('Could not find markers to replace.');
}
