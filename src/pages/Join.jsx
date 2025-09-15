import SectionHeader from '../components/SectionHeader.jsx';

export default function Join() {
  return (
    <section className="container py-16">
      <SectionHeader title="Join Zentrixia" subtitle="Tell us what you want to learn — no backend required." />
      <form className="card p-6 max-w-xl mx-auto space-y-4" data-aos="fade-up">
        <div>
          <label className="block text-sm mb-1 opacity-80">Name</label>
          <input className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm mb-1 opacity-80">Email</label>
          <input type="email" className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1 opacity-80">Course of Interest</label>
          <select className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2">
            <option>AI</option>
            <option>Web Development</option>
            <option>UI/UX</option>
            <option>Cloud</option>
            <option>Data</option>
          </select>
        </div>
        <button type="button" className="w-full rounded-xl bg-indigo-600 text-white py-2 hover:bg-indigo-700 transition">
          Submit
        </button>
        <p className="text-xs opacity-60">By submitting, you agree to be contacted at {`hello@zentrixia.tech`}.</p>
      </form>
    </section>
  );
}
