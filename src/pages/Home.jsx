import SectionHeader from '../components/SectionHeader.jsx';
import CourseCard from '../components/CourseCard.jsx';
import ProgramCard from '../components/ProgramCard.jsx';
import InstructorCard from '../components/InstructorCard.jsx';
import { courses, programs, instructors, TAGLINE } from '../utils/data.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90 dark:opacity-80" />
        <div className="container relative py-24 md:py-32 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Zentrixia Learning Hub
          </motion.h1>
          <p className="mt-3 text-lg md:text-xl">{TAGLINE}</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link className="px-6 py-3 rounded-xl bg-white text-gray-900 hover:opacity-90 transition" to="/courses">
              Explore Courses
            </Link>
            <Link className="px-6 py-3 rounded-xl bg-black/30 border border-white/30 hover:bg-black/40 transition" to="/join">
              Join Now
            </Link>
          </div>
        </div>
        {/* Decorative blobs */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
      </section>

      {/* Courses Preview */}
      <section className="container py-16">
        <SectionHeader title="Popular Short‑Term Courses" subtitle="Built for speed learning & hands‑on skills" />
        <div className="grid md:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((c) => (
            <CourseCard key={c.id} title={c.title} days={c.days} level={c.level} price={c.price} tag="Trending" />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition" to="/courses">
            View All Courses
          </Link>
        </div>
      </section>

      {/* Programs */}
      <section className="container py-10">
        <SectionHeader title="Signature Programs" subtitle="Earn badges & certification on completion" />
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.id} name={p.name} description={p.description} />
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section className="container py-16">
        <SectionHeader title="Meet Your Instructors" subtitle="Industry practitioners with real‑world experience" />
        <div className="grid md:grid-cols-3 gap-6">
          {instructors.map((i) => (
            <InstructorCard key={i.id} name={i.name} expertise={i.expertise} img={i.img} />
          ))}
        </div>
      </section>
    </>
  );
}
