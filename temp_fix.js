// Update testimonials section to show Google and Bark reviews separately
const fs = require('fs');

const filePath = 'frontend/src/components/TestimonialsSection.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the rating text
content = content.replace(
  '          <p className="rating-text">Perfect rating from 50+ reviews</p>',
  '          <p className="rating-text">5.0 ★★★★★ on Google · 50+ reviews on Bark</p>'
);

// Add Google Reviews link after Bark link
content = content.replace(
  '          <a \n            href="https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/" \n            target="_blank" \n            rel="noopener noreferrer"\n            className="rating-link"\n          >\n            View all reviews on Bark\n          </a>',
  '          <div className="rating-links">\n            <a \n              href="https://g.page/r/CbrPxLbz5OBpEBM/" \n              target="_blank" \n              rel="noopener noreferrer"\n              className="rating-link google-reviews"\n            >\n              View Google Reviews\n            </a>\n            <a \n              href="https://www.bark.com/en/gb/company/fallow-building-services/Gw6Nv/" \n              target="_blank" \n              rel="noopener noreferrer"\n              className="rating-link bark-reviews"\n            >\n              View Bark Reviews\n            </a>\n          </div>'
);

fs.writeFileSync(filePath, content);
console.log('Updated TestimonialsSection.jsx');
