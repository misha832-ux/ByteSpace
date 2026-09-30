import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Squiggle, Cone, Cylinder, Ring } from "@/components/Shapes";

export default function NotFound() {
  return (
    <main>
      <section className="bg-grid relative overflow-hidden py-28 text-center text-white">
        <Navbar />
        <Squiggle color="lime" className="-left-4 top-24 hidden h-24 w-24 md:block" />
        <Cone color="lime" className="right-[10%] top-16 hidden h-20 w-20 md:block" />
        <Cylinder color="white" className="-right-6 bottom-10 hidden h-40 w-24 rotate-12 md:block" />
        <Ring color="white" className="bottom-6 left-[8%] hidden h-28 w-28 md:block" />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="bg-gradient-to-b from-lime to-brand bg-clip-text text-[140px] font-bold leading-none text-transparent sm:text-[190px] md:text-[260px] lg:text-[320px]">404</p>
          <h1 className="mt-4 text-2xl font-semibold md:text-3xl">The page you are looking for doesn&apos;t exist</h1>
          <p className="mt-4 text-sm text-white/85">Try to use a correct url or go back to homepage to start again</p>
          <Link href="/" className="mt-8 inline-block rounded-full bg-lime px-6 py-2.5 text-sm font-medium text-ink hover:brightness-95">Back to Home</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
