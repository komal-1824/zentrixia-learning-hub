// Course card with hover lift and price highlight
export default function CourseCard({ title, days, level, price, tag }) {
  return (
    <div className="card card-hover overflow-hidden" data-aos="fade-up">
      <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-pink-500" />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          {tag && (
            <span className="text-xs px-2 py-1 rounded-full bg-indigo-600/15 text-indigo-600 dark:text-indigo-300">
              {tag}
            </span>
          )}
        </div>
        <p className="mt-1 opacity-80">{days} days • {level}</p>
        <div className="mt-4">
          <span className="text-indigo-600 dark:text-indigo-300 font-bold text-lg">₹{price}</span>
        </div>
        <button className="mt-5 w-full rounded-xl bg-indigo-600 text-white py-2 hover:bg-indigo-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
