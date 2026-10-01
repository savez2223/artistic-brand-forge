import { useState } from "react";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "../assets/Logo1.png";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

const nav = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Shop", to: "/shop" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto grid h-24 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:h-28">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center text-white transition-colors hover:text-red-500 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="justify-self-center lg:justify-self-start">
            <img
              src={logo}
              alt="SHOW GREDI"
              width={1200}
              height={608}
              className="h-16 w-64 object-contain sm:h-20 sm:w-72 lg:h-20 lg:w-80"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {nav.slice(0, 3).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{
                  className: "text-red-500",
                }}
                className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:text-red-500"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/categories"
              className="flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:text-red-500"
            >
              Categories
              <ChevronDown className="h-4 w-4" />
            </Link>

            <Link
              to="/brands"
              className="flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:text-red-500"
            >
              Brands
              <ChevronDown className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:text-red-500"
            >
              Contact
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search catalog"
            className="grid h-11 w-11 place-items-center justify-self-end text-white transition-colors duration-200 hover:text-red-500"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>

        {searchOpen && (
          <div className="border-t border-white/10 px-4 py-4">
            <form
              action="/shop"
              className="mx-auto flex max-w-2xl items-center border-b border-white/20"
            >
              <Search className="h-4 w-4 shrink-0 text-red-500" />

              <input
                name="q"
                autoFocus
                placeholder="Search products, brands or categories"
                className="h-12 w-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/50"
              />
            </form>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-background p-6 lg:hidden">
          <div className="flex items-center justify-between">
            <img
              src={logo}
              alt="SHOW GREDI"
              width={1200}
              height={608}
              className="h-16 w-60 object-contain"
            />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center text-white transition-colors hover:text-red-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-14 grid gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                activeProps={{
                  className: "border-red-500 text-red-500",
                }}
                className="border-b border-white/10 py-5 font-display text-3xl text-white transition-colors duration-200 hover:border-red-500 hover:text-red-500"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/categories"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-5 font-display text-3xl text-white transition-colors duration-200 hover:border-red-500 hover:text-red-500"
            >
              Categories
            </Link>

            <Link
              to="/brands"
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-5 font-display text-3xl text-white transition-colors duration-200 hover:border-red-500 hover:text-red-500"
            >
              Brands
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-secondary">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:py-20">
        <div>
          <img
            src={logo}
            alt="SHOW GREDI"
            loading="lazy"
            width={1200}
            height={608}
            className="h-20 w-72 object-contain"
          />

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
            A considered world of modern luxury, selected for those who value quiet distinction.
          </p>
        </div>

        <FooterColumn title="Quick links" items={["Home", "Shop", "About us", "Contact"]} />

        <FooterColumn title="Information" items={["Privacy Policy", "Terms", "FAQ", "Contact"]} />

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">
            Private concierge
          </h3>

          <p className="mt-5 text-sm leading-7 text-white/65">
            Personal recommendations and product enquiries, handled with care.
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-block border-b border-red-500 pb-1 text-xs uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:text-red-500"
          >
            Speak with us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-[10px] uppercase tracking-[0.16em] text-white/50">
        © 2026 SHOW GREDI. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-red-500">{title}</h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <span className="cursor-pointer text-sm text-white/70 transition-colors duration-200 hover:text-red-500">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
