import React from 'react';
import './main.css';
export default class TodoItems extends React.Component{

    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderList = this.renderList.bind(this);
        this.updateItem = this.updateItem.bind(this);
        
        
        this.state ={
            isEditing: false
        } 
    }
    updateItem(e){
        e.preventDefault();
        this.props.edit(this.props.index,this.input.value)

        this.toggle();

    }
    toggle(){
       
        this.setState({
            
            isEditing: !this.state.isEditing
        })
    }
    renderForm(){
        return(
            <div className="btn-submit ">
        <form onSubmit={this.updateItem}>
            <input type="text" class="form-control" ref={
                (value) => {
                     this.input = value;
                }
            }
                    defaultValue={this.props.taskItem.name }/>
            <button type="submit" className="btn btn-success btn-block      "  >update</button>
        </form>
        </div>
        )
    }
    renderList(){
        return(
        <li className="list-group-item">
            <table>
                <tr>
                    <td>
                             {this.props.taskItem.name} 

                    </td>
                
                    <td>
                        <span  className="btn-group">
                                <button className="btn btn-danger btn-sm  glyphicon glyphicon-remove" onClick={(e) =>{
                                        e.stopPropagation();
                                    this.props.remove(this.props.index)
                            } }> Delete</button>
                             <button onClick={this.toggle} className="btn btn-info btn-sm  glyphicon glyphicon-pencil "> Edit</button>
                        </span>
                    </td>

                </tr>    
            </table>
                            
            

        </li> 
        
        )
    }
    render(){
        const isEditing = this.state.isEditing;
            return(
                <section>
                    {isEditing ? this.renderForm() : this.renderList()}
                 </section>            
            )        
    }
}