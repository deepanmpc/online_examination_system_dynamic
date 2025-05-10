import { MdKeyboardArrowDown } from "react-icons/md";

function ProfileBox(){

    return(
            <div className="flex gap-2 items-center text-sm">
                <img />
                <div>
                    <h3>Aryan Yalavarthi</h3>
                    <p>Admin</p>
                </div>
                <MdKeyboardArrowDown size="20px" />


            </div>
    )
    

}

export default ProfileBox;