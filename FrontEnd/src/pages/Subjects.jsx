import { useState } from "react";

import SubjectTable from "../features/subjects/SubjectTable";
import Button from "../ui/Button";
import CreateSubjectForm from "../features/subjects/CreateSubjectForm";

function Subjects(){
    const [showCreateForm,setShowCreateForm] = useState(false);
    return (
        <div>
            <h2 className="text-4xl mb-3">Subjects</h2>
            <SubjectTable />
            <Button onClick={()=> setShowCreateForm((show)=>!show)}>Add New Subject</Button>
            { 
            showCreateForm && <CreateSubjectForm setShowCreateForm={setShowCreateForm} />
                }
        </div>
    )

}

export default Subjects;