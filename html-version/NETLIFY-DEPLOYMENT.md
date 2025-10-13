# Deploying Fallow Building Services to Netlify

## 🚀 Quick Start - Drag & Drop Method (Recommended)

### Step 1: Get Your Files
Download the `fallow-building-services-html.zip` file from `/app/fallow-building-services-html.zip` or manually copy all files from the `/app/html-version/` folder to your computer.

### Step 2: Create Netlify Account
1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click **Sign Up** (free account)
3. Sign up with Email, GitHub, GitLab, or Bitbucket

### Step 3: Deploy via Drag & Drop
1. After logging in, you'll see the Netlify dashboard
2. Look for the box that says **"Want to deploy a new site without connecting to Git? Drag and drop your site output folder here"**
3. **Either:**
   - Drag the unzipped `html-version` folder directly onto this box
   - **OR** Click "browse to upload" and select the folder

**Important:** Upload the contents of the `html-version` folder, NOT the zip file itself. The folder should contain:
```
index.html
extensions.html
home-renovations.html
... (other HTML files)
assets/
  css/
    style.css
  js/
    main.js
```

### Step 4: Wait for Deployment
- Netlify will automatically deploy your site
- Takes about 30 seconds
- You'll get a random URL like: `https://random-name-123456.netlify.app`

### Step 5: Customize Your Site Name (Optional)
1. Click **Site settings**
2. Click **Change site name**
3. Enter a custom name like: `fallow-building-services`
4. Your new URL: `https://fallow-building-services.netlify.app`

**🎉 Done! Your website is now live!**

---

## 🔄 Method 2: Deploy from GitHub (Continuous Deployment)

This method automatically redeploys your site whenever you push changes to GitHub.

### Step 1: Push to GitHub
```bash
cd /path/to/html-version

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR-USERNAME/fallow-building-services.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify
1. Log into Netlify
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub**
4. Authorize Netlify to access your repositories
5. Select your `fallow-building-services` repository

### Step 3: Configure Build Settings
Since this is a static HTML site, leave everything blank:
- **Branch to deploy:** `main`
- **Build command:** (leave empty)
- **Publish directory:** `.` or leave empty
- Click **Deploy site**

### Step 4: Automatic Deployments
- Every time you push to GitHub, Netlify auto-deploys
- Changes go live in ~30 seconds

---

## 🌐 Custom Domain Setup

### Add Your Custom Domain

1. Go to your site in Netlify
2. Click **Domain settings**
3. Click **Add custom domain**
4. Enter your domain (e.g., `www.fallowbuildingservices.co.uk`)
5. Click **Verify**

### Configure DNS

**Option A: Use Netlify DNS (Easiest)**
1. Netlify will provide nameservers like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
2. Go to your domain registrar (GoDaddy, Namecheap, etc.)
3. Update nameservers to the ones provided by Netlify
4. Wait 24-48 hours for DNS propagation

**Option B: Keep Your Current DNS**
Add these DNS records at your domain registrar:

For `www.fallowbuildingservices.co.uk`:
```
Type: CNAME
Host: www
Value: YOUR-SITE-NAME.netlify.app
TTL: 3600
```

For root domain `fallowbuildingservices.co.uk`:
```
Type: A
Host: @
Value: 75.2.60.5
TTL: 3600
```

### Enable HTTPS
1. Netlify automatically provides free SSL certificate
2. Go to **Domain settings** → **HTTPS**
3. Click **Verify DNS configuration**
4. Click **Provision certificate**
5. SSL active in 1-2 minutes

---

## 📝 Updating Your Website

### If Using Drag & Drop:
1. Make changes to your local HTML files
2. Go to Netlify → **Deploys** tab
3. Drag and drop the updated folder
4. New version goes live in ~30 seconds

### If Using GitHub:
1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Updated content"
   git push
   ```
3. Netlify auto-deploys in ~30 seconds

---

## ⚙️ Advanced Configuration (Optional)

### Create netlify.toml File
Add this file to your root directory for better control:

```toml
# netlify.toml

[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Enable Forms (If You Add Contact Forms)
Add this to your HTML forms:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact">
  <!-- Your form fields -->
</form>
```

Netlify will automatically handle form submissions!

---

## 🔧 Troubleshooting

### Site Not Loading
- Check if deployment succeeded (green checkmark in Deploys tab)
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Try incognito/private browsing mode

### Images Not Showing
- Verify all image URLs are correct
- Check browser console (F12) for errors
- Ensure `assets` folder structure is intact

### Navigation Broken
- Ensure `assets/js/main.js` is uploaded
- Check file paths are relative (not absolute)
- Verify JavaScript is loading (check Network tab in browser)

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS settings with [https://dnschecker.org](https://dnschecker.org)
- Verify nameservers are correct
- Contact Netlify support if issues persist

### SSL Certificate Issues
- Wait 1-2 minutes for provisioning
- Verify DNS is correctly configured
- Try "Force HTTPS" in Domain settings

---

## 💰 Pricing

**Free Tier Includes:**
- ✅ 100GB bandwidth/month
- ✅ Unlimited sites
- ✅ Free SSL certificates
- ✅ Continuous deployment
- ✅ Instant rollbacks
- ✅ Form handling (100 submissions/month)

**Perfect for your business website!**

---

## 🎯 Netlify vs GitHub Pages

| Feature | Netlify | GitHub Pages |
|---------|---------|--------------|
| **Deployment** | Drag & drop or Git | Git only |
| **Speed** | ~30 seconds | 2-5 minutes |
| **Custom Domain** | Easy setup | Requires DNS config |
| **SSL** | Automatic | Automatic |
| **Forms** | Built-in handling | Not available |
| **Redirects** | Easy config | Limited |
| **Preview Deploys** | Yes | No |
| **Analytics** | Available | Limited |

**Recommendation:** Netlify is easier and more feature-rich!

---

## 📊 Post-Deployment Checklist

After deployment, verify:
- [ ] Homepage loads correctly
- [ ] All navigation menus work
- [ ] All 9 service pages load
- [ ] Mobile menu works
- [ ] WhatsApp links work
- [ ] Phone links work
- [ ] Email links work
- [ ] Bark.com widget loads
- [ ] Footer displays correctly
- [ ] Images load properly
- [ ] Test on mobile device
- [ ] Test on different browsers

---

## 🆘 Getting Help

**Netlify Support:**
- Documentation: [https://docs.netlify.com](https://docs.netlify.com)
- Community Forum: [https://answers.netlify.com](https://answers.netlify.com)
- Support: Available through dashboard

**Your Website Details:**
- Company: Fallow Business Group Ltd
- Registration: 16532814
- Phone: 07459 627464
- Email: rwarreninfo@gmail.com

---

## 🚀 Quick Command Reference

```bash
# Update your site (if using Git)
git add .
git commit -m "Update content"
git push

# That's it! Netlify handles the rest.
```

---

**Need to make changes?** Just update your HTML files and redeploy. It's that simple!
