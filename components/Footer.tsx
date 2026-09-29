import Link from "next/link";
import Logo from "./Logo";

const COLS = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Logo dark />
            <p className="mt-3 text-sm text-ink">Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <div className="mt-6 flex max-w-md gap-3">
              <input type="email" placeholder="Enter your email" aria-label="Email" className="h-12 flex-1 rounded-full border border-black/15 px-5 text-sm outline-none focus:border-brand" />
              <button className="h-12 rounded-full bg-lime px-7 text-sm font-medium text-ink hover:brightness-95">Search</button>
            </div>
            <p className="mt-4 max-w-sm text-xs text-ink/80">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <div className="grid grid-cols-3 gap-6 text-sm text-ink">
            {COLS.map((col, i) => (
              <ul key={i} className="space-y-3">
                {col.map((l) => (<li key={l}><Link href="#" className="hover:text-brand">{l}</Link></li>))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-5 text-xs text-ink">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
