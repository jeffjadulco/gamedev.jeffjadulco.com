import Link from "next/link";

export const Header = () => {
  return (
    <div className="py-16">
      <span className="text-2xl font-bold text-gray-600">jeffjadulco/</span>
      <span className="text-2xl font-bold text-teal-300">
        <Link href="/">
          <a>gamedev</a>
        </Link>
      </span>
    </div>
  );
};
