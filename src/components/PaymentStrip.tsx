export function PaymentStrip() {
  return (
    <section className="mt-8 border border-dashed border-muted-foreground/60 px-4 py-5" aria-label="Guaranteed safe checkout">
      <div className="flex items-center gap-3 text-xs font-semibold text-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
        Guaranteed Safe Checkout
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <span className="grid h-9 min-w-14 place-items-center rounded-sm bg-foreground px-2 text-xs font-bold text-background"><span><b className="text-destructive">●</b><b className="text-primary">●</b></span></span>
        <span className="grid h-9 min-w-14 place-items-center rounded-sm bg-payment-visa px-2 text-sm font-black italic text-foreground">VISA</span>
        <span className="grid h-9 min-w-14 place-items-center rounded-sm bg-payment-amex px-2 text-xs font-black text-foreground">AMEX</span>
        <span className="grid h-9 min-w-14 place-items-center rounded-sm bg-payment-discover px-2 text-[10px] font-black text-foreground">DISCOVER</span>
      </div>
    </section>
  );
}