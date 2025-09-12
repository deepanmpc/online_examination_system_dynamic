import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BackArrow from "./BackArrow";

function AppLayout(){
    const role = localStorage.getItem("userRole") || "student";

    return (
        <div className="bg-slate-50 grid h-dvh grid-cols-[auto_1fr] grid-rows-[auto_1fr] text-slate-800">
             <Header />
             <Sidebar role={role} />  
        <main className="bg-gray-100 py-4 px-10">
            <BackArrow />
            <Outlet />
            
        </main>
       
        
        </div>
    )

}

export default AppLayout;