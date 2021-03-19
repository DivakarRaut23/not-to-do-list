import React from 'react'
import {Table, Button} from 'react-bootstrap';

export  const NotToDoLists = ({notToDoList, markAsToDo,handleOnDeleteNotToList}) => {
    return (
        <>
        <h2>Not to do Task</h2>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {notToDoList?.map((nt,index) => {

return (
    <tr key={index}>
    <td>{nt.title}</td>
    <td>{nt.hr}</td>
    <td>
      <Button onClick={() => markAsToDo(index)}> Add to Task </Button>
      <Button variant="danger" style={{marginLeft:'5px'}}onClick={() => handleOnDeleteNotToList(index)}> Delete </Button>
      </td>
    </tr>
)

})
}
  </tbody>
</Table>
</>
    )
}
