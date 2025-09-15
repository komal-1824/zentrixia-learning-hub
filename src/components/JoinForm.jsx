export default function JoinForm() {
  return (
    <form className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Join Zentrixia</h2>
      <input type="text" placeholder="Name" className="w-full p-2 mb-3 border rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
      <input type="email" placeholder="Email" className="w-full p-2 mb-3 border rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100" />
      <select className="w-full p-2 mb-3 border rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
        <option>AI</option>
        <option>Web Development</option>
        <option>UI/UX</option>
        <option>Cloud</option>
      </select>
      <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">Submit</button>
    </form>
  );
}
