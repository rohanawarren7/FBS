import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '+447459627464';
  const message = encodeURIComponent('Hi Fallow Building Services, I\'d like to discuss a project');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float whatsapp-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle color="#ffffff" size={28} />
    </a>
  );
};

export default WhatsAppButton;
