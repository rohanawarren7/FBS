// Google Analytics tracking utility
export const trackPhoneClick = () => {
  if (window.gtag) window.gtag('event', 'phone_click', { event_category: 'contact', event_label: '0203 576 5962' });
};
export const trackWhatsAppClick = () => {
  if (window.gtag) window.gtag('event', 'whatsapp_click', { event_category: 'contact', event_label: 'whatsapp' });
};
