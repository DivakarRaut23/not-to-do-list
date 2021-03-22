import {useState} from 'react';
import { Container, Row, Col }from 'react-bootstrap';
import './App.css';
import {AddForm} from './components/form/Addform';
import {TaskLists} from './components/taskList/TaskLists';
import {NotToDoLists} from './components/notToDoLists/NotToDoLists';
import {TotalHr} from './components/totalHour/TotalHr';
import { HourSaved } from './components/hourSaved/HourSaved';



const  App = () => {

const [taskList, setTaskList] = useState([]);
const [notToDoList, setNotToDoList] = useState([])
const [index, setIndex] = useState([])
const [noIndex, setNoIndex] = useState([])

const handleOnAddTask = formData => {

  if ((Number(formData.hr) + totalHour) > 168 ) {

    alert("You are exhausting yourself, Your have exceeded more than 168 hrs ")

  } else {

    setTaskList([...taskList, formData]);

  }  
}

const handleOnRemoveTask = index => {

  const item = taskList[index];

  const newArray = taskList.filter((item, i) => i !== index);
  setTaskList(newArray)

  setNotToDoList([...notToDoList, item]);

  console.log(notToDoList)
}

const handleOnDeleteTask = (index) => {
  if(window.confirm("Are you sure want to delete the selected items? ")){
    const updatedArray = taskList.filter((item,i) => !index.includes(i));
    console.log("Updated array after delete>>", updatedArray)
    setTaskList(updatedArray)
    setIndex([]);
  } 
}

const handleOnDeleteLeisure = (index) => {
  if(window.confirm("Are you sure want to delete the selected items? ")){
    const updatedArray = notToDoList.filter((item,i) => !index.includes(i));
    console.log("Updated array after delete>>", updatedArray)
    setNotToDoList(updatedArray)
    setNoIndex([]);
  } 
}

const markAsToDo = index => {

  const item = notToDoList[index];
  const newArray = notToDoList.filter((item, i) => i !== index);

  setNotToDoList(newArray);

  setTaskList([...taskList, item]);
}

const calcTotalHours = list => {
  let total = 0 ;
  for (let i= 0; i < list.length ; i++){
    total = Number(list[i].hr) + total ;
    
  } 
  return total ;
}

const hourSaved =  calcTotalHours(notToDoList);
const hoursAllocated = calcTotalHours(taskList);
const totalHour = hourSaved + hoursAllocated ;





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
    handleOnDeleteTask={handleOnDeleteTask}
    index={index}
    setIndex={setIndex}
    />
    </Col>
    <Col>
    <NotToDoLists 
    notToDoList={notToDoList}
    markAsToDo={markAsToDo}
    handleOnDeleteLeisure={handleOnDeleteLeisure}
    noIndex={noIndex}
    setNoIndex={setNoIndex}
    />
    </Col>
  </Row>
  <Row>
    <Col>
    <TotalHr totalHour={totalHour}/>
    </Col>
    <Col>
     <HourSaved hourSaved={hourSaved}/>
    </Col>
  </Row>
</Container>



      
    </div>
  );
}

export default App;
