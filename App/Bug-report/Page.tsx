export default function BugReportPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h2 className="text-2xl font-bold">Bug Report</h2>
      <p>
        Found an issue? Report bugs and glitches here. Note: full bug tracking will start with the public testnet.
      </p>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your email (optional)"
          className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
        />
        <textarea
          placeholder="Describe the issue or error you found"
          rows={4}
          className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Submit Bug Report
        </button>
      </form>
    </div>
  );
}
