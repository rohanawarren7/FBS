#!/usr/bin/env python3
"""
Script to generate all service and legal pages for Fallow Building Services
"""

# Service pages data
services = [
    {
        "filename": "extensions.html",
        "title": "Home Extensions | Fallow Building Services London",
        "heading": "HOME EXTENSIONS",
        "description": "Transform your home with a professionally designed and built extension that adds valuable space and increases your property value.",
        "image": "https://images.unsplash.com/photo-1719381502987-058c2140df08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxob21lJTIwZXh0ZW5zaW9ufGVufDB8fHx8MTc2MDI4MTQzMnww&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "home-renovations.html",
        "title": "Home Renovations | Fallow Building Services London",
        "heading": "HOME RENOVATIONS",
        "description": "Breathe new life into your property with our comprehensive home renovation services. From minor updates to complete refurbishments, we handle it all.",
        "image": "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwyfHxob21lJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NjAyODE0Mzh8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "porches.html",
        "title": "Porches | Fallow Building Services London",
        "heading": "PORCHES",
        "description": "Add character and practical space to your home with a beautifully crafted porch that enhances curb appeal and provides shelter.",
        "image": "https://images.unsplash.com/photo-1699720435235-e1a4a7ac71e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxwb3JjaCUyMGVudHJhbmNlfGVufDB8fHx8MTc2MDI4MTQ2MHww&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "loft-conversions.html",
        "title": "Loft Conversions | Fallow Building Services London",
        "heading": "LOFT CONVERSIONS",
        "description": "Maximize your home's potential by converting unused loft space into a stunning bedroom, office, or living area with expert craftsmanship.",
        "image": "https://images.unsplash.com/photo-1610565816661-9aa6f77b3e71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxsb2Z0JTIwY29udmVyc2lvbnxlbnwwfHx8fDE3NjAyODE0NTV8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "kitchen-refurbishments.html",
        "title": "Kitchen Refurbishments | Fallow Building Services London",
        "heading": "KITCHEN REFURBISHMENTS",
        "description": "Transform your kitchen into a modern, functional space with our expert refurbishment services. From design to installation, we handle everything.",
        "image": "https://images.unsplash.com/photo-1601760561441-16420502c7e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwwfHx8fDE3NjAyODE0NDN8MA&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "bathroom-refurbishments.html",
        "title": "Bathroom Refurbishments | Fallow Building Services London",
        "heading": "BATHROOM REFURBISHMENTS",
        "description": "Create your dream bathroom with our professional refurbishment services. From contemporary to traditional styles, we deliver exceptional results.",
        "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHJlbm92YXRpb258ZW58MHx8fHwxNzYwMjgxNDQ4fDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "outbuildings.html",
        "title": "Outbuildings | Fallow Building Services London",
        "heading": "OUTBUILDINGS",
        "description": "Expand your property with custom-built outbuildings. Perfect for garden offices, studios, gyms, or storage - built to the highest standards.",
        "image": "https://images.unsplash.com/photo-1685633225252-40efb423c15f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBvZmZpY2V8ZW58MHx8fHwxNzYwMjgxNDY2fDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "property-management.html",
        "title": "Property Management | Fallow Building Services London",
        "heading": "PROPERTY MANAGEMENT",
        "description": "Comprehensive property management services for landlords. We handle everything from tenant finding to maintenance, giving you peace of mind.",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzYwMjgxNDcxfDA&ixlib=rb-4.1.0&q=85"
    },
    {
        "filename": "guaranteed-rent.html",
        "title": "Guaranteed Rent | Fallow Building Services London",
        "heading": "GUARANTEED RENT",
        "description": "Enjoy stress-free, guaranteed rental income every month regardless of voids or tenant issues. Perfect for landlords who want hassle-free property investment.",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNzYwMjgxNDcxfDA&ixlib=rb-4.1.0&q=85"
    }
]

# Generate service page HTML
for service in services:
    html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{service["title"]}</title>
    <meta name="description" content="{service["description"]}">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navigation" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">
                <img src="https://customer-assets.emergentagent.com/job_fbs-renovations/artifacts/ymc1rdo4_image_8258e0ff-6cbd-4e4f-91f9-5065f696ed58%20%281%29.png" alt="Fallow Building Services" class="nav-logo-img">
            </a>

            <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
                <i class="fas fa-bars"></i>
            </button>

            <div class="nav-menu" id="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                
                <div class="nav-dropdown">
                    <button class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        Building Services <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a href="extensions.html" class="dropdown-item">Extensions</a>
                        <a href="home-renovations.html" class="dropdown-item">Home Renovations</a>
                        <a href="porches.html" class="dropdown-item">Porches</a>
                        <a href="loft-conversions.html" class="dropdown-item">Loft Conversions</a>
                        <a href="kitchen-refurbishments.html" class="dropdown-item">Kitchen Refurbishments</a>
                        <a href="bathroom-refurbishments.html" class="dropdown-item">Bathroom Refurbishments</a>
                        <a href="outbuildings.html" class="dropdown-item">Outbuildings</a>
                    </div>
                </div>

                <div class="nav-dropdown">
                    <button class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        Property Services <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="dropdown-menu">
                        <a href="property-management.html" class="dropdown-item">Property Management</a>
                        <a href="guaranteed-rent.html" class="dropdown-item">Guaranteed Rent</a>
                    </div>
                </div>

                <a href="tel:07459627464" class="nav-link nav-cta">Call Us</a>
            </div>
        </div>
    </nav>

    <!-- Service Hero -->
    <section class="hero-section service-hero">
        <div class="hero-background">
            <img src="{service["image"]}" alt="{service["heading"]}" class="hero-image">
            <div class="hero-overlay"></div>
        </div>
        
        <div class="hero-content">
            <h1 class="hero-title">{service["heading"]}</h1>
            <p class="hero-description">{service["description"]}</p>
            
            <div class="hero-cta">
                <a href="mailto:rwarreninfo@gmail.com?subject=Free Quote Request - {service["heading"]}" class="btn-primary">GET A FREE QUOTE</a>
                <a href="tel:07459627464" class="btn-secondary">
                    <i class="fas fa-phone"></i> 07459 627464
                </a>
            </div>
        </div>
    </section>

    <!-- Contact CTA -->
    <section class="services-section">
        <div class="services-container" style="text-align: center;">
            <h2 class="category-title">READY TO GET STARTED?</h2>
            <p class="category-description" style="margin-bottom: 40px;">
                Contact us today for a free, no-obligation quote for your {service["heading"].lower()} project
            </p>
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                <a href="mailto:rwarreninfo@gmail.com" class="btn-primary">GET YOUR FREE QUOTE</a>
                <a href="https://wa.me/+447459627464" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                    <i class="fab fa-whatsapp"></i> WHATSAPP US
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-brand">
                    <img src="https://customer-assets.emergentagent.com/job_fbs-renovations/artifacts/c6g7jh1c_Large%20Logo%201.png" alt="Fallow Building Services" class="footer-logo">
                </div>
                
                <div class="footer-contact">
                    <h3 class="footer-title">GET IN TOUCH</h3>
                    <div class="contact-items">
                        <a href="tel:07459627464" class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>07459 627464</span>
                        </a>
                        <a href="https://wa.me/+447459627464" target="_blank" rel="noopener noreferrer" class="contact-item">
                            <i class="fab fa-whatsapp"></i>
                            <span>WhatsApp Us</span>
                        </a>
                        <a href="mailto:rwarreninfo@gmail.com" class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>rwarreninfo@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div class="footer-areas">
                    <h3 class="footer-title">AREAS WE SERVE</h3>
                    <div class="footer-areas-list">
                        <span class="footer-area-item">Waltham Forest</span>
                        <span class="footer-area-item">Redbridge</span>
                        <span class="footer-area-item">Enfield</span>
                        <span class="footer-area-item">Newham</span>
                        <span class="footer-area-item">Barking & Dagenham</span>
                        <span class="footer-area-item">Romford</span>
                        <span class="footer-area-item">Hornchurch</span>
                        <span class="footer-area-item">Havering</span>
                        <span class="footer-area-item">Essex</span>
                        <span class="footer-area-item">East London</span>
                    </div>
                </div>

                <div class="footer-reviews">
                    <h3 class="footer-title">OUR REVIEWS</h3>
                    <div class="footer-bark-widget">
                        <a href='https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/' target='_blank' rel='noopener noreferrer' class='bark-widget' data-type='reviews' data-id='Gw6Nv' data-image='medium-navy' data-version='3.0'>Fallow Building Services</a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p class="footer-company">Fallow Business Group Ltd trading as Fallow Building Services</p>
                <p class="footer-registration">Company Registration Number: 16532814</p>
                <div class="footer-links">
                    <a href="privacy-policy.html" class="footer-link">Privacy Policy</a>
                    <span class="footer-separator">|</span>
                    <a href="terms-conditions.html" class="footer-link">Terms & Conditions</a>
                </div>
                <p class="footer-copyright">&copy; 2024 Fallow Building Services. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script type='text/javascript' src='https://www.bark.com/assets/js/frontend-v2/widgets-v2.eab06aaee7c9d78cba9ae3ee88f0ad94.v2.js' defer></script>
    <script src="assets/js/main.js"></script>
</body>
</html>'''
    
    with open(service["filename"], 'w') as f:
        f.write(html_content)
    print(f"Created {service['filename']}")

print("\nAll service pages created successfully!")
