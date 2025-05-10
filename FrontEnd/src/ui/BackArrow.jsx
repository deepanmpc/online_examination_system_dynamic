import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function BackArrow(){

    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate(-1)} className="hover:cursor-pointer mb-2">
            <MdKeyboardBackspace size={25} />
        </div>
    )
}

export default BackArrow;