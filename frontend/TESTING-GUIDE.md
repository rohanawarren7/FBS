# Testing & Quality Assurance Checklist

## Pre-Launch Testing Guide for Fallow Building Services Website

---

## 1. Mobile Testing Checklist

### Device Testing
Test on real devices or browser dev tools:
- [ ] iPhone SE (375px width)
- [ ] iPhone 12/13/14 (390px width)
- [ ] iPhone 14 Pro Max (430px width)
- [ ] Samsung Galaxy S21 (360px width)
- [ ] iPad Mini (768px width)
- [ ] iPad Pro (1024px width)

### Animation Performance
- [ ] Hero section logo reveal animation smooth (no jank)
- [ ] Trust signal counters animate without lag
- [ ] Service cards hover effects work on touch
- [ ] Navigation dropdowns open/close smoothly
- [ ] Scroll-triggered animations trigger correctly
- [ ] No layout shift during animations

### Touch Interactions
- [ ] Service cards are tappable (not just hover)
- [ ] Navigation menu opens/closes properly
- [ ] Lightbox in gallery opens with tap
- [ ] CTA buttons have appropriate touch targets (min 44px)
- [ ] Form inputs are easily tappable

### Layout Issues
- [ ] No horizontal scrolling on any page
- [ ] Text remains readable (min 16px on mobile)
- [ ] Images scale properly without distortion
- [ ] Footer layout stacks correctly
- [ ] Service cards grid adapts properly

### Performance Checks
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] No images larger than 200KB on mobile
- [ ] Animations use GPU acceleration (transform, opacity)

---

## 2. Cross-Browser Testing

### Chrome (Latest)
- [ ] All animations work smoothly
- [ ] Dark mode toggle functions
- [ ] Scroll progress bar visible
- [ ] Navigation glassmorphism effect renders
- [ ] All interactive elements work

### Firefox (Latest)
- [ ] CSS Grid layouts render correctly
- [ ] Backdrop-filter (glassmorphism) works
- [ ] Custom scrollbar styles apply
- [ ] Form inputs styled consistently
- [ ] No console errors

### Safari (macOS & iOS)
- [ ] WebP images load (with fallback)
- [ ] Touch events work on iOS
- [ ] Backdrop-filter works
- [ ] Scroll behavior smooth
- [ ] Font rendering consistent

### Microsoft Edge (Latest)
- [ ] All animations performant
- [ ] CSS variables work correctly
- [ ] Navigation dropdowns functional
- [ ] No layout issues

### Legacy Browser Fallbacks (IE11 not supported)
- [ ] Site degrades gracefully on older browsers
- [ ] Core functionality works without animations
- [ ] Content remains accessible

---

## 3. Animation Quality Checklist

### Hero Section
- [ ] Logo fade-in + scale smooth
- [ ] Word-by-word headline stagger natural
- [ ] Description fade-in at correct timing
- [ ] CTA buttons have magnetic hover effect
- [ ] Trust signal counters animate smoothly
- [ ] Scroll indicator visible but subtle

### Navigation
- [ ] Glassmorphism effect on scroll
- [ ] Scroll progress bar animates correctly
- [ ] Dropdown menus slide in smoothly
- [ ] Theme toggle icon rotates on switch
- [ ] Mobile menu opens/closes smoothly

### Services Section
- [ ] 3D tilt effect responds to mouse position
- [ ] Icon circle draws in on hover
- [ ] Cards lift on hover
- [ ] Gradient border visible on featured cards
- [ ] Service cards stagger in on scroll

### Process Timeline
- [ ] Timeline progress bar fills correctly
- [ ] Active step highlighting works
- [ ] Click to activate step functions
- [ ] Smooth transitions between steps

### Gallery
- [ ] Filter animations smooth
- [ ] Lightbox opens/closes smoothly
- [ ] Image navigation works
- [ ] No layout shift when filtering

### Footer
- [ ] Trust badges fade in on scroll
- [ ] Social links hover animation smooth
- [ ] Newsletter form responds correctly

### Reduced Motion
- [ ] All animations disable when prefers-reduced-motion is set
- [ ] Content remains fully accessible
- [ ] No essential functionality lost

---

## 4. Accessibility Testing

### Keyboard Navigation
- [ ] All interactive elements focusable
- [ ] Tab order logical
- [ ] Skip navigation link works
- [ ] Dropdown menus keyboard accessible
- [ ] Lightbox closable with Escape key

### Screen Readers
- [ ] All images have descriptive alt text
- [ ] Headings in logical order (h1 → h2 → h3)
- [ ] ARIA labels on icon-only buttons
- [ ] Form labels associated correctly
- [ ] Navigation landmarks identified

### Visual Accessibility
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for text)
- [ ] Interactive elements have visible focus states
- [ ] Text resizable without breaking layout
- [ ] Content readable at 200% zoom

---

## 5. SEO & Performance Testing

### SEO Checks
- [ ] All pages have unique, descriptive titles
- [ ] Meta descriptions present and optimized
- [ ] Canonical URLs set correctly
- [ ] Heading hierarchy logical
- [ ] Images have alt text
- [ ] Internal links work
- [ ] Schema.org markup validates

### Core Web Vitals
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Time to First Byte (TTFB) < 600ms

### Performance Tools
Run these tests:
- [ ] Google PageSpeed Insights (score 90+)
- [ ] GTmetrix (grade A)
- [ ] WebPageTest (performance grade A)
- [ ] Lighthouse audit (all categories 90+)

---

## 6. Content Review

### Tone & Voice
- [ ] Professional yet approachable throughout
- [ ] No aggressive sales language
- [ ] Clear benefits statements
- [ ] Local references (Havering, Essex) included
- [ ] Trust signals prominent

### Spelling & Grammar
- [ ] No spelling errors
- [ ] Consistent UK English spelling
- [ ] Grammar correct throughout
- [ ] Punctuation consistent

### Contact Information
- [ ] Phone number correct: 0203 576 5962
- [ ] Email correct: info@fallowbuildingservices.co.uk
- [ ] Company number correct: 16532814
- [ ] All links functional

---

## 7. Final Visual Polish

### Shadows & Depth
- [ ] Cards have subtle, consistent shadows
- [ ] Hover states enhance depth appropriately
- [ ] No harsh shadows
- [ ] Dark mode shadows adjusted

### Spacing
- [ ] Consistent vertical rhythm (8px grid)
- [ ] Section padding consistent
- [ ] Component spacing uniform
- [ ] Mobile spacing appropriate

### Typography
- [ ] Font sizes follow fluid scale
- [ ] Line heights readable
- [ ] No orphans/widows in headings
- [ ] Text contrast sufficient

### Micro-interactions
- [ ] All buttons have hover states
- [ ] Links have clear hover indicators
- [ ] Form inputs have focus states
- [ ] Loading states where needed

---

## Testing Tools

### Browser DevTools
- Chrome DevTools (Performance, Lighthouse)
- Firefox Developer Tools
- Safari Web Inspector

### Online Tools
- Google PageSpeed Insights
- GTmetrix
- WebPageTest.org
- BrowserStack (for cross-browser testing)

### Accessibility
- axe DevTools
- WAVE Web Accessibility Evaluator
- Screen reader testing (NVDA, VoiceOver)

---

## Sign-off Checklist

Before launch, ensure:
- [ ] All critical tests passed
- [ ] All high priority items complete
- [ ] Client approval on design
- [ ] Content approved and accurate
- [ ] Analytics tracking set up
- [ ] Backup created
- [ ] 404 page designed
- [ ] Favicon uploaded
- [ ] Sitemap generated
- [ ] robots.txt configured

---

## Notes

**Known Limitations:**
- IE11 not supported (requires polyfills)
- Very old Safari versions may lack backdrop-filter
- Reduced motion users get simplified animations

**Future Enhancements:**
- Implement service worker for offline capability
- Add image optimization build pipeline
- Implement advanced caching strategies
- Add real-time chat widget
