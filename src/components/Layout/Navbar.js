import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar  bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            <li>
              <a>Parent</a>
              <ul className="p-2 bg-neutral">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">PC-Stall</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 ">
          <li tabIndex={0}>
            <details>
              <summary>Categories</summary>
              <ul className="p-2 bg-neutral ">
                <li>
                  <Link href="/">CPU / Processor</Link>
                </li>
                <li>
                  <Link href="/">Motherboard</Link>
                </li>
                <li>
                  <Link href="/">RAM</Link>
                </li>
                <li>
                  <Link href="/">Power Supply Unit</Link>
                </li>
                <li>
                  <Link href="/">Storage Device</Link>
                </li>
                <li>
                  <Link href="/">Monitor</Link>
                </li>
                <li>
                  <Link href="/">Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">PC-Builder</a>
        <a className="btn">login</a>
      </div>
    </div>
  );
};

export default Navbar;
