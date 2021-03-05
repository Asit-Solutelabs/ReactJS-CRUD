import React from 'react';
import './input.css'

const Input = (props) =>{
    return(
        <div className='containerdiv'>
            
            <form  onSubmit={props.submit} className="Form">
                <h1 className="formh1">Form</h1>

                <label className='Label' htmlFor="firstName" id="fn">FirstName</label>
                <div className='Inputs'>
                    <input className={props.error.firstName&&props.touched.firstName?"Input validationerror":"Input"} type='text' id='firstName' name='firstName' placeholder="First Name"
                    value={props.val.firstName}
                    onChange={props.changed}
                    onBlur={props.blur}></input>
                    {props.error.firstName&&props.touched.firstName ? <p>{props.error.firstName}</p> : null}
                </div>
                
                <label className='Label' htmlFor="lastName">LastName</label> 
                <div className='Inputs'>
                    <input className={props.error.lastName&&props.touched.lastName?"Input validationerror":"Input"} type='text' id='lastName' name='lastName' placeholder="Last Name"
                    value={props.val.lastName}
                    onChange={props.changed}
                    onBlur={props.blur}></input>
                    {props.error.lastName&&props.touched.lastName ? <p>{props.error.lastName}</p> : null}
                </div>

                <label className='Label' htmlFor="dateofbirth">DateOfBirth</label>
                <div className='Inputs'>
                    <input className={props.error.dateofbirth&&props.touched.dateofbirth?"Input validationerror":"Input"} type='date' id='dateofbirth' name='dateofbirth'
                    value={props.val.dateofbirth}
                    onChange={props.changed}
                    onBlur={props.blur}></input>
                    {props.error.dateofbirth&&props.touched.dateofbirth ? <p>{props.error.dateofbirth}</p> : null}
                </div>

                <label className='Label' htmlFor="placeofbirth">PlaceOfBirth</label>
                <div className='Inputs'>
                    <input className={props.error.placeofbirth&&props.touched.placeofbirth?"Input validationerror":"Input"} type='text' id='placeofbirth' name='placeofbirth' placeholder="PlaceOfBirth"
                    value={props.val.placeofbirth}
                    onChange={props.changed}
                    onBlur={props.blur}></input>
                    {props.error.placeofbirth&&props.touched.placeofbirth ? <p>{props.error.placeofbirth}</p> : null}
                </div>

                <label className='Label'>Address</label>
                <div className="address">
                    <label  htmlFor='line1'>Line 1</label>
                    <input className={props.error.Line1&&props.touched.Line1?"addressinput validationerror":"addressinput"} type='text' id='Line1' name='Line1' placeholder="Address Line 1"
                    value={props.val.Line1}
                    onChange={props.changed}
                    onBlur={props.blur}></input><br/>
                    <label  htmlFor='line2'>Line 2</label>
                    <input className={props.error.Line2&&props.touched.Line2?"addressinput validationerror":"addressinput"} type='text' id='Line2' name='Line2' placeholder="Address Line 2"
                    value={props.val.Line2}
                    onChange={props.changed}
                    onBlur={props.blur}></input>
                </div>
                {(props.error.Line2&&props.touched.Line2)||(props.error.Line1&&props.touched.Line1) ? <p className="addressp">{props.error.Line1}</p> : null}
            
                <label className='Label' htmlFor="phonenumber">Phone Number</label>
                <div className='Inputs'>
                    <input className={props.error.phonenumber&&props.touched.phonenumber?"Input validationerror":"Input"} type='number' id ='phonenumber' name='phonenumber' placeholder="Phone Number"
                    value={props.val.phonenumber}
                    onChange={props.changed}
                    onBlur={props.blur}></input>
                    {props.error.phonenumber&&props.touched.phonenumber?<p>{props.error.phonenumber}</p>:null}
                </div>
                
                <button className="submitbutton" style={{display:"block"}} type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Input;