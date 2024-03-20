import { IoGridOutline, IoHomeOutline } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const routing = [
  {
    to: "/",
    name: "Orbital Oddysey",
    Icon: IoHomeOutline,
  },
  {
    to: "/profile",
    name: "Digital Product Launch",
    Icon: BiUserCircle,
  },
  {
    to: "/dashboard",
    name: "Brand Refresh",
    Icon: BsSpeedometer2,
  },
  {
    to: "/test-components",
    name: "Social Media Strategy",
    Icon: IoGridOutline,
  },
];
export default routing;
