import { MdEmail,MdNotifications } from "react-icons/md";

function MessageBox(){
    return (
        <div className="flex items-center gap-2">
            <MdEmail size="20px" />
            <MdNotifications size="20px" />
        </div>
    )

}

export default MessageBox;