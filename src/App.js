import {useState} from 'react';
import { Container, Row, Col }from 'react-bootstrap';
import './App.css';
import {AddForm} from './components/form/Addform';
import {TaskLists} from './components/taskList/TaskLists';
import {NotToDoLists} from './components/notToDoLists/NotToDoLists';
import {TotalHr} from './components/totalHour/TotalHr';



const  App = () => {

const [taskList, setTaskList] = useState([]);
const [notToDoList, setNotToDoList] = useState([])

const handleOnAddTask = formData => {
  
  setTaskList([...taskList, formData]);
}

const handleOnRemoveTask = index => {

  const item = taskList.splice(index, 1);

  setNotToDoList([...notToDoList, item[0]]);

  console.log(notToDoList)
}

const markAsToDo = index => {

  const item = notToDoList.splice(index, 1);

  setTaskList([...taskList, item[0]]);
}

const calcTotalHours = list => {
  let total = 0 ;
  for (let i= 0; i < list.length ; i++){
    total = Number(list[i].hr) + total ;
    
  } 
  return total ;
}

const hourSaved =  calcTotalHours(notToDoList);

  return (
    <div className="App">
      <Container>
  <Row>
    <Col>
    <div className="text-center mt-5" > <h1> NOT TO DO LIST </h1></div>
    </Col>
  </Row>
  <hr />
  <AddForm handleOnAddTask={handleOnAddTask}/>
  <hr/>
  <Row>
    <Col>
    <TaskLists 
    taskLists={taskList}
    handleOnRemoveTask={handleOnRemoveTask}
    />
    </Col>
    <Col>
    <NotToDoLists 
    notToDoList={notToDoList}
    markAsToDo={markAsToDo}
    />
    </Col>
  </Row>
  <Row>
    <Col>
    </Col>
    <Col>
     <TotalHr hourSaved={hourSaved}/>
    </Col>
  </Row>
</Container>



      
    </div>
  );
}

export default App;
