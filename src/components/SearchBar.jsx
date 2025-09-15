// Search + Category filter bar for Courses
import { categories } from '../utils/data.js';

export default function SearchBar({ query, setQuery, category, setCategory }) {
  return (
    <div className="card p-4 flex flex-col md:flex-row gap-3 items-center" data-aos="fade-up">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses (e.g., React, AI, Cloud)..."
        className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2 outline-none"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-56 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-2"
      >
        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  );
}
