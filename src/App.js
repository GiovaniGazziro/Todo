import React, { Component } from 'react';
import OutlinedTextFields from './TextField';
import ButtonTools from './Button';
import ButtonAdd from './ButtonAdd';

let id_increment=0;

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {

  // state = {taskList: [{ task: 'treinamento', id: 1 }, { task: 'reunião', id: 2 }]}
  state = {taskList: []}

  populateList = () => {
    const  { taskList } = this.state
    this.setState({
      taskList: [
        ...taskList,
        {task: '', id: id_increment}
      ],
    });
  id_increment=id_increment+1;

  }

  removeList = (taskId) => {
    const  { taskList } = this.state
    let targetIndex = taskList.findIndex(element => taskId === element.id);
    this.setState({
      taskList: [
        ...taskList.slice(0,targetIndex),
        ...taskList.slice(targetIndex+1, taskList.length)
      ]
    })
  };

  updateList = (task, taskId) => {
    const  { taskList } = this.state
    let targetIndex = taskList.findIndex(element => taskId === element.id);
    this.setState({
      taskList: [
        ...taskList.slice(0,targetIndex),
        {id:taskId, task},
        ...taskList.slice(targetIndex+1, taskList.length)
      ]
    })
  };

  render() {
    return (
      <div>
        <h1>Task Manager</h1>
        <ButtonAdd addTask={this.populateList}/>

        { this.state.taskList.map(elem => (
          <div className="task" key={elem.id}>
              <OutlinedTextFields task={elem.task} taskId={elem.id} onChange={this.updateList} />
              <ButtonTools taskId={elem.id} onClick={this.removeList}/>

          </div>
        )) }
      </div>
    );
  }
}

export default App;
