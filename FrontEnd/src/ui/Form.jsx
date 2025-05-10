import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateCourse } from './useCreateCourse';

import Button from '../../ui/Button';
import { useEditCourse } from './useEditCourse';


function Form({current={},setShowCreateForm,setEditForm}){
    const {createCourses} = useCreateCourse();

    const {editCourse} = useEditCourse();

    const {courseId,...editValues} =  currentCourse;

    const isEditSession = Boolean(courseId);

    const onCancel=()=>{
        isEditSession ? setEditForm((show)=> !show) : setShowCreateForm((show)=>!show);
        
        
        
    }

            return (
                <Formik

                    initialValues={isEditSession ? editValues : {courseName:'',courseDescription:'',courseCode: ''}}
                    validationSchema={Yup.object({
                        courseName: Yup.string().required('Required'),
                        courseDescription: Yup.string().required('Required'),
                        courseCode: Yup.string().required('Required')

                    })} 
                    onSubmit={(values,actions)=>{
                        isEditSession ? editCourse({courseId,...values}):createCourses({...values});
                        actions.resetForm({
                            values: {
                                courseName:'',
                                courseDescription:'',
                                courseCode:''
                                
                            }
                        });
                        
                    }}
                >
                    <Form className="bg-white flex flex-col gap-6 p-8">
                        <div className="grid grid-cols-[0.5fr_1fr] items-center">

                        <label htmlFor="courseName" className="text-md font-medium">Course name</label>
                        <div>
                        <Field name="courseName" type="text" className="focus:outline-none  border-2 border-slate-400" />
                        <ErrorMessage name="courseName" />
                        </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr] items-center">

                        <label htmlFor="courseCode" className="text-md font-medium">Course code</label>
                        <div>
                        <Field name="courseCode" type="text" className="focus:outline-none  border-2 border-slate-400" />
                        <ErrorMessage name="courseCode" />
                        </div>
                        </div>

                        <div className="grid grid-cols-[0.5fr_1fr] items-center justify-center">
                        <label htmlFor="courseDescription" className="text-md font-medium">Course description</label>
                        <div>

                        <Field name="courseDescription" as="textarea"  className="focus:outline-none border-2 border-slate-400"   />
                        <ErrorMessage name="courseDescription" />
                        </div>
                        </div>
                        <div className="flex gap-6 self-end">

                        <Button type="reset" onClick={onCancel}>Cancel</Button>
                        <Button type="submit">{isEditSession ? 'Update course' : 'Add course'}</Button>

                        </div>
                    </Form>
                </Formik>
                 )


}

export default Form;