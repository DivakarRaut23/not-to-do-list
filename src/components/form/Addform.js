import React,{useState} from 'react'
import {Form, Row, Col,Button} from 'react-bootstrap';

const initialFormData = {
    title: "",
    hr: 0 
}


export  const AddForm = ({handleOnAddTask}) => {

const [task, setTask] = useState(initialFormData);

const handleOnChange = e => {
    const {name,value} = e.target 
    setTask({
       ...task, 
       [name] : value
    })
}

const handleOnSubmit = e => {
    e.preventDefault ();
    handleOnAddTask(task);

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
