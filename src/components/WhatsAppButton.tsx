import whatsapp from "../assets/whatsapp.jpg";

const WHATSAPP_NUMBER = "919389678954";

export function WhatsAppButton({ productName }: { productName?: string }) {
  const message = productName
    ? `Hi, I would like more information about:\n${productName}\n${
        typeof window === "undefined" ? "" : window.location.href
      }`
    : "Hi, I would like to know more about Kota Vape Shop.";

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Kota Vape Shop on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-[80px] w-[80px] place-items-center rounded-full shadow-luxe transition hover:-translate-y-1 sm:bottom-7 sm:right-7 sm:h-[80px] sm:w-[80px]"
    >
      <img src={whatsapp} alt="WhatsApp" className="h-full w-full rounded-full object-contain" />
    </a>
  );
}
