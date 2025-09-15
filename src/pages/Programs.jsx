import SectionHeader from '../components/SectionHeader.jsx';
import ProgramCard from '../components/ProgramCard.jsx';
import { programs } from '../utils/data.js';

export default function Programs() {
  return (
    <section className="container py-16">
      <SectionHeader title="Programs" subtitle="Deep‑dive micro‑programs with guided tracks" />
      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((p) => (
          <ProgramCard key={p.id} name={p.name} description={p.description} />
        ))}
      </div>
    </section>
  );
}
