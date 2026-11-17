
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phone = '918296320731';
  const message = encodeURIComponent(
    'Hello Tachy Tours & Travels! I would like to enquire about your travel services.'
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={27} />
    </a>
  );
}
