import { MdLanguage,MdKeyboardArrowDown } from "react-icons/md";

function LanguageSelector(){
    return (
        <div className="flex items-center gap-2">
            <MdLanguage size="20px" />
            <p className="text-sm">EN</p>
            <MdKeyboardArrowDown size="20px" />



        </div>
    )

}

export default LanguageSelector;