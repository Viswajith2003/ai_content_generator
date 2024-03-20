import { useNavigation } from "next/navigation";

import styles from "./SidebarNavigation.module.css";
import Link from "next/link";
import routes from "./routing";
import { useRouter } from "next/navigation";
import { CiSettings } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import Logo from "../Logo";

const SidebarNavigation = ({ sidebarMenuActive, toggleSidebarMenu }) => {
  // const router = useRouter();

  // console.log({ router });

  return (
    <section
      className={`${styles.container} rounded-xl text-white ${
        sidebarMenuActive ? styles["active"] : ""
      }`}
    >
      <div className="justify-between mt-5 w-80 p-2 mb-10 ">
        <button
          className={styles["sidebar-close-btn"]}
          onClick={toggleSidebarMenu}
        >
          x
        </button>

        <div className={`${styles["profile"]} rounded-xl justify-between mr-3`}>
          <div className="flex">
            <Logo />
            <div className="flex-col">
              <span className="text-xl ml-3">Intellisys</span>
              <p className="text-sm ml-3 text-[#c5e928]">12 members</p>
            </div>
          </div>
          <RiArrowDropDownLine />
        </div>
      </div>

      <div className={styles["sidebar-container"]}>
        <h1 className="text-[#9c9491f3] mb-4">GENERAL</h1>
        <div className={`${styles["sidebar-menu-item"]} mb-14 `}>
          <div className="flex mb-4">
            <FaSearch className="mt-4 mr-2 h-6" />
            <input
              type="search"
              placeholder="Search"
              className="text-white bg-gray-800 border-2 border-[#0c0e10] focus:outline-none px-2 py-1"
              style={{ "--placeholder-font-weight": "bold" }}
            />
            <div className="bg-[#312b2b] mt-2 mb-2 rounded-lg w-20 h-10 flex">
              <MdOutlineQrCodeScanner className="mt-3 w-10 h-4" />
              <h1 className="mt-2">$</h1>
            </div>
          </div>
          <div className="flex gap-3">
            <MdOutlineWeb className="mt-1" />
            <span>Billing</span>
          </div>
        </div>
      </div>

      <div className="">
        <ul className={styles["sidebar-container"]}>
          <h1 className="text-[#9c9491f3] mb-4">PROJECTS</h1>
          {routes.map((page, index) => (
            <li
              key={index}
              className={`${styles["sidebar-menu-item"]} ${
                page.route === page.to ? styles["active"] : ""
              }`}
            >
              <Link href={page.to}>
                <page.Icon />
                <span>{page.name}</span>
              </Link>
            </li>
          ))}
          <div className="ml-3 text-[#9c9491f3] flex mt-4 gap-3 text-center">
            <IoMdAddCircleOutline className="mt-1" />
            <h1>Add new project</h1>
          </div>
        </ul>
      </div>

      <ul className={`${styles["sidebar-footer"]} rounded-xl m-2 `}>
        <li className={`${styles["footer-item"]} justify-between`}>
          <div className="flex">
            <Logo />
            <div className="flex-col">
              <span className="text-xl">RyanLee</span>
              <p className="text-sm ml-3 text-[#c5e928]">Premium</p>
            </div>
          </div>
          <CiSettings />
        </li>
      </ul>
    </section>
  );
};

export default SidebarNavigation;
