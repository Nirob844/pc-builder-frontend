import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="navbar text-white  bg-neutral shadow-xl">
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
        <ul className="menu menu-horizontal px-1 bg-neutral">
          <li tabIndex={0}>
            <details className=" ">
              <summary className="text-xl hover:text-white">Categories</summary>
              <ul className="p-2 bg-neutral">
                <li>
                  <Link className="hover:text-white" href="/categories/cpu">
                    CPU / Processor
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    href="/categories/motherboard"
                  >
                    Motherboard
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/categories/ram">
                    RAM
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    href="/categories/power-supply"
                  >
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-white"
                    href="/categories/storagedevice"
                  >
                    Storage Device
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/categories/monitor">
                    Monitor
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" href="/categories/others">
                    Others
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          PC-Stall
        </Link>
        <Link href="/" className="btn btn-ghost ">
          Home
        </Link>
        <Link href="/product" className="btn btn-ghost ">
          All Product
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/pc-builder" className="btn  ">
          PC-Builder
        </Link>
        {session?.user ? (
          <button onClick={() => signOut()} className="btn btn-ghost">
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="btn btn-ghost">logIn</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
