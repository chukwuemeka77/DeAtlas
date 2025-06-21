export default function CommunityPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <h2 className="text-2xl font-bold">Join Our Community</h2>
      <p>
        Be part of the DeAtlas revolution. Connect, discuss, and contribute:
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li>
          <a href="https://t.me/deatlas" className="text-primary underline" target="_blank">
            Telegram Group (Main)
          </a>
        </li>
        <li>
          <a href="https://t.me/deatlas_testnet" className="text-primary underline" target="_blank">
            Telegram Testnet Discussion
          </a>
        </li>
        <li>
          <a href="https://twitter.com/deatlas" className="text-primary underline" target="_blank">
            Twitter / X
          </a>
        </li>
        <li>
          <a href="#" className="text-primary underline">Coming Soon: GitHub Contribution & Docs</a>
        </li>
      </ul>

      <p>Engage, ask questions, and participate in events and testnet bounty rounds.</p>
    </div>
  );
}
