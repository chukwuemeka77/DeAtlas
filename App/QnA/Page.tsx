export default function QnAPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Questions & Answers</h2>

      <div>
        <h3 className="text-lg font-semibold text-primary">❓ What is DeAtlas?</h3>
        <p>
          DeAtlas is a cross-chain swap platform with a built-in reward system. Users earn points by checking in daily, completing tasks, and inviting friends. Points are later converted to ATLX tokens.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary">❓ Is DeAtlas live on mainnet?</h3>
        <p>
          Not yet. We're currently in MVP mode. Testnet and ATLX airdrop are coming soon. Early users earn more points and higher eligibility.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary">❓ How do I earn points?</h3>
        <ul className="list-disc ml-6">
          <li>Check in every 12 hours</li>
          <li>Invite friends with your referral link</li>
          <li>Complete project tasks in the Tasks page</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary">❓ What are points used for?</h3>
        <p>
          Points are converted 1:1 into ATLX tokens once the token is launched. Users with more points get priority in farming, airdrops, and staking.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary">❓ Will there be a mobile app?</h3>
        <p>
          Yes! DeAtlas will support Telegram Mini Apps, Android & iOS versions after the MVP launch.
        </p>
      </div>
    </div>
  );
          }
