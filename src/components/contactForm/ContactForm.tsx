import { FormEvent } from "react";

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm ({ onSuccess }: ContactFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const formBody = new URLSearchParams(
      Array.from(formData.entries()) as [string, string][]
    ).toString();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    })
    .then(() => {
      onSuccess();
      form.reset();
    })
    .catch((error) => alert("Det oppsto en feil: " + error));
  };


  return (
    <form
      name="kontakt"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto flex flex-col gap-4 p-2 md:p-4"
    >
      {/* Required hidden input for Netlify */}
      <input type="hidden" name="form-name" value="kontakt" />
      <input type="hidden" name="bot-field" />

      <h2 className="text-2xl font-bold">Kontakt oss</h2>

      <input
        type="text"
        name="navn"
        placeholder="Navn"
        required
        className="border border-gray-300 rounded p-2"
      />

      <input
        type="tel"
        name="telefon"
        placeholder="Telefonnummer"
        required
        pattern="^[0-9+\s()-]{8,15}$"
        className="border border-gray-300 rounded p-2"
      />

      <input
        type="email"
        name="epost"
        placeholder="E-postadresse"
        className="border border-gray-300 rounded p-2"
      />

      <input 
        type="hidden" 
        name="subject" 
        value="Henvendelse fra Hort1.no" 
      />


      <textarea
        name="melding"
        placeholder="Skriv meldingen din her..."
        required
        rows={6}
        className="border border-gray-300 rounded p-2 resize-none"
      />

      <button
        type="submit"
        className="bg-customGreen hover:bg-customGreen text-white font-semibold py-2 px-4 rounded"
      >
        Send melding
      </button>
    </form>
  );
}
