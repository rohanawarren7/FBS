import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './LegalPages.css';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Fallow Building Services</title>
        <meta name="description" content="Terms and Conditions for Fallow Building Services. Read our terms for building services and property management." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="legal-page">
        <div className="legal-container">
          <h1 className="legal-title">TERMS & CONDITIONS</h1>
          <p className="legal-updated">Last Updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <section className="legal-section">
            <h2>1. Introduction and Definitions</h2>
            
            <h3>1.1 About Us</h3>
            <p>
              These Terms and Conditions govern the provision of building and construction services by Fallow Business Group Ltd, 
              trading as Fallow Building Services ("we", "us", "our", "the Company").
            </p>
            <ul>
              <li>Company Name: Fallow Business Group Ltd</li>
              <li>Trading As: Fallow Building Services</li>
              <li>Company Registration Number: 16532814</li>
              <li>Email: info@fallowbuildingservices.co.uk</li>
              <li>Phone: 0203 576 5962</li>
            </ul>

            <h3>1.2 Definitions</h3>
            <ul>
              <li><strong>"Client" or "You":</strong> The person or entity engaging our services</li>
              <li><strong>"Contract":</strong> The agreement between you and us for the provision of services</li>
              <li><strong>"Services":</strong> Building, construction, renovation, and property management services</li>
              <li><strong>"Works":</strong> The construction or building work to be carried out</li>
              <li><strong>"Quote":</strong> The written estimate provided for services</li>
              <li><strong>"Site":</strong> The location where the Works will be carried out</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Acceptance of Terms</h2>
            <p>
              By engaging our services, requesting a quote, or signing a contract with us, you agree to be bound by these Terms and Conditions. 
              Please read them carefully before proceeding.
            </p>
            <p>
              These terms apply to all services provided, including but not limited to: extensions, home renovations, porches, loft conversions, 
              kitchen and bathroom refurbishments, outbuildings, property management, and guaranteed rent services.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Quotations and Estimates</h2>
            
            <h3>3.1 Validity</h3>
            <p>
              All quotations are valid for 30 days from the date of issue unless otherwise stated. We reserve the right to revise quotes 
              if materials costs or other factors change significantly.
            </p>

            <h3>3.2 Site Surveys</h3>
            <p>
              Quotations are based on information provided and site surveys conducted. Any additional work discovered during the project 
              that was not included in the original quote will be subject to additional charges, which will be agreed upon before proceeding.
            </p>

            <h3>3.3 Variations</h3>
            <p>
              Any changes to the agreed scope of work must be confirmed in writing and may result in additional charges and time extensions.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Contract Formation and Payment Terms</h2>
            
            <h3>4.1 Contract Agreement</h3>
            <p>
              A contract is formed when you accept our quote in writing or sign our contract documentation. A deposit payment also 
              constitutes acceptance of these terms.
            </p>

            <h3>4.2 Payment Schedule</h3>
            <p>Unless otherwise agreed in writing, our standard payment terms are:</p>
            <ul>
              <li><strong>Deposit:</strong> 25-30% upon contract signing (to secure labor and order materials)</li>
              <li><strong>Stage Payments:</strong> As agreed for larger projects (e.g., at completion of key milestones)</li>
              <li><strong>Final Payment:</strong> Balance due upon practical completion of works</li>
            </ul>

            <h3>4.3 Payment Methods</h3>
            <p>We accept payment by bank transfer, cheque, or as otherwise agreed. Payment terms are typically 7 days from invoice date.</p>

            <h3>4.4 Late Payment</h3>
            <p>
              If payment is not received within the agreed timeframe, we reserve the right to:
            </p>
            <ul>
              <li>Suspend works until payment is received</li>
              <li>Charge interest at 8% above the Bank of England base rate (as per Late Payment of Commercial Debts Act 1998)</li>
              <li>Charge reasonable debt recovery costs</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Our Obligations</h2>
            
            <h3>5.1 Quality Standards</h3>
            <p>We will:</p>
            <ul>
              <li>Carry out all work with reasonable care and skill</li>
              <li>Use materials of satisfactory quality</li>
              <li>Complete work within agreed timeframes (subject to clause 7)</li>
              <li>Comply with all relevant building regulations and standards</li>
              <li>Obtain necessary permits and approvals (where agreed in contract)</li>
            </ul>

            <h3>5.2 Insurance</h3>
            <p>
              We maintain appropriate public liability insurance and employers' liability insurance. Details available upon request.
            </p>

            <h3>5.3 Health and Safety</h3>
            <p>
              We comply with all relevant health and safety legislation and maintain safe working practices on site.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Client Obligations</h2>
            
            <h3>6.1 Site Access</h3>
            <p>You agree to:</p>
            <ul>
              <li>Provide clear and safe access to the site during working hours</li>
              <li>Ensure the site is clear of personal belongings in work areas</li>
              <li>Provide access to electricity and water where required</li>
              <li>Inform us of any hazardous materials (e.g., asbestos) on site</li>
            </ul>

            <h3>6.2 Permissions and Approvals</h3>
            <p>
              Unless we have specifically agreed to obtain planning permission or building regulations approval on your behalf, 
              it is your responsibility to ensure all necessary permissions are in place before work commences.
            </p>

            <h3>6.3 Accurate Information</h3>
            <p>
              You must provide accurate information about the property, including any known structural issues, previous work, or restrictions.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Project Timeline and Delays</h2>
            
            <h3>7.1 Estimated Timeframes</h3>
            <p>
              Project timeframes provided are estimates based on normal working conditions. While we will make every effort to complete 
              work on time, delays may occur due to factors beyond our control.
            </p>

            <h3>7.2 Causes of Delay</h3>
            <p>We are not liable for delays caused by:</p>
            <ul>
              <li>Adverse weather conditions</li>
              <li>Discovery of unforeseen structural issues or hazardous materials</li>
              <li>Delays in obtaining materials or equipment</li>
              <li>Changes to the scope of work requested by the client</li>
              <li>Failure by the client to provide access or make timely decisions</li>
              <li>Delays in obtaining necessary approvals or permits</li>
              <li>Force majeure events (see clause 14)</li>
            </ul>

            <h3>7.3 Notification</h3>
            <p>
              We will notify you promptly of any anticipated delays and provide revised completion estimates where possible.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Changes and Variations</h2>
            <p>
              Any changes to the agreed works must be confirmed in writing. Variations may affect the price and completion date. 
              We will provide written notification of any additional costs before proceeding with variation works.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Warranties and Guarantees</h2>
            
            <h3>9.1 Workmanship Warranty</h3>
            <p>
              We provide a warranty on our workmanship for a period of 12 months from the date of practical completion, 
              subject to normal wear and tear.
            </p>

            <h3>9.2 Materials and Products</h3>
            <p>
              Materials and products supplied are covered by manufacturer warranties. We will pass on any manufacturer warranties to you.
            </p>

            <h3>9.3 Exclusions</h3>
            <p>Warranties do not cover:</p>
            <ul>
              <li>Normal wear and tear</li>
              <li>Damage caused by misuse, neglect, or improper maintenance</li>
              <li>Modifications made by others</li>
              <li>Damage caused by events beyond our control</li>
            </ul>

            <h3>9.4 Insurance-Backed Guarantees</h3>
            <p>
              For certain types of work, we can arrange insurance-backed guarantees at additional cost (subject to eligibility).
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Completion and Snagging</h2>
            
            <h3>10.1 Practical Completion</h3>
            <p>
              Works are deemed practically complete when all major work is finished and the project is fit for its intended purpose, 
              though minor defects ("snagging items") may remain.
            </p>

            <h3>10.2 Snagging Period</h3>
            <p>
              A snagging list will be agreed upon at practical completion. We will rectify snagging items within a reasonable timeframe, 
              typically 14-30 days depending on the nature of the work.
            </p>

            <h3>10.3 Retention</h3>
            <p>
              For larger projects, a retention amount (typically 5% of the contract value) may be held back until all snagging items 
              are completed to your satisfaction.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Cancellation and Termination</h2>
            
            <h3>11.1 Cooling-Off Period (Consumer Rights)</h3>
            <p>
              If you are a consumer and the contract was made at your home or following an unsolicited visit, you have a 14-day cooling-off period 
              from the date of contract to cancel without penalty, provided works have not commenced.
            </p>

            <h3>11.2 Cancellation by Client</h3>
            <p>
              If you cancel after work has commenced, you will be liable for:
            </p>
            <ul>
              <li>All work completed to date</li>
              <li>Materials ordered or purchased</li>
              <li>Reasonable costs incurred</li>
              <li>Loss of profit on work not completed (typically 10-15% of remaining contract value)</li>
            </ul>

            <h3>11.3 Termination by Us</h3>
            <p>We may terminate the contract if:</p>
            <ul>
              <li>You fail to make payments when due</li>
              <li>You breach these terms and conditions</li>
              <li>You fail to provide access to the site</li>
              <li>We discover information that was misrepresented</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Liability and Insurance</h2>
            
            <h3>12.1 Liability for Damage</h3>
            <p>
              We will take reasonable care to protect your property during works. However, some disruption and minor damage may be unavoidable 
              in construction projects. We will make good any damage caused by our negligence.
            </p>

            <h3>12.2 Limitations of Liability</h3>
            <p>Our liability is limited to:</p>
            <ul>
              <li>The total contract value for the specific project</li>
              <li>Direct losses only (not consequential losses such as loss of earnings or alternative accommodation costs)</li>
            </ul>

            <h3>12.3 Client's Insurance</h3>
            <p>
              You should notify your buildings insurance provider of any works being carried out. We are not liable for any increase 
              in your insurance premiums or for claims that your insurer may reject.
            </p>

            <h3>12.4 Insurance for High-Value Items</h3>
            <p>
              You are responsible for securing or insuring high-value items and personal belongings during the works.
            </p>
          </section>

          <section className="legal-section">
            <h2>13. Subcontractors and Third Parties</h2>
            <p>
              We may engage qualified subcontractors and specialists to carry out certain aspects of the work. We remain responsible 
              for the work of our subcontractors as if we had carried it out ourselves.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Force Majeure</h2>
            <p>
              We are not liable for failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to:
            </p>
            <ul>
              <li>Acts of God (floods, storms, earthquakes)</li>
              <li>Pandemic or epidemic</li>
              <li>War, terrorism, or civil unrest</li>
              <li>Government restrictions or regulations</li>
              <li>Strikes or industrial action</li>
              <li>Failure of suppliers or utilities</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>15. Property Management Services</h2>
            
            <h3>15.1 Scope of Services</h3>
            <p>
              Our property management services include tenant finding, rent collection, property maintenance coordination, and compliance management 
              as detailed in individual service agreements.
            </p>

            <h3>15.2 Landlord Obligations</h3>
            <p>
              Landlords must ensure properties meet all legal requirements including gas safety, electrical safety, energy performance, 
              and licensing requirements.
            </p>

            <h3>15.3 Guaranteed Rent Schemes</h3>
            <p>
              Terms for guaranteed rent schemes are provided in separate agreements and are subject to property assessment and approval.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Complaints and Disputes</h2>
            
            <h3>16.1 Complaints Procedure</h3>
            <p>
              If you have a complaint, please contact us immediately at info@fallowbuildingservices.co.uk or 0203 576 5962. 
              We will acknowledge your complaint within 5 working days and aim to resolve it within 28 days.
            </p>

            <h3>16.2 Alternative Dispute Resolution</h3>
            <p>
              If we cannot resolve a dispute through discussion, we agree to consider alternative dispute resolution methods such as mediation 
              before pursuing legal action.
            </p>

            <h3>16.3 Governing Law</h3>
            <p>
              These Terms and Conditions are governed by the laws of England and Wales. Both parties submit to the exclusive jurisdiction 
              of the English and Welsh courts.
            </p>
          </section>

          <section className="legal-section">
            <h2>17. Data Protection</h2>
            <p>
              We process your personal data in accordance with UK GDPR and our Privacy Policy. By engaging our services, you consent 
              to the processing of your data as described in our Privacy Policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>18. Consumer Rights</h2>
            <p>
              Nothing in these Terms and Conditions affects your statutory rights as a consumer under UK law, including the Consumer Rights Act 2015.
            </p>
            <p>Key consumer rights include:</p>
            <ul>
              <li>Services must be provided with reasonable care and skill</li>
              <li>Information provided about services must not be misleading</li>
              <li>Prices must be transparent</li>
              <li>You have the right to repeat performance or price reduction if services are not provided as agreed</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>19. Intellectual Property</h2>
            <p>
              Any designs, plans, or specifications created by us remain our intellectual property unless otherwise agreed in writing. 
              You have a license to use them for the specific project only.
            </p>
          </section>

          <section className="legal-section">
            <h2>20. Severability</h2>
            <p>
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section className="legal-section">
            <h2>21. Entire Agreement</h2>
            <p>
              These Terms and Conditions, together with any written quotation and contract, constitute the entire agreement between you and us. 
              No oral statements or representations have any legal effect unless confirmed in writing.
            </p>
          </section>

          <section className="legal-section">
            <h2>22. Amendments</h2>
            <p>
              We may update these Terms and Conditions from time to time. Any changes will apply to contracts entered into after the update date. 
              Existing contracts will be governed by the terms in effect at the time of contract formation.
            </p>
          </section>

          <section className="legal-section">
            <h2>23. Contact Information</h2>
            <p>For questions about these Terms and Conditions, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> info@fallowbuildingservices.co.uk</li>
              <li><strong>Phone:</strong> 0203 576 5962</li>
              <li><strong>Company:</strong> Fallow Business Group Ltd trading as Fallow Building Services</li>
              <li><strong>Company Registration Number:</strong> 16532814</li>
            </ul>
          </section>

          <section className="legal-section">
            <p className="legal-notice">
              <strong>Important Notice:</strong> These terms are provided for general guidance. For specific projects, additional terms may apply 
              as detailed in individual contracts and quotations. We recommend that you retain copies of all documentation related to your project.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;