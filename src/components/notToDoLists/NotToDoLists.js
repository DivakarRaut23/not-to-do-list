import React from 'react'
import {Table, Button} from 'react-bootstrap';

export  const NotToDoLists = ({notToDoList, markAsToDo,handleOnDeleteLeisure,noIndex,setNoIndex}) => {

  const ifChecked = e => {
    const {checked, value} = e.target;
    console.log(checked, value)
    if(checked){
      return setNoIndex([...noIndex, +value])
      
    } 
      const removeIndex = noIndex.filter((item) => item !== value);
      setNoIndex(removeIndex)
      console.log("index after popping>>", noIndex)
   
  }


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
    <td><input onChange={ifChecked}  defaultValue=
                {index} type="checkbox" />
                {""}
    <label>{nt.title}</label></td>
    <td>{nt.hr}</td>
    <td>
      <Button onClick={() => markAsToDo(index)}> Add to Task </Button>
      </td>
    </tr>
)

})
}
<tr>
    <td> <Button variant="danger" onClick={() => handleOnDeleteLeisure(noIndex)}> Delete </Button></td>
</tr>
  </tbody>
</Table>
</>
    )
}
