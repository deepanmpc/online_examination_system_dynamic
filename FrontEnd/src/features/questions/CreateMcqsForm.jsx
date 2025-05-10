import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../ui/Button';
import { useCreateMcqs } from './useCreateMcqs';
import { updateMcqAPi } from '../../services/apiMcqs';



function CreateMcqsForm({examName,setEditForm={},mcq={},setShowForm={}}){


   const {createMcq} = useCreateMcqs(examName);

   const {id} = mcq;

   const isEditSession = Boolean(id);



    const onCancel=()=>{
    setShowForm((show)=> !show)
        
        
    }

            return (
                <Formik

                    initialValues={isEditSession ? {question:mcq.question,option1:mcq.options[0].optionTitle,option2: mcq.options[1].optionTitle,option3:mcq.options[2].optionTitle,option4:mcq.options[3].optionTitle,answer: mcq.answer,points:mcq.points} : {question:'',option1:'',option2: '',option3:'',option4:'',answer: '',points:''}}
                    validationSchema={Yup.object({
                        question: Yup.string().required('Required'),
                        option1: Yup.string().required('Required'),
                        option2: Yup.string().required('Required'),
                        option3: Yup.string().required('Required'),
                        option4: Yup.string().required('Required'),
                        answer: Yup.string().required('Required'),
                        points: Yup.string().required('Required')

                    })} 
                    onSubmit={(values,actions)=>{
                        
                        const optionValue = [values.option1,values.option2,values.option3,values.option4]
                        const options = Array(4).fill();
                        for(let i=0;i<4;i++){
                            options[i] = {
                                optionTitle : optionValue[i]
                            }
                            
                        }
                        const {question,answer,points} = values;
                        isEditSession ? updateMcqAPi({id,question,options,answer,points}):createMcq({examName,question,options,answer,points});
                        
                        
                        actions.resetForm({
                            values: {
                                question:'',
                                option1:'',
                                option2:'',
                                option3:'',
                                option4:'',
                                answer:'',
                                points:'',
                                
                            }
                        });
                        setShowForm((show)=> !show);
                        
                    }}
                >
                    <Form className="bg-white flex flex-col gap-6 p-8">
                        <div className="grid grid-cols-[0.5fr_1fr] items-center">

                        <label htmlFor="question" className="text-md font-medium">Question</label>
                        <div>
                        <Field name="question" type="text" className="w-full focus:outline-none  border-2 border-slate-400" />
                        <ErrorMessage name="question" />
                        </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr] items-center">

                        <label htmlFor="option1" className="text-md font-medium">Option 1</label>
                        <div>
                        <Field name="option1" type="text" className="w-full focus:outline-none  border-2 border-slate-400" />
                        <ErrorMessage name="option1" />
                        </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr] items-center justify-center">
                        <label htmlFor="option2" className="text-md font-medium">Option 2</label>
                        <div>

                        <Field name="option2" type="text"  className="w-full focus:outline-none border-2 border-slate-400"   />
                        <ErrorMessage name="option2" />
                        </div>
                        </div>
                        <div className="grid grid-cols-[0.5fr_1fr] items-center justify-center">
                        <label htmlFor="option3" className="text-md font-medium">Option 3</label>
                        <div>

                        <Field name="option3" type="text"  className="w-full focus:outline-none border-2 border-slate-400"   />
                        <ErrorMessage name="option3" />
                        </div>
                        </div>
                        <div className="grid grid-cols-[0.5fr_1fr] items-center justify-center">
                        <label htmlFor="option4" className="text-md font-medium">Option 4</label>
                        <div>

                        <Field name="option4" type="text"  className="w-full focus:outline-none border-2 border-slate-400"   />
                        <ErrorMessage name="option4" />
                        </div>
                        </div>
                        <div className="grid grid-cols-[0.5fr_1fr] items-center justify-center">
                        <label htmlFor="answer" className="text-md font-medium">Correct Options</label>
                        <div>

                        <Field name="answer" type="text"  className="w-full focus:outline-none border-2 border-slate-400"   />
                        <ErrorMessage name="answer" />
                        </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr] items-center justify-center">
                        <label htmlFor="points" className="text-md font-medium">Points</label>
                        <div>

                        <Field name="points" type="text"  className="w-full focus:outline-none border-2 border-slate-400"   />
                        <ErrorMessage name="points" />
                        </div>
                        </div>
                        <div className="flex gap-6 self-end">

                        <Button type="reset" onClick={onCancel}>Cancel</Button>
                        <Button type="submit">{isEditSession ? 'Update Mcq' : 'Create Mcq'}</Button>

                        </div>
                    </Form>
                </Formik>
                 )

}

export default CreateMcqsForm;