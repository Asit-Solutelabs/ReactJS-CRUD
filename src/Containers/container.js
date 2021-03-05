import React ,{Component} from 'react';
import Form from '../Components/form/form';
import Table from '../Components/table/table';
import './container.css';

class Container extends Component{
    state={
        formData:[],
        dataToEdit: null
    }

    addDataHandler = (data) =>{
        const temp = [...this.state.formData]
        temp.push({...data,id:Math.random()*2759})
        this.setState({formData:temp,dataToEdit:null})
    }

    deleteRowHandler = (id) =>{
        let temp = [...this.state.formData]
        temp = temp.filter((item)=>item.id!==id)
        this.setState({formData:temp})
    }

    editDataHandler = (index,id) =>{
        this.setState({dataToEdit:this.state.formData[index]})
        this.deleteRowHandler(id)
    }

    render(){
        return(
            <div className="Div">
                <Form formDataAdd={(data)=>this.addDataHandler(data)}
                toEdit={this.state.dataToEdit}/>
                <Table enteredData={this.state.formData}
                onDelete={(id)=>this.deleteRowHandler(id)}
                onEdit={(index,id)=>this.editDataHandler(index,id)}/>
            </div>
        )
    }
}

export default Container;