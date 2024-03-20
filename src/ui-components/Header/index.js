import styles from "./Header.module.css";
import { BsShare } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import Link from "next/link";
import routing from "./routing";
import Viewicon from "../viewbtn";

const Header = () => {
  return (
    <section>
      <div className={`${styles.container}`}>
        <div className="bg-[#0c0e10] w-full rounded-xl ml-6 mt-7 pt-4 h-40  pl-6 pr-6">
          <div className="flex justify-between mb-2">
            <div className="p-2 ">
              <h1 className="font-bold text-2xl mb-2">Orbital Oddysey</h1>
              <p className="font-light text-sm">
                Marketing Campaign for a new TV series Launch
              </p>
            </div>
            <div className="flex gap-5 p-2">
              <Viewicon />
              <Link href="#">
                <button className="flex rounded-xl gap-3 w-20 h-14 hover:scale-95">
                  <BsShare className="mt-4" />
                  <h2 className="font-semibold mt-3">Share</h2>
                </button>
              </Link>
              <div className="bg-[#363c42] h-10 w-10 mt-2 rounded-md p-2 hover:scale-95">
                <GoPencil className="w-5 h-5 " />
              </div>
              {/* Assuming these buttons are part of your header */}
            </div>
          </div>
          {/* Routing pages*/}
          <div className="mt-5 ml-5">
            <ul className="flex gap-14">
              {routing.map((route, index) => (
                <li key={index} className="hover:text-[#9ef377] hover:scale-95">
                  <Link href={`${route.to}`}>
                    <div className="flex gap-2 items-center mb-2 cursor-pointer">
                      <route.icon className="w-5 h-5 hover:text-[#9ef377]" />
                      <span>{route.name}</span>
                    </div>
                  </Link>
                  <span className="block hover:bg-[#9ef377] rounded-full h-1 w-24"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
