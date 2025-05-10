import { BsSearch } from "react-icons/bs";


function SearchBox(){

    return (
        <div className="bg-slate-100 border-2 border-slate-200 px-4 py-2 flex basis-80 gap-2 items-center rounded-full">
          <BsSearch />
          <input className="bg-slate-100 focus:outline-none" type="search" name="search" id="search" placeholder="Search"/>
        </div>
    )

}

export default SearchBox;