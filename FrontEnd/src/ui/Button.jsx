function Button({children,type,onClick}){

    return (
        <button type={type}  onClick={onClick} className={`p-4 rounded-xl bg-orange-400 text-md font-medium`}>{children}</button>
    )

   

}

export default Button;