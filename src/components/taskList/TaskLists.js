import React from 'react'
import {Table, Button} from 'react-bootstrap'

export const TaskLists = ({taskLists,handleOnRemoveTask}) => {

  console.log(taskLists)

    
    return (
        <>
        <h2>Task list</h2>
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Task</th>
      <th>Hours</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
        {taskLists?.map((t,index) => {

            return (
                <tr key={index}>
                <td>{t.title}</td>
                <td>{t.hr}</td>
                <td><Button onClick={() => handleOnRemoveTask(index)}> Remove Task </Button></td>
                </tr>
            )

            })
        }
      
   
  </tbody>
</Table>
</>
    )
}
