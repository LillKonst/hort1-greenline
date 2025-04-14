import ContactForm from "../contactForm/ContactForm";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ContactModal ({ isOpen, onClose, onSuccess }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-500 hover:text-black text-3xl font-bold"
        >
          &times;
        </button>

        <ContactForm onSuccess={onSuccess} />
      </div>
    </div>
  );
}
