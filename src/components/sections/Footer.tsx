export default function Footer() {
  return (
    <div className="bg-black opacity-90 md:h-[100px] w-full md:pr-20 p-4 md:flex md:items-center md:justify-between flex-col pl-20">
      <div className="text-md text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{' '}
        <a href="/" className="hover:underline hover:text-white">
          Jack Crawford
        </a>
      </div>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="hover:underline hover:text-white me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline hover:text-white me-4 md:me-6">
            Privacy Policy
          </a>
        </li>

        <li>
          <a href="#" className="hover:underline hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
