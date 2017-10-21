import React from 'react';

export default class TodoForm extends React.Component{
    render(){
        return(
         <form onSubmit={this.props.addText} className="btn-submit">
             <input type="text" value={this.props.CurrentTask} className="form-control" onChange= {this.props.updateTask}/>
             <button type="submit" className="btn btn-primary btn-block" >Submit</button>
        </form>
        )
    }
}