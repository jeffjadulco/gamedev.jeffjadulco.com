import Link from "next/link";

export const Header = () => {
  return (
    <div className="py-8 md:py-16 flex md:justify-start">
      <span className="text-lg sm:text-2xl font-bold text-gray-600">
        jeffjadulco/
      </span>
      <span className="text-lg sm:text-2xl font-bold text-teal-300 hover:text-gray-600 focus:text-gray-600 transition-colors duration-200">
        <Link href="/">
          <a>gamedev</a>
        </Link>
      </span>
    </div>
  );
};
