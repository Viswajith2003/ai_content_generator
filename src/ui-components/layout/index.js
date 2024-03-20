import { useEffect, useState } from "react";
import Header from "../Header";
import SidebarNavigation from "../SidebarNavigation";
import Footer from "../Footer/index";
import Cardmodal from "@aio/components/cardmodal/popupcard";
import Viewbtn from "../viewbtn/index";

const Layout = ({ children }) => {
  const [sidebarMenuActive, setSidebarMenuActive] = useState(true);

  const toggleSidebarMenu = () => setSidebarMenuActive(!sidebarMenuActive);
  const showSidebarMenu = () => setSidebarMenuActive(true);

  useEffect(() => {
    setSidebarMenuActive(window.innerWidth > 768 ? true : false);
  }, []);

  // const [showModal, setShowModal] = useState(false);
  return (
    <>
      <SidebarNavigation
        toggleSidebarMenu={toggleSidebarMenu}
        sidebarMenuActive={sidebarMenuActive}
      />
      <Header
        toggleSidebarMenu={toggleSidebarMenu}
        showSidebarMenu={showSidebarMenu}
      />
      {/* <Viewbtn onClick={( )=>{setShowModal(true)}}/> */}
      <section className="content">{children}</section>
      {/* <Cardmodal visible={showModal} /> */}

      <Footer />
    </>
  );
};

export default Layout;
