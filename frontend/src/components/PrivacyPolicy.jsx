import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './LegalPages.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Fallow Building Services</title>
        <meta name="description" content="Privacy Policy for Fallow Building Services. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-title">PRIVACY POLICY</h1>
          <p className="legal-updated">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <section className="legal-section">
            <h2>1. Introduction</h2>
            <p>
              Fallow Business Group Ltd, trading as Fallow Building Services ("we", "us", or "our"), is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p><strong>Company Details:</strong></p>
            <ul>
              <li>Company Name: Fallow Business Group Ltd</li>
              <li>Trading As: Fallow Building Services</li>
              <li>Company Registration Number: 16532814</li>
              <li>Email: info@fallowbuildingservices.co.uk</li>
              <li>Phone: 0203 576 5962</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Request a quote or consultation</li>
              <li>Contact us via phone, email, or contact forms</li>
              <li>Engage our services</li>
              <li>Sign up for our newsletter or updates</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name and contact details (email, phone number, address)</li>
              <li>Property details and project requirements</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Date and time of visits</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li><strong>Service Delivery:</strong> To provide quotes, consultations, and building services</li>
              <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
              <li><strong>Project Management:</strong> To manage and complete your building projects</li>
              <li><strong>Marketing:</strong> To send you information about our services (with your consent)</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and regulations</li>
              <li><strong>Business Operations:</strong> To improve our services and website functionality</li>
              <li><strong>Safety and Security:</strong> To protect against fraud and maintain security</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Legal Basis for Processing (UK GDPR)</h2>
            <p>Under UK GDPR, we process your personal data based on the following lawful bases:</p>
            <ul>
              <li><strong>Contract:</strong> Processing necessary to perform our contract with you</li>
              <li><strong>Consent:</strong> You have given clear consent for specific purposes</li>
              <li><strong>Legal Obligation:</strong> Processing necessary to comply with the law</li>
              <li><strong>Legitimate Interests:</strong> Processing necessary for our legitimate business interests</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Sharing and Disclosure</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third-party contractors, suppliers, and subcontractors necessary to complete your project</li>
              <li><strong>Professional Advisors:</strong> Architects, engineers, and building control officers as required</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Partners:</strong> With your consent, for property management services</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </section>

          <section className="legal-section">
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Secure servers and encrypted communications</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required by law. Specific retention periods include:
            </p>
            <ul>
              <li><strong>Project Records:</strong> 6-12 years (in line with building regulations and warranty requirements)</li>
              <li><strong>Financial Records:</strong> 6 years (as required by HMRC)</li>
              <li><strong>Marketing Communications:</strong> Until you withdraw consent or unsubscribe</li>
              <li><strong>Website Analytics:</strong> Up to 26 months</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>8. Your Rights Under UK GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at info@fallowbuildingservices.co.uk or 0203 576 5962.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Cookies and Tracking Technologies</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance user experience. Cookies are small files stored on your device. 
              You can control cookie settings through your browser preferences.
            </p>
            <p>We may use:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements (with consent)</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as Bark.com for reviews). We are not responsible for the privacy practices 
              of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. 
              If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className="legal-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> info@fallowbuildingservices.co.uk</li>
              <li><strong>Phone:</strong> 0203 576 5962</li>
              <li><strong>Company:</strong> Fallow Business Group Ltd trading as Fallow Building Services</li>
              <li><strong>Company Registration Number:</strong> 16532814</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>14. Complaints</h2>
            <p>
              If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with the 
              Information Commissioner's Office (ICO), the UK's data protection supervisory authority:
            </p>
            <ul>
              <li><strong>ICO Website:</strong> www.ico.org.uk</li>
              <li><strong>ICO Helpline:</strong> 0303 123 1113</li>
              <li><strong>Address:</strong> Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;