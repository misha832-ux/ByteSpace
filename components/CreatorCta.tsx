import Link from "next/link";
import { Squiggle, Ring, Cone, Cylinder } from "./Shapes";

export default function CreatorCta() {
  return (
    <section className="bg-grid relative overflow-hidden py-24 text-center text-white">
      <Squiggle color="lime" className="-left-6 -top-2 h-36 w-36" />
      <Squiggle color="white" className="left-[14%] top-6 hidden h-20 w-20 md:block" />
      <Cone color="white" className="-left-4 bottom-16 hidden h-24 w-24 md:block" />
      <Ring color="lime" className="-bottom-10 left-[6%] hidden h-36 w-36 md:block" />
      <Cone color="lime" className="right-[14%] top-4 hidden h-20 w-20 md:block" />
      <Cylinder color="white" className="-right-8 top-8 hidden h-48 w-28 rotate-12 md:block" />
      <Squiggle color="lime" className="-bottom-6 right-[6%] hidden h-32 w-32 md:block" />
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Unlock Your Potential as a Creator with ByteSpace</h2>
        <p className="mt-6 text-sm leading-6 text-white/90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link href="/signup" className="mt-8 inline-block rounded-full bg-lime px-6 py-2.5 text-sm font-medium text-ink hover:brightness-95">Join as Creator</Link>
      </div>
    </section>
  );
}
