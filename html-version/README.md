# Fallow Building Services - Static HTML Website

## Overview
This is a fully static HTML/CSS/JavaScript version of the Fallow Building Services website, optimized for GitHub Pages deployment.

## Features
- ✅ Fully responsive design
- ✅ Interactive dropdown navigation
- ✅ SEO optimized
- ✅ Bark.com reviews integration
- ✅ WhatsApp integration
- ✅ 11 pages (Homepage + 8 services + 2 legal pages)
- ✅ Mobile-friendly hamburger menu
- ✅ Smooth animations and transitions

## File Structure
```
html-version/
├── index.html                      # Homepage
├── extensions.html                 # Extensions service page
├── home-renovations.html           # Home renovations service page
├── porches.html                    # Porches service page
├── loft-conversions.html           # Loft conversions service page
├── kitchen-refurbishments.html     # Kitchen refurbishments page
├── bathroom-refurbishments.html    # Bathroom refurbishments page
├── outbuildings.html               # Outbuildings service page
├── property-management.html        # Property management page
├── guaranteed-rent.html            # Guaranteed rent page
├── privacy-policy.html             # Privacy policy page
├── terms-conditions.html           # Terms & conditions page
├── assets/
│   ├── css/
│   │   └── style.css              # Main stylesheet
│   └── js/
│       └── main.js                # Main JavaScript file
└── README.md                       # This file
```

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `fallow-building-services`)
4. Set it to **Public**
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL files from the `html-version` folder
3. Maintain the folder structure (assets/css/ and assets/js/)
4. Write a commit message: "Initial commit - Fallow Building Services website"
5. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Navigate to the html-version directory
cd /path/to/html-version

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Fallow Building Services website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. Scroll down to **Pages** section (in left sidebar under "Code and automation")
4. Under "Source", select **Deploy from a branch**
5. Under "Branch", select **main** and **/ (root)**
6. Click **Save**
7. Wait 2-5 minutes for deployment

### Step 4: Access Your Live Website
Your website will be live at:
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

For example: `https://johndoe.github.io/fallow-building-services/`

## Custom Domain Setup (Optional)

### Add Custom Domain
1. Go to repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `www.fallowbuildingservices.co.uk`)
3. Click Save
4. Wait for DNS check to complete

### Configure DNS Records
Add these records at your domain registrar:

**For www subdomain:**
```
Type: CNAME
Host: www
Value: YOUR-USERNAME.github.io
TTL: 3600
```

**For root domain (optional):**
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
TTL: 3600
```

Wait 24-48 hours for DNS propagation.

## Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization
- All images loaded from CDN
- Minimal CSS/JS footprint
- No external dependencies except Font Awesome and Bark.com widget
- Optimized for fast loading

## SEO Features
- Semantic HTML5 markup
- Meta descriptions on all pages
- Open Graph tags
- Proper heading hierarchy
- Alt text for images
- Sitemap friendly structure

## Customization

### Updating Content
1. Edit HTML files directly
2. Push changes to GitHub
3. GitHub Pages will auto-deploy (2-5 minutes)

### Changing Colors
Edit the CSS variables in `assets/css/style.css`:
```css
:root {
    --brand-primary: #d9fb06;  /* Change this */
    --text-primary: #d9fb06;    /* And this */
    /* etc */
}
```

### Adding New Pages
1. Duplicate an existing HTML file
2. Update the content
3. Add link to navigation in ALL pages
4. Upload to GitHub

## Support & Contact

**Company:** Fallow Business Group Ltd trading as Fallow Building Services  
**Registration Number:** 16532814  
**Phone:** 07459 627464  
**Email:** rwarreninfo@gmail.com  
**WhatsApp:** https://wa.me/+447459627464

## Technical Stack
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Bark.com Widget Integration

## License
© 2024 Fallow Building Services. All rights reserved.

---

## Troubleshooting

### Website Not Loading
- Check if GitHub Pages is enabled in Settings
- Verify branch is set to `main` and directory to `/ (root)`
- Wait 5-10 minutes after enabling
- Clear browser cache

### Images Not Showing
- Verify image URLs are correct
- Check if images are uploaded to repository
- Ensure paths are relative (e.g., `assets/images/logo.png`)

### Navigation Not Working
- Check if `assets/js/main.js` is uploaded
- Open browser console (F12) and check for JavaScript errors
- Verify script tag in HTML points to correct path

### Custom Domain Not Working
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check DNS with tool like `https://dnschecker.org`
- Ensure HTTPS enforcement is enabled in GitHub Pages settings

## Updates and Maintenance

To update your website:
1. Edit files locally or directly on GitHub
2. Commit and push changes
3. GitHub Pages auto-deploys in 2-5 minutes

No build process required - it's pure HTML!
