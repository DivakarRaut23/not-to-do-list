import React, {useState} from 'react'
import {Table, Button} from 'react-bootstrap'



export const TaskLists = ({taskLists,handleOnRemoveTask,handleOnDeleteTask,index,setIndex}) => {

  const ifChecked = e => {
    const {checked, value} = e.target;
    console.log(checked, value)
    if(checked){
      return setIndex([...index, +value])
      
    } 
      const removeIndex = index.filter((item) => item !== value);
      setIndex(removeIndex)
      console.log("index after popping>>", index)
   
  }

    
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
                {/* <td><input onChange={()=> ifChecked(index) }type="checkbox" /></td> */}
                <td><input onChange={ifChecked}  defaultValue=
                {index} type="checkbox" />
                {""}
                <label>{t.title}</label></td>
                <td>{t.hr}</td>
                <td>
                  <Button onClick={() => handleOnRemoveTask(index)}> Mark As Not To </Button>
                  </td>
                </tr>
            )

            })
        }
        <tr>
          <td> <Button variant="danger" onClick={() => handleOnDeleteTask(index)}> Delete </Button></td>
        </tr>
      
   
  </tbody>
</Table>
</>
    )
}
