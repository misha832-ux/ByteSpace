export type Course = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  rating: number;
  level: string;
  price: number;
  lessons: number;
  hours: number;
  comments: number;
  reviews: number;
  students: number;
};

export const COURSES: Course[] = [
  { slug: "learn-figma-from-basic", title: "Learn Figma from Basic", tagline: "Master the fundamentals of Figma from the ground up", image: "/courses/1.jpg", rating: 4.5, level: "Beginner", price: 25, lessons: 17, hours: 2, comments: 59, reviews: 172, students: 199 },
  { slug: "build-digital-asset", title: "Build Digital Asset: A Comprehensive Guide", tagline: "Unlock the Power of Digital Creation with Expert Guidance", image: "/courses/2.jpg", rating: 4.5, level: "Intermediate", price: 25, lessons: 112, hours: 24, comments: 59, reviews: 172, students: 199 },
  { slug: "the-power-of-big-data", title: "the Power of Big Data", tagline: "Turn raw numbers into decisions that matter", image: "/courses/3.jpg", rating: 4.5, level: "Beginner", price: 25, lessons: 17, hours: 2, comments: 59, reviews: 172, students: 199 },
  { slug: "balancing-productivity-and-life", title: "Balancing Productivity and Life", tagline: "Build habits that make room for both work and rest", image: "/courses/4.jpg", rating: 4.5, level: "Beginner", price: 25, lessons: 17, hours: 2, comments: 59, reviews: 172, students: 199 },
  { slug: "mastering-money-management", title: "Mastering Money Management", tagline: "Practical budgeting and investing for beginners", image: "/courses/5.jpg", rating: 4.5, level: "Beginner", price: 25, lessons: 17, hours: 2, comments: 59, reviews: 172, students: 199 },
  { slug: "from-idea-to-startup-success", title: "From Idea to Startup Success", tagline: "A founder's playbook from first sketch to launch", image: "/courses/6.jpg", rating: 4.5, level: "Beginner", price: 25, lessons: 17, hours: 2, comments: 59, reviews: 172, students: 199 },
];

export function getCourse(slug: string) {
  return COURSES.find((c) => c.slug === slug);
}