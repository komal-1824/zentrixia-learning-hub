export default function ProgramCard({ name, description }) {
  return (
    <div className="card card-hover p-6" data-aos="zoom-in">
      <div className="inline-flex items-center gap-2 text-sm mb-3 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500">
        <span>Certification</span>
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 opacity-80">{description}</p>
      <button className="mt-4 rounded-xl bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition">
        Explore Program
      </button>
    </div>
  );
}
