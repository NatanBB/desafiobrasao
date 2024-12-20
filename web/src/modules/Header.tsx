import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 rounded md:p-0 ${isActive("/")
                  ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                  : "text-gray-900 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-50"
                  }`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Campos
              </Link>
            </li>
            <li>
              <Link
                to="/preenchimentos"
                className={`block py-2 px-3 rounded md:p-0 ${isActive("/preenchimentos")
                  ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:md:text-blue-500"
                  : "text-gray-900 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:text-blue-50"
                  }`}
                aria-current={isActive("/preenchimentos") ? "page" : undefined}
              >
                Preenchimentos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
