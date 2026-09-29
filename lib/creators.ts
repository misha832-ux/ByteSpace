export type Creator = {
  slug: string;
  name: string;
  role: string;
  products: number;
  followers: number;
  bio: string[];
};

export const CREATORS: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Passionate UI/UX, Web designer",
    products: 3,
    followers: 12,
    bio: [
      "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together.",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
  },
];

export function getCreator(slug: string) {
  return CREATORS.find((c) => c.slug === slug);
}