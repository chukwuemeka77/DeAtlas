export default function SupportPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h2 className="text-2xl font-bold">Support Center</h2>
      <p>Need help with DeAtlas? Explore our resources below.</p>

      <ul className="list-disc ml-6 space-y-2">
        <li><a href="/qna" className="text-primary underline">Q&A — Frequently Asked Questions</a></li>
        <li><a href="/contact" className="text-primary underline">Contact Us</a></li>
        <li><a href="/bug-report" className="text-primary underline">Report a Bug</a></li>
        <li><a href="https://t.me/deatlas" className="text-primary underline" target="_blank">Telegram Support Group</a></li>
      </ul>

      <p>
        For issues related to tokens, swaps, and staking, please wait for the testnet release before submitting full reports.
      </p>
    </div>
  );
}
