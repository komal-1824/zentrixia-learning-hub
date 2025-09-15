// Reusable section header with subtle motion-ready attributes
export default function SectionHeader({ title, subtitle, center = true }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`} data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 opacity-80">{subtitle}</p>}
    </div>
  );
}
