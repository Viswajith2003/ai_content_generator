import InputChat from "./InputChat/index";
import Header from "./Header";
import SidebarNavigation from "./SidebarNavigation/page";
import Page from "./pages/page";
import Dashboard from "./dashboard/Dashboard";
import Libry from "./Librarypage/page";

export default function Home() {
  return (
    <main>
      {/* <SidebarNavigation />
      <Header />
      <div className="w-[81%] h-[67%] bg-[#121618] fixed top-[180px] right-5">
        <Dashboard />
      </div>
      <InputChat /> */}
      <Libry/>
    </main>
  );
}
