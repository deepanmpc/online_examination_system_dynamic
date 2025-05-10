import LanguageSelector from "./LanguageSelector";
import MessageBox from "./MessageBox";
import ProfileBox from "./ProfileBox";
import SearchBox from "./SearchBox";

function Header(){
    return (
        <header className="col-start-2 p-4 border-b-2 border-slate-200 flex justify-evenly items-center gap-8">
            <h2 className="basis-0">Dashboard</h2>
           <SearchBox />
           <LanguageSelector />
           <MessageBox />
           <ProfileBox />
        </header>
    )

}

export default Header;