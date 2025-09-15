import SectionHeader from '../components/SectionHeader.jsx';
import StatCard from '../components/StatCard.jsx';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const stats = [
    { label: 'Courses Enrolled', value: 5, hint: 'Active: 3' },
    { label: 'Completed Programs', value: 2, hint: 'Last: Web Mastery' },
    { label: 'Certificates Earned', value: 3, hint: 'Download in Profile' },
  ];
  const progress = [
    { title: 'AI Kickstart', pct: 70 },
    { title: 'React in 8 Days', pct: 52 },
    { title: 'UX in 5 Days', pct: 90 },
  ];

  return (
    <section className="container py-16">
      <SectionHeader title="My Dashboard" subtitle="Your learning snapshot at a glance" />

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Progress */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {progress.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card p-6"
          >
            <div className="flex justify-between mb-2">
              <div className="font-semibold">{p.title}</div>
              <div className="opacity-75">{p.pct}%</div>
            </div>
            <div className="h-3 w-full rounded-full bg-black/10 dark:bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
