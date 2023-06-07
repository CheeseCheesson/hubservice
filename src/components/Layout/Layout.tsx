import { Outlet, Link } from "react-router-dom";
import Header from "../Widgets/Header";
import { useState } from 'react';

const Layout = () => {

  const [showLinks, setShowLinks] = useState(!window.location.href.includes('/sherb'));

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }


  return (
    <>
      <Header />
      <div
        className="overflow-x-hidden min-h-full flex flex-col max-w-container my-0 p-0 mx-auto"
      >
        {
          showLinks && (
            <Link onClick={toggleLinks} to='/sherb' className="bg-pumpkin-orange text-black text-bold text-xl p-2 rounded-md max-w-[250px] flex items-center justify-center mx-auto">Старощербиновская</Link>
          )
        }

        <main className="flex-1">
          <Outlet />
        </main>

      </div>

    </>

  );
};

export default Layout;
