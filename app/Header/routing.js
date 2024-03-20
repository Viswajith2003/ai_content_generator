import { FiTriangle } from "react-icons/fi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { TfiFile } from "react-icons/tfi";

const routing = [
  {
    to: "/artificiumpage",
    icon: FiTriangle,
    name: "Artificium",
  },
  {
    to: "/chatpage",
    icon: HiOutlineChatBubbleOvalLeft,
    name: "Chat",
  },
  {
    to: "/librarypage",
    icon: TfiFile,
    name: "Library",
  },
];  
export default routing;
