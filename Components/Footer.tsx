import { FaTelegramPlane, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 px-4 border-t border-gray-800 text-sm text-gray-400">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} DeAtlas. All rights reserved.</p>

        <div className="flex space-x-4">
          <a href="https://t.me/deatlas" target="_blank" aria-label="Telegram">
            <FaTelegramPlane className="text-xl hover:text-white" />
          </a>
          <a href="https://twitter.com/deatlas" target="_blank" aria-label="Twitter">
            <FaTwitter className="text-xl hover:text-white" />
          </a>
          <a href="https://github.com/atlasweb3" target="_blank" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
      }
