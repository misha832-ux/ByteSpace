import Image from "next/image";

const ITEMS = [
  { name: "Sarah M.", role: "Enthusiastic Learner", avatar: "/avatars/sarah.jpg", text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", avatar: "/avatars/james.jpg", text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", avatar: "/avatars/alex.jpg", text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export default function Testimonials() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">Discover What Our Community Is Saying</h2>
          <p className="text-sm leading-6 text-ink/80">At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
        </div>
        <div className="mt-12 grid items-start gap-5 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-white p-6 shadow-sm">
              <span className="relative block h-11 w-11 overflow-hidden rounded-full">
                <Image src={t.avatar} alt="" fill className="object-cover" />
              </span>
              <figcaption className="mt-3"><p className="font-semibold text-ink">{t.name}</p><p className="text-sm text-brand">{t.role}</p></figcaption>
              <blockquote className="mt-4 text-sm leading-6 text-muted">&ldquo;{t.text}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
