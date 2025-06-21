export default function TasksPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Earn by Doing Tasks</h2>
      <p>Complete sponsored tasks from partners to earn more points.</p>

      <div className="grid gap-4">
        <div className="bg-gray-900 p-4 rounded shadow">
          <img src="/logo.png" alt="Project" className="w-20 h-20" />
          <h3 className="text-lg font-semibold">Project X</h3>
          <p>Follow on Twitter and share for 50 points.</p>
          <button className="mt-2 bg-primary text-white px-3 py-1 rounded">Claim</button>
        </div>
      </div>
    </div>
  );
}
