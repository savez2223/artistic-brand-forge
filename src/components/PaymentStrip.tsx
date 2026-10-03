import paymentstripImage from "../assets/paymentstrip.png";

export function PaymentStrip() {
  return (
    <section
      className="mt-8 border border-dashed border-muted-foreground/60 px-4 py-5"
      aria-label="Guaranteed safe checkout"
    >
      <div className="flex items-center gap-3 text-xs font-semibold text-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
        Guaranteed Safe Checkout
      </div>

      <div className="mt-5 flex items-center justify-center">
        <img
          src={paymentstripImage}
          alt="Secure payment methods"
          className="h-auto max-w-full object-contain"
        />
      </div>
    </section>
  );
}
