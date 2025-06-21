export const metadata = {
  title: "DeAtlas",
  description: "Cross-chain decentralized swap with referrals, check-in, tasks, and staking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans">
        <header className="p-4 border-b border-gray-800 flex justify-between">
          <h1 className="text-xl font-bold text-primary">DeAtlas</h1>
          <nav className="space-x-3">
            <a href="/" className="hover:underline">Home</a>
            <a href="/swap" className="hover:underline">Swap</a>
            <a href="/check-in" className="hover:underline">Check-In</a>
            <a href="/referrals" className="hover:underline">Referrals</a>
            <a href="/tasks" className="hover:underline">Tasks</a>
            <a href="/roadmap" className="hover:underline">Roadmap</a>
            <a href="/qna" className="hover:underline">Q&A</a>
            <a href="/contact" className="hover:underline">Contact</a>
<a href="/bug-report" className="hover:underline">Bug Report</a>
            <a href="/support" className="hover:underline">Support</a>
<a href="/community" className="hover:underline">Community</a>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
              }
