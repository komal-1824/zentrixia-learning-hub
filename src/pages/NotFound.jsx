import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container py-24 text-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-2 opacity-80">Page not found.</p>
      <Link to="/" className="inline-block mt-6 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
        Go Home
      </Link>
    </section>
  );
}
