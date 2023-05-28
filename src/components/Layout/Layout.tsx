import { Outlet } from "react-router-dom";
// import Header from "../Widgets/Header";
// import motherboard from "../../assets/motherboard.webp";

const Layout = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div
      className="overflow-x-hidden min-h-screen flex flex-col max-w-container my-0 p-0 mx-auto bg-no-repeat bg-right-top"
      // style={{ backgroundImage: `url(${motherboard})` }}
    >
      {/* <Header /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-gray-800 p-6 text-white text-center">
        © {currentYear} Все права защищены.
      </footer>
    </div>
  );
};

export default Layout;
