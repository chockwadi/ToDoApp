import React from 'react';
import ReactDOM from 'react-dom';
import TodoAppList from './Components/TodoAppList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
class App extends React.Component{
    render(){
        return(
            <TodoAppList/>
        )
    }
} 

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
