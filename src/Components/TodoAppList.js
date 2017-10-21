import React from 'react';
import TodoItems from './TodoItems';
 import TodoForm from './TodoForm';
import './main.css';
export default class TodoAppList extends React.Component{
    constructor(){
        super();
        this.updateTask = this.updateTask.bind(this); 
        this.addText = this.addText.bind(this);        
        this.remove =  this.remove.bind(this);        
        this.edit =  this.edit.bind(this);        
        
        
        
        
        this.state = {
            Tasks: [
                {
            
                    name: 'Todo App',
                    compelted: false
                }
            ],
            CurrentTask: ''
        }
    }
    addText(s){
        s.preventDefault();
        let Tasks = this.state.Tasks;
          let CurrentTask =this.state.CurrentTask;
           Tasks.push(
              {
                name: CurrentTask,
                compelted: false
              }
           )
           this.setState(
               {
                   Tasks,
                CurrentTask: '' 
                }
           )
        }
        edit(index, newValue){
            console.log(index, newValue );
            var tasks = this.state.Tasks;
            var task = tasks[index];
            task['name'] = newValue;
            this.setState(
                tasks
            )
        }
    updateTask(newValue){
          this.setState({
              CurrentTask: newValue.target.value
          })
        }
    remove(index){
        let Tasks = this.state.Tasks;
            Tasks.splice(index,1)
        this.setState(
            {
                Tasks
            }
        )
    }


    render(){
        return(
                <div className="container grp">

                    <h1>ToDo App <small>List</small>!</h1>
                <TodoForm updateTask={this.updateTask}  addText={this.addText} CurrentTask={this.state.CurrentTask} />
                <ul className="list-group">
                   {this.state.Tasks.map( (tasks,index) =>{
                        return <TodoItems
                                     key={index } 
                                     taskItem={tasks} 
                                     index={index} 
                                     remove={this.remove}
                                     edit={this.edit}
                                     />

                   })}
               </ul>
               </div>
        )
    }
}