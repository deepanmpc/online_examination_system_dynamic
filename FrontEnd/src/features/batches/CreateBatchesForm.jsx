import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateBatch } from './useCreateBatch';

import Button from '../../ui/Button';
import { useEditBatch } from './useEditBatch';

function CreateBatchesForm({courseName,setShowCreateForm={},currentBatch={},setEditForm={}}){

    const {createBatch} = useCreateBatch();

    const {editBatch} = useEditBatch();

    const {batchId,...editValues} =  currentBatch;

    const isEditSession = Boolean(batchId);

    const onCancel=()=>{
        isEditSession ? setEditForm((show)=> !show) : setShowCreateForm((show)=>!show);
    }
        

            return (
                <Formik

                initialValues={isEditSession ? editValues : {batchName:'',batchCode:'',batchDescription:''}}
                    validationSchema={Yup.object({
                        batchName: Yup.string().required('Required'),
                        batchCode: Yup.string().required('Required'),
                        batchDescription: Yup.string().required('Required')
                    })} 
                    onSubmit={(values,actions)=>{
                        isEditSession ? editBatch({batchId,courseName,...values}):createBatch({courseName,...values});
                        actions.resetForm({
                            values: {
                                batchName:'',
                                batchCode:'',
                                batchDescription:''
                                
                            }
                        });
                        
                    }}
                >
                    <Form className="bg-white flex flex-col gap-6 p-8">
                        <div className="grid grid-cols-[0.5fr_1fr] items-center">

                        <label htmlFor="batchName" className="text-md font-medium">Batch name</label>
                        <div>
                        <Field name="batchName" type="text" className="focus:outline-none  border-2 border-slate-400" />
                        <ErrorMessage name="batchName" />
                        </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr] items-center">

                        <label htmlFor="batchCode" className="text-md font-medium">Batch code</label>
                        <div>
                        <Field name="batchCode" type="text" className="focus:outline-none  border-2 border-slate-400" />
                        <ErrorMessage name="batchCode" />
                        </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr] items-center">
                            <label htmlFor="batchDescription" className="text-md font-medium">Batch description</label>
                            <div>
                                <Field name="batchDescription" type="text" className="focus:outline-none  border-2 border-slate-400" />
                                <ErrorMessage name="batchDescription" />
                            </div>
                        </div>

                        <div className="flex gap-6 self-end">

                        <Button type="reset" onClick={onCancel}>Cancel</Button>
                        <Button type="submit">{isEditSession ? 'Update batch' : 'Add batch'}</Button>

                        </div>
                    </Form>
                </Formik>
                 )


}

export default CreateBatchesForm;