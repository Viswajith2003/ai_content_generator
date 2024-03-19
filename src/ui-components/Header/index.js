import styles from "./Header.module.css";
import { BsShare } from "react-icons/bs";
import { MdNoteAlt } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <section>
      <div className={`${styles.container}`}>
        <div className="bg-[#12181f] w-full rounded-xl p-2 h-36 ml-5">
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

              <button className="bg-[#363c42] flex rounded-xl gap-2 w-20">
                <BsShare className="ml-2 mt-4" />
                <h2 className="font-semibold mt-4">Share</h2>
              </button>
              <MdNoteAlt className="w-8 h-12" />
            </div>
          </div>
          {/* <hr /> */}
          <div className="mt-5 ml-5">
            <ul className="flex gap-6">
              <li>
                <Link href={"/"}>Artificium</Link>
              </li>
              <li>
                <Link href={"/"}>Chat</Link>
              </li>
              <li>
                <Link href={"/"}>Library</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
