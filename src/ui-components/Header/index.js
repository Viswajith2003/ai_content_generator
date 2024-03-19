import styles from "./Header.module.css";
import { BsShare } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { FiTriangle } from "react-icons/fi";
import { TfiFile } from "react-icons/tfi";
import Link from "next/link";

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
              <button className="bg-[#363c42] rounded-xl p-2 ">
                slidepics
              </button>

              <button className=" flex rounded-xl gap-3 w-20 h-14 ">
                <BsShare className=" mt-4" />
                <h2 className="font-semibold mt-3">Share</h2>
              </button>
              <div className="bg-[#363c42] h-10 w-10 mt-2 rounded-md p-2">
                <GoPencil className="w-5 h-5" />
              </div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="mt-5 ml-5">
            <ul className="flex gap-14">

              <li className="hover:text-[#9ef377]">
                <button className="flex gap-2  items-center mb-2">
                  <FiTriangle className="w-5 h-5 hover:text-[#9ef377]" />
                  <Link href={"/"}>Artificium</Link>
                </button>
                <div className="flex gap-2 items-center">
                  <span className="hover:bg-[#9ef377] hover:text-[#9ef377] rounded-full h-1 w-24"></span>
                </div>
              </li>

              <li className=" hover:text-[#9ef377]">
                <button className="flex gap-2  items-center mb-2">
                  <HiOutlineChatBubbleOvalLeft className="w-5 h-5 hover:text-[#9ef377]" />
                  <Link href={"/"}>Chat</Link>
                </button>
                <div className="flex gap-2 items-center">
                  <span className="hover:bg-[#9ef377] hover:text-[#9ef377] rounded-full h-1 w-24"></span>
                </div>
              </li>

              <li className=" hover:text-[#9ef377]">
                <button className="flex gap-2  items-center mb-2">
                  <TfiFile className="w-5 h-5 hover:text-[#9ef377]" />
                  <Link href={"/"}>Library</Link>
                </button>
                <div className="flex gap-2 items-center">
                  <span className="hover:bg-[#9ef377] hover:text-[#9ef377] rounded-full h-1 w-24"></span>
                </div>
              </li>

              {/* <li className="underline-hover-effect flex  gap-2 hover:text-[#9ef377]">
                <HiOutlineChatBubbleOvalLeft className="w-5 h-5" />
                <Link href={"/"}>Chat</Link>
              </li>
              <li className="flex gap-2 hover:text-[#9ef377]">
                <TfiFile className="w-5 h-5" />
                <Link href={"/"}>Library</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
