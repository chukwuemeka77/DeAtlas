export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>
        Have questions or want to partner with DeAtlas? Reach out via this form.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
        />
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
        />
        <textarea
          placeholder="Your message"
          rows={4}
          className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
