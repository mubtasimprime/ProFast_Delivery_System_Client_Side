import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ScrollToUp from "../components/shared/ScrollToUp";

const MainLayout = () => {
  return (
    <div className="main-bg pt-8 pb-10">
      <ScrollToUp></ScrollToUp>
      <section className="max-w-[1500px] mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default MainLayout;
