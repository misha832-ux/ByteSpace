export default function LogoStrip() {
  return (
    <section className="bg-[#f4f4f4] py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2 text-lg font-semibold text-[#8a8d96]">
            <span className="h-6 w-6 rounded-full bg-[#8a8d96]" />
            Logoipsum
          </div>
        ))}
      </div>
    </section>
  );
}
