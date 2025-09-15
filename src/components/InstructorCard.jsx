export default function InstructorCard({ name, expertise, img }) {
  return (
    <div className="card card-hover p-6 text-center" data-aos="fade-up">
      <img
        src={img}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-indigo-600/20"
      />
      <h4 className="mt-3 font-semibold">{name}</h4>
      <p className="opacity-75">{expertise}</p>
    </div>
  );
}
