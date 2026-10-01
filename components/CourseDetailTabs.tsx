"use client";

import Image from "next/image";
import { useState } from "react";
import type { Course } from "@/lib/courses";

const MODULES = [
  { title: "Module 1: Introduction to Digital Assets", body: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
  { title: "Module 2: Design Principles for Impact", body: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
  { title: "Module 4: User-Centric Design Strategies", body: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
  { title: "Module 5: Interactive Media and Engagement", body: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
  { title: "Module 6: Project Showcase and Critique", body: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
  { title: "Module 7: Optimizing Digital Assets for Various Platforms", body: "Adapt your creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes." },
];

const RATING_BARS = [
  { stars: 5, count: 720, pct: 78 },
  { stars: 4, count: 120, pct: 22 },
  { stars: 3, count: 21, pct: 8 },
  { stars: 2, count: 12, pct: 5 },
  { stars: 1, count: 16, pct: 6 },
];

const REVIEWS = [
  { name: "PurePearl Studio", role: "UI/UX Designer", when: "a year ago", avatar: "/avatars/purepearl.jpg", text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!" },
  { name: "Albert Flores", role: "UI/UX Designer", when: "a year ago", avatar: "/avatars/albert.jpg", text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!" },
  { name: "Cody Fisher", role: "UI/UX Designer", when: "a year ago", avatar: "/avatars/cody.jpg", text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process." },
  { name: "Brooklyn Simmons", role: "UI/UX Designer", when: "a year ago", avatar: "/avatars/brooklyn.jpg", text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout." },
];

const SNEAK_PEEK = ["/sneak/1.jpg", "/sneak/2.jpg", "/sneak/3.jpg", "/sneak/4.jpg"];
const KEY_POINTS = ["Foundational Concepts", "Design Principles Mastery", "Advanced Techniques in Digital Creation", "Project Management Best Practices"];

const TABS = ["About", "Lesson", "Reviews"] as const;
type Tab = (typeof TABS)[number];

const Star = ({ filled = true }: { filled?: boolean }) => (
  <svg viewBox="0 0 20 20" className="h-4 w-4" fill={filled ? "#0e0e1a" : "#d9d9de"}><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" /></svg>
);

export default function CourseDetailTabs({ course }: { course: Course }) {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <div>
      <div className="flex gap-3">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`rounded-full px-5 py-2 text-sm ${tab === t ? "bg-lime font-medium text-ink" : "bg-chip text-ink hover:bg-black/10"}`}>{t}</button>
        ))}
      </div>

      {tab === "About" && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Description</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-muted">
            <p>Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;{course.title}.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.</p>
            <p>In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.</p>
            <p>As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.</p>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-ink">Sneak Peak</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SNEAK_PEEK.map((src) => (
              <div key={src} className="relative h-28 overflow-hidden rounded-xl"><Image src={src} alt="" fill sizes="25vw" className="object-cover" /></div>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold text-ink">Key Points</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink">
            {KEY_POINTS.map((k) => (
              <li key={k} className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand"><svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#fff" strokeWidth="2"><path d="m3 6 2 2 4-4" /></svg></span>
                {k}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === "Lesson" && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-ink">Explore the Modules</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.</p>

          <h3 className="mt-8 text-lg font-semibold text-ink">Lesson List</h3>
          <ul className="mt-4 space-y-5">
            {MODULES.map((m) => (
              <li key={m.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#0e0e1a" strokeWidth="1.8"><path d="M4 6h13v12H4zM17 10l4-2v8l-4-2" /></svg>
                </span>
                <div><p className="font-medium text-ink">{m.title}</p><p className="mt-1 text-sm leading-6 text-muted">{m.body}</p></div>
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-lg font-semibold text-ink">Lesson Content</h3>
          <p className="mt-3 text-sm leading-6 text-muted">Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.</p>

          <h3 className="mt-10 text-lg font-semibold text-ink">Lesson Progress Tracking</h3>
          <p className="mt-3 text-sm leading-6 text-muted">Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.</p>
          <div className="mt-4 max-w-sm rounded-2xl border border-black/10 p-5">
            <p className="text-xs text-muted">Learning Progress</p>
            <p className="text-3xl font-semibold text-ink">55%</p>
            <div className="mt-2 h-1.5 rounded-full bg-chip"><div className="h-full w-[55%] rounded-full bg-lime" /></div>
          </div>
        </div>
      )}

      {tab === "Reviews" && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-ink">What Learners Are Saying</h2>
          <p className="mt-3 text-sm leading-6 text-muted">Discover what our learners have to say about their experience with &lsquo;{course.title}.&rsquo; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.</p>

          <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-black/10 p-6 sm:flex-row sm:items-center">
            <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl bg-lime">
              <p className="text-xs text-ink">Ratings</p>
              <p className="text-3xl font-semibold text-ink">4.7</p>
            </div>
            <div className="flex-1 space-y-2">
              {RATING_BARS.map((r) => (
                <div key={r.stars} className="flex items-center gap-3 text-xs text-muted">
                  <div className="h-1.5 flex-1 rounded-full bg-chip"><div className="h-full rounded-full bg-lime" style={{ width: `${r.pct}%` }} /></div>
                  <span className="flex">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} />))}</span>
                  <span className="w-8 text-right">{r.count}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-ink">Individual Reviews:</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-lime px-4 py-2 text-xs font-medium text-ink">All rating</span>
            {[5, 4, 3, 2, 1].map((n) => (
              <span key={n} className="flex items-center gap-1 rounded-full bg-chip px-4 py-2 text-xs text-ink"><Star /> {n}</span>
            ))}
          </div>

          <div className="mt-6 space-y-5">
            {REVIEWS.map((r) => (
              <article key={r.name + r.text.slice(0, 8)} className="rounded-2xl border border-black/10 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image src={r.avatar} alt="" fill sizes="40px" className="object-cover" />
                    </span>
                    <div><p className="font-medium text-ink">{r.name}</p><p className="text-xs text-muted">{r.role}</p></div>
                  </div>
                  <span className="text-xs text-muted">{r.when}</span>
                </div>
                <div className="mt-3 flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => (<Star key={i} />))}</div>
                <p className="mt-3 text-sm leading-6 text-muted">&ldquo;{r.text}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
