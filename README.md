# Bloom Advisors WordPress Theme

Custom WordPress theme for Bloom Advisors - Dynamics 365 Business Central and Solver xFP&A consultancy.

## Installation

1. Zip the `bloom-advisors` folder
2. Go to WordPress Admin → Appearance → Themes → Add New → Upload Theme
3. Upload the zip and activate

## Setup After Activation

### 1. Create Pages
Create the following pages and assign their templates:
- **Home** → Set as Static Front Page (Settings → Reading)
- **Services** → Template: "Services Page"
- **About** → Template: "About Page"
- **Contact** → Template: "Contact Page"
- **Projects** → (uses archive template for Case Studies CPT)

### 2. Set Up Navigation
- Go to Appearance → Menus
- Create a menu and assign it to "Primary Menu"
- Add your pages to the menu

### 3. Upload Logo
- Go to Appearance → Customize → Site Identity → Logo

### 4. Configure Contact Info
- Go to Appearance → Customize → Contact Information
- Fill in email, phone, and address

### 5. Add Content via Custom Post Types
- **Case Studies**: Add via the "Case Studies" menu in admin
- **Services**: Add via the "Services" menu in admin
- **Team Members**: Add via the "Team Members" menu in admin

### 6. Contact Form
- Install "Contact Form 7" plugin
- Create a form and replace `[contact-form-7 id="FORM_ID"]` in `page-templates/contact.php` with your form shortcode

## Required Plugins
- **Contact Form 7** - For the contact page form

## Theme Structure
```
bloom-advisors/
├── assets/
│   ├── css/main.css          ← All styles
│   ├── js/main.js            ← Interactions (carousel, FAQ, navbar)
│   ├── js/scroll-reveal.js   ← Scroll animations
│   └── images/               ← Copy your public/ images here
├── inc/
│   ├── custom-post-types.php ← CPTs: case_study, service, team_member
│   └── customizer.php        ← Theme customizer settings
├── page-templates/
│   ├── about.php
│   ├── contact.php
│   └── services.php
├── template-parts/
│   ├── hero.php
│   ├── about.php
│   ├── services.php
│   ├── faq.php
│   └── cta-banner.php
├── front-page.php            ← Homepage
├── header.php
├── footer.php
├── index.php
├── functions.php
└── style.css
```

## Images
Copy all images from the `public/` folder of the React project into `assets/images/`.

## Notes
- The theme uses Lucide Icons via CDN (same as the React version)
- Scroll animations use IntersectionObserver (same system as React)
- The services carousel is vanilla JS (replaces React state)
- FAQ accordion is vanilla JS (replaces React useState)
