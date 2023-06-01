import { Outlet } from "react-router-dom";
import { CurrentYear } from "../../utils";
import Header from "../Widgets/Header";

const Layout = () => {

  return (
    <>
      <Header />
      <div
        className="overflow-x-hidden min-h-screen flex flex-col max-w-container my-0 p-0 mx-auto"
      >
        <main className="flex-1 bg-white-smoke">
          <Outlet />
        </main>

      </div>
      <footer className="bg-midnight-blue p-6 text-white text-center">
        © {CurrentYear} Все права защищены.
      </footer>
    </>

  );
};

export default Layout;
