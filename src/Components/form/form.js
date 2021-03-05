import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Input from '../input/input'


const Form = (props) =>{
    
    let initialValue = null
    
    if(props.toEdit!==null){
        initialValue={
            firstName: props.toEdit.firstName,
            lastName: props.toEdit.lastName,
            dateofbirth: props.toEdit.dateofbirth,
            Line1: props.toEdit.Line1,
            Line2: props.toEdit.Line2,
            placeofbirth: props.toEdit.placeofbirth,
            phonenumber: props.toEdit.phonenumber
        };
    }else{
        initialValue={
            firstName:'',
            lastName:'',
            dateofbirth: '',
            Line1: '',
            Line2:'',
            placeofbirth:'',
            phonenumber: ''
        }
    }
    
    const formik = useFormik({
        initialValues:initialValue,
        validationSchema: Yup.object({
            firstName: Yup.string()
            .min(2,'First Name is too short! Please enter at least 2 characters.')
            .required('First Name is required!'),
            lastName: Yup.string()
            .min(2,'Last Name is too short! Please enter at least 2 characters.')
            .required('Last Name is required!'),
            dateofbirth: Yup.date()
            .required('Date Of Birth is required')
            .test('age','Age should be above 18',(val)=>{ return new Date(Date.now()-new Date(val).getTime()).getFullYear()-1970>18}),
            Line1:  Yup.string()
            .min(5,'Address is too short! Please enter at least 5 characters.')
            .required('Address is required!'),
            Line2: Yup.string()
            .min(5,'Address is too short! Please enter at least 5 characters.')
            .required('Address is required!'),
            placeofbirth: Yup.string()
            .min(2,'Too short! Please enter at least 2 characters.')
            .required('required!'),
            phonenumber: Yup.number()
            .required('Phone Number is Required.')
            .test('len', 'Please Enter exactly 10 digits', (val) => { if(val) return val.toString().length === 10; })
            
        }),
        
        onSubmit: (values,{resetForm}) =>(
            props.formDataAdd(values),
            resetForm()
        ),
        enableReinitialize:true
    })

    return(
        <div>
            <Input val={formik.values}
            changed={formik.handleChange}
            blur={formik.handleBlur}
            error={formik.errors}
            touched = {formik.touched}
            submit={formik.handleSubmit}/>
        </div>
    )
}

export default Form;