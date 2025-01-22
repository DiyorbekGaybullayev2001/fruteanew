import { useState } from "react";
import Nav from "./nav/Nav";
import NavTop from "./nav/NavTop";
import Footer from "./Footer";
import My_orders from "./my_orders";
import My_settings from "./my_settings";
import useStore from '../store/teaStore'

function Cabinet() {
  const [activePage, setActivePage] = useState("my_orders");
  const user = useStore(state => state.user); 

  return (
    <>
      <Nav />
      <NavTop />

      <div className="container m-auto  h-[600px]">
      <div className="mt-[40px]">
        <span className="font-semibold text-[25px]">{user?.firstName} {user.lastName}</span>
      </div>
      <div className="flex">
        <nav className="w-[30%] p-4">
          <ul>
            <li className="mb-4">
              <button
                onClick={() => setActivePage("my_orders")} 
                className={`block p-3 rounded ${
                  activePage === "my_orders" ? "bg-green-300" : "hover:bg-green-300"
                }`}>
                Buyurtmalarim
              </button>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setActivePage("my_settings")}
                className={`block p-3 rounded ${
                  activePage === "my_settings" ? "bg-green-300" : "hover:bg-green-300"
                }`}>
                Malumotlarim
              </button>
            </li>
          </ul>
        </nav>
        <div className="w-3/4 p-4 ">
          {activePage === "my_orders" && <My_orders />} 
          {activePage === "my_settings" && <My_settings />}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Cabinet;









// import React from "react";
// import Nav from "./nav/Nav";
// import NavTop from "./nav/NavTop";
// import Footer from "./Footer";
// import { ToastContainer } from "react-toastify";
// import { Link, Route, Routes} from "react-router-dom";
// import My_orders from "./my_orders";
// import My_settings from "./my_settings";
// // import My_orders from "./my_orders";
// // import My_settings from "./my-settings";

// function Cabinet() {
//   return (
//     <>
//       <Nav />
//       <NavTop />
      

//       <div className="container m-auto border h-[600px] flex">
//         {/* Chap menyu */}
//         <nav className="w-1/4 bg-gray-100 p-4 border-r">
//           <ul>
//             <li className="mb-4">
//               <Link
//                 to="my_orders"
//                 className="block p-2 rounded hover:bg-green-300"
//                 >
//                 Buyurtmalarim
//               </Link>
//             </li>
//             <li className="mb-4">
//               <Link
//                 to="my_settings"
//                 className="block p-2 rounded hover:bg-green-300"
//                 >
//                 Ma'lumotlarim
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Asosiy kontent */}
//           <ToastContainer />
//         <div className="w-3/4 p-4">
//           <Routes>
//             <Route path="my_orders" element={<My_orders />} />
//             <Route path="my_settings" element={<My_settings />} />
//           </Routes>
//           {/* <Outlet /> */}
//           {/* <My_orders/> */}
//           {/* <My_settings/> */}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Cabinet;
