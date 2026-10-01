import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Squiggle, Cone, Cylinder, Ring } from "@/components/Shapes";

export default function NotFound() {
  return (
    <main>
      <section className="bg-grid relative overflow-hidden pb-20 pt-24 text-center text-white md:pb-28 md:pt-28">
        <Navbar />
        <Squiggle color="lime" className="-left-4 top-24 hidden h-24 w-24 md:block" />
        <Cone color="lime" className="right-[8%] top-20 hidden h-20 w-20 md:block" />
        <Cylinder color="white" className="-right-6 bottom-10 hidden h-40 w-24 rotate-12 md:block" />
        <Ring color="white" className="bottom-6 left-[6%] hidden h-28 w-28 md:block" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          
          <p
            className="-mt-[0.1em] -mb-[0.12em] select-none bg-clip-text font-heading font-bold leading-none text-transparent"
            style={{
              fontSize: "clamp(150px, 37vw, 600px)",
              backgroundImage: "linear-gradient(180deg, #d4ff00 18%, #003be1 86%)",
            }}
            aria-hidden
          >
            404
          </p>
          <h1
            className="relative mx-auto max-w-[14.5em] font-semibold leading-[1.15]"
            style={{ fontSize: "clamp(28px, 4.7vw, 68px)" }}
          >
            The page you are looking for doesn&apos;t exist
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm text-white/85 md:mt-7 md:max-w-none md:text-base">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-lime px-8 py-3 text-sm font-medium text-ink hover:brightness-95 md:mt-10 md:px-10 md:py-3.5 md:text-base"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
