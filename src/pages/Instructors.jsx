import SectionHeader from '../components/SectionHeader.jsx';
import InstructorCard from '../components/InstructorCard.jsx';
import { instructors } from '../utils/data.js';

export default function Instructors() {
  return (
    <section className="container py-16">
      <SectionHeader title="Instructors" subtitle="Small cohorts led by experts" />
      <div className="grid md:grid-cols-3 gap-6">
        {instructors.map((i) => (
          <InstructorCard key={i.id} name={i.name} expertise={i.expertise} img={i.img} />
        ))}
      </div>
    </section>
  );
}
