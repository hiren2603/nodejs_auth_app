import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Layout() {
  return (
    <div className='bg-slate-900 min-h-screen text-stone-200'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
