import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-96 bg-white">
      <div className="text-gray-900  h-5/6 flex flex-col px-24 justify-end">
        <Link href="/privacy_policy">Privacy Policy</Link><br />
        <Link href="/terms_conditions">Terms & Conditions</Link>
      </div>
      <div className="flex items-end justify-center h-1/6">
        <p className="text-xs text-gray-400 ">&copy; 2024 Contexx AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
