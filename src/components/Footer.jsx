import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { EMAIL, HOURS, TAGLINE } from '../utils/data.js';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/20 dark:border-white/10">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">Zentrixia Learning Hub</h3>
          <p className="opacity-80">{TAGLINE}</p>
          <p className="mt-2 text-sm opacity-70">Hours: {HOURS}</p>
          <p className="text-sm opacity-70">Email: {EMAIL}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 opacity-90">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/courses">Courses</Link></li>
            <li><Link className="hover:underline" to="/programs">Programs</Link></li>
            <li><Link className="hover:underline" to="/instructors">Instructors</Link></li>
            <li><Link className="hover:underline" to="/join">Join Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="text-center py-6 bg-gradient-to-r from-indigo-600/10 to-pink-500/10">
        © {new Date().getFullYear()} Zentrixia Learning Hub. All rights reserved.
      </div>
    </footer>
  );
}
