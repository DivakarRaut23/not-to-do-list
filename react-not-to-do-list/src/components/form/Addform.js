import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Form, Row, Col,Button} from 'react-bootstrap';
import {addTask} from '../taskList/taskAction.js'

const initialFormData = {
    title: "test",
    hr: 10, 
}


export  const AddForm = () => {

    const dispatch = useDispatch()

    const {totalHour} = useSelector(state => state.task)

const [task, setTask] = useState(initialFormData);

const handleOnChange = e => {
    const {name,value} = e.target 
    setTask({
       ...task, 
       [name] : name === "hr" ? +value : value,
    })
}

const handleOnSubmit = e => {
    e.preventDefault ();
    if (task.hr + totalHour > 168 ) {
       return alert("You are exhausting yourself, Your have exceeded more than 168 hrs ")
       } 
      dispatch(addTask(task))
    }
    
    return (
            <Form onSubmit={handleOnSubmit}>
            <Row>
                <Col>
                <Form.Control 
                onChange={handleOnChange}
                placeholder="Task Name" 
                value={task.title}
                name="title"
                />
                </Col>
                <Col>
                <Form.Control
                onChange={handleOnChange}
                placeholder="Number of hours"
                type="number" 
                value={task.hr}
                name="hr"
                />
                </Col>
                <Col>
                <Button type="submit" variant="primary"> Add</Button>
                </Col>
            </Row>
            </Form>
    )
}
