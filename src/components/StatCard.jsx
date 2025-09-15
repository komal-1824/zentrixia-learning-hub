export default function StatCard({ label, value, hint }) {
  return (
    <div className="card card-hover p-6 text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="mt-1 opacity-80">{label}</div>
      {hint && <div className="text-xs opacity-60 mt-2">{hint}</div>}
    </div>
  );
}
