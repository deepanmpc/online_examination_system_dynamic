import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMcqsByExam } from "../../services/apiMcqs";
import OptionTable from "./OptionTable";
import { getMcqOptions } from "../../services/apiOptions";

function McqOptions() {

const [mcqOptions, setMcqOptions] = useState([]);

const {id} = useParams();


useEffect(()=>{
    const getData = async()=>{
        const response = await getMcqOptions(id);
        setMcqOptions(response);

    }
    getData();
},[id])


    

    return (
        <div>

            {
               mcqOptions?.length>0 && <OptionTable mcqOptions={mcqOptions} />
            }
        </div>
    )

}

export default McqOptions;