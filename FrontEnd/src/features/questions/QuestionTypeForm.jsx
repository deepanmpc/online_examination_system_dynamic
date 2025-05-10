import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';


function QuestionTypeForm({examName}){

        const navigate = useNavigate();


            return (
                <Formik

                    initialValues={{questionType:""}}
                    validationSchema={Yup.object({
                        questionType: Yup.string().required('Required'),
                        
                        

                    })} 
                    onSubmit={(values)=>{
                        const {questionType} = values;
                        navigate(`/questions/${examName}/${questionType}`)
                       
                        
                    }}
                >
                    <Form className="bg-white flex flex-col gap-6 p-8">
                       
                        <div>
                        <Field name="questionType" as='select' className="w-2/4 p-2 focus:outline-none  border-2 border-slate-400">
                            <option value=""  disabled hidden>Choose here</option>
                            <option value='mcq'>Mcq</option>
                            <option value='descriptive'>Descriptive</option>
                        </Field>
                        <ErrorMessage name="questionType" />
                        </div>
                        

                     

                       
                        <div className="flex gap-6 self-end">

                     
                        <Button type="submit">Create question</Button>

                        </div>
                    </Form>
                </Formik>
                 )

}

export default QuestionTypeForm;