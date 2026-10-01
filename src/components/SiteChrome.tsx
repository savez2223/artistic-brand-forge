import { useState } from "react";
import { ChevronDown, Menu, Search, ShieldCheck, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/show-gredi-logo-concept-a.png";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

const nav = [{ label: "Home", to: "/" }, { label: "About us", to: "/about" }, { label: "Shop", to: "/shop" }, { label: "Contact", to: "/contact" }];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return <>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="border-b border-border bg-secondary px-4 py-2 text-center text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]"><ShieldCheck className="mr-2 inline h-3 w-3 text-primary" /> Curated luxury · Secure enquiries · Personal service</div>
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:h-24">
        <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" className="grid h-11 w-11 place-items-center text-foreground lg:hidden"><Menu className="h-5 w-5" /></button>
        <Link to="/" className="justify-self-center lg:justify-self-start"><img src={logo} alt="SHOW GREDI" width={1200} height={608} className="h-12 w-44 object-contain sm:h-14 sm:w-52" /></Link>
        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {nav.slice(0,3).map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "text-primary" }} className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition hover:text-primary">{item.label}</Link>)}
          <Link to="/categories" className="flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-primary">Categories <ChevronDown className="h-3 w-3" /></Link>
          <Link to="/brands" className="flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-primary">Brands <ChevronDown className="h-3 w-3" /></Link>
          <Link to="/contact" className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-primary">Contact</Link>
        </nav>
        <button type="button" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search catalog" className="grid h-11 w-11 place-items-center justify-self-end text-foreground transition hover:text-primary"><Search className="h-5 w-5" /></button>
      </div>
      {searchOpen && <div className="border-t border-border px-4 py-4"><form action="/shop" className="mx-auto flex max-w-2xl items-center border-b border-border-bright"><Search className="h-4 w-4 shrink-0 text-primary" /><input name="q" autoFocus placeholder="Search products, brands or categories" className="h-12 w-full bg-transparent px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground" /></form></div>}
    </header>
    {menuOpen && <div className="fixed inset-0 z-[60] bg-background p-6 lg:hidden"><div className="flex items-center justify-between"><img src={logo} alt="SHOW GREDI" width={1200} height={608} className="h-14 w-44 object-contain" /><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center"><X /></button></div><nav className="mt-14 grid gap-1">{nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="border-b border-border py-5 font-display text-3xl">{item.label}</Link>)}<Link to="/categories" onClick={() => setMenuOpen(false)} className="border-b border-border py-5 font-display text-3xl">Categories</Link><Link to="/brands" onClick={() => setMenuOpen(false)} className="border-b border-border py-5 font-display text-3xl">Brands</Link></nav></div>}
  </>;
}

export function SiteFooter() {
  return <footer className="border-t border-border bg-secondary"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-20"><div><img src={logo} alt="SHOW GREDI" loading="lazy" width={1200} height={608} className="h-14 w-52 object-contain" /><p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">A considered world of modern luxury, selected for those who value quiet distinction.</p></div><FooterColumn title="Quick links" items={["Home", "Shop", "About us", "Contact"]} /><FooterColumn title="Information" items={["Privacy Policy", "Terms", "FAQ", "Contact"]} /><div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Private concierge</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">Personal recommendations and product enquiries, handled with care.</p><Link to="/contact" className="mt-5 inline-block border-b border-primary pb-1 text-xs uppercase tracking-[0.14em] text-foreground">Speak with us</Link></div></div><div className="border-t border-border px-4 py-5 text-center text-[10px] uppercase tracking-[0.16em] text-muted-foreground">© 2026 SHOW GREDI. All rights reserved.</div></footer>;
}

function FooterColumn({ title, items }: { title: string; items: string[] }) { return <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{title}</h3><ul className="mt-5 space-y-3">{items.map((item) => <li key={item}><span className="text-sm text-muted-foreground transition hover:text-foreground">{item}</span></li>)}</ul></div>; }