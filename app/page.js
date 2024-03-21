import InputChat from "./InputChat/index";
import Header from "./Header";
import SidebarNavigation from "./SidebarNavigation/page";
import Page from "./pages/page";
import Dashboard from "./dashboard/Dashboard";
import Libry from "./Librarypage/page";
import Art from "./artificium/page";

export default function Home() {
  return (
    <main>
      {/* <Libry/> */}
      {/* <SidebarNavigation />
      <Header /> */}
      {/* <div className="w-[81%] h-[67%] bg-[#121618] fixed top-[180px] right-5">
        <Dashboard />
      </div> */}
      {/* <div className="w-[81%] h-[67%] bg-[#131619] fixed top-[180px] right-5">
        <Libry className="" />
      </div> */}
      {/* <InputChat /> */}
      <Art />
    </main>
  );
}
