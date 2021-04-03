import React from 'react'
import {Alert} from 'react-bootstrap';
import {setItemToDelete} from '../taskList/taskSlice'
import {useSelector, useDispatch} from 'react-redux'
import {taskSwitch} from '../taskList/taskAction'
import {Table, Button} from 'react-bootstrap';

export  const NotToDoLists = () => {

  const dispatch = useDispatch()

  const {notToDoList} = useSelector(state => state.task)

  const totalSavedTime = notToDoList.reduce((subTtl, row) => subTtl + row.hr,0)

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
    <tr key={nt._id}>
    <td><input 
    onChange={(e) => dispatch(setItemToDelete(e.target))}
    defaultValue=
                {nt._id} type="checkbox" />
                {""}
    <label>{nt.title}</label></td>
    <td>{nt.hr}</td>
    <td>
      <Button 
      onClick={() => dispatch(taskSwitch({
                            _id: nt._id,
                            todo: true,
                          }))}> Add to Task </Button>
      </td>
    </tr>
)

})
}
<tr>
  <td colSpan="3">
  <Alert show={totalSavedTime>0}variant="success">Total Hours Saved : {totalSavedTime}</Alert>
  </td>
</tr>
  </tbody>
</Table>
</>
    )
}
