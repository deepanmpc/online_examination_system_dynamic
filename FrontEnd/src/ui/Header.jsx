import LanguageSelector from "./LanguageSelector";
import MessageBox from "./MessageBox";
import ProfileBox from "./ProfileBox";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("userRole");
        navigate("/login");
    };

    return (
        <header className="col-start-2 p-4 border-b-2 border-slate-200 flex justify-evenly items-center gap-8">
            <h2 className="basis-0">Dashboard</h2>
           <SearchBox />
           <LanguageSelector />
           <MessageBox />
           <ProfileBox />
           <button onClick={handleLogout} className="btn btn-sm btn-outline">Logout</button>
        </header>
    )

}

export default Header;