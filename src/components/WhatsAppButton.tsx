import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/config/contact";

export function WhatsAppButton({ productName }: { productName?: string }) {
  const message = productName ? `Hi, I would like more information about:\n${productName}\n${typeof window === "undefined" ? "" : window.location.href}` : "Hi, I would like to know more about SHOW GREDI.";
  return <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" aria-label="Contact SHOW GREDI on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-success text-success-foreground shadow-luxe transition hover:-translate-y-1 sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"><MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" /></a>;
}