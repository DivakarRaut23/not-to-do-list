import {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { Container, Row, Col ,Button,Alert, Spinner}from 'react-bootstrap';
import './App.css';
import {AddForm} from './components/form/Addform';
import {TotalHr} from './components/totalHour/TotalHr'
import {TaskLists} from './components/taskList/TaskLists';
import {NotToDoLists} from './components/notToDoLists/NotToDoLists';


// from taskAction js 

import {fetchTaskLists,deleteTasks} from './components/taskList/taskAction'

const  App = () => {
  const dispatch =  useDispatch()

const {isPending,status, message, totalHour, itemToDelete} = useSelector(state => state.task)


useEffect(() => {

  dispatch(fetchTaskLists())
  
}, [dispatch])






  return (
          <div className="App">
                <Container>
            <Row>
              <Col>
              <div className="text-center mt-5" > <h1> NOT TO DO LIST </h1></div>
              </Col>
            </Row>
            <hr />
            <div>
              {message && 
              <Alert variant={status === 'success' ? "success" : "danger"}> {message}</Alert>
              }
              { isPending && 
              <Spinner animation="border"></Spinner>
            }
            </div>
            <AddForm />
            <hr/>
            <Row>
              <Col>
              <TaskLists />
              </Col>
              <Col>
              <NotToDoLists />
              </Col>
            </Row>
            <Row>
              <Col>
              <Button variant="danger" onClick={() => dispatch(deleteTasks(itemToDelete))}> Delete </Button>
              </Col>
            </Row>
            <Row>
              <Col>
              <TotalHr totalHour={totalHour}/>
              </Col>
              <Col>
              
              </Col>
            </Row>
          </Container>
          
          </div>
  );
}


export default App ;