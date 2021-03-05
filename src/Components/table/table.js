import React from 'react';
import './table.css';


const Table = (props) =>{

    const tableItem = 
        <div style={{overflowx:"auto"}}>
            
            <table className="table" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>DateOfBirth</th>
                    <th>Address</th>
                    <th>PlaceOfBirth</th>
                    <th>PhoneNumber</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
               
                {props.enteredData.map((data,index)=>{
                    return(
                        <tbody>
                            <tr>
                                <td>{data.firstName} {data.lastName}</td>
                                <td>{data.dateofbirth}</td>
                                <td>{data.Line1},{data.Line2}</td>
                                <td>{data.placeofbirth}</td>
                                <td>{data.phonenumber}</td>
                                <td><button className="tableedit" onClick={()=>props.onEdit(index,data.id)}>Edit</button></td>
                                <td><button className="tabledelete" onClick={()=>props.onDelete(data.id)}>Delete</button></td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    return(
        <div className="tableposition">   
            <h1 className="tableh1">Data</h1>
            {tableItem}
        </div>
    );
}

export default Table;