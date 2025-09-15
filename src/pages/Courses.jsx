import CourseCard from "../components/CourseCard";

export default function Courses() {
  const courses = [
    { title: "AI Basics", duration: 7, level: "Beginner", price: 499 },
    { title: "Web Dev", duration: 10, level: "Intermediate", price: 799 },
    { title: "UI/UX Design", duration: 5, level: "Beginner", price: 399 },
    { title: "Cloud Fundamentals", duration: 7, level: "Beginner", price: 599 },
    { title: "React JS Crash", duration: 8, level: "Intermediate", price: 699 },
    { title: "Data Science Intro", duration: 12, level: "Advanced", price: 999 },
  ];

  return (
    <section className="container mx-auto py-16 grid md:grid-cols-3 gap-6">
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </section>
  );
}
