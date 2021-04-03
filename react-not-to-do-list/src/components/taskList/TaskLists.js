import React from 'react'
import {useSelector, useDispatch}from 'react-redux'
import {Table, Button} from 'react-bootstrap'
import {taskSwitch} from './taskAction.js'
import {setItemToDelete} from './taskSlice'



export const TaskLists = () => {

    const dispatch = useDispatch()


  const {taskList, itemToDelete} = useSelector(state =>  state.task)
 

  // const ifChecked = e => {
  //   const {checked, value} = e.target;
  //   console.log(checked, value)
  //   if(checked){
  //     return setIndex([...index, value])
      
  //   } 
  //     const removeIndex = index.filter((item) => item !== value);
  //     setIndex(removeIndex)
  //     console.log("index after popping>>", index)
   
  // }
         
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
            
                {taskList?.map((t) => {

                    return (
                        <tr key={t._id}>
                        <td>
                        <input
                        onChange={(e) => dispatch(setItemToDelete(e.target))}  
                        defaultValue={t._id}
                        type="checkbox"
                        checked={itemToDelete.includes(t._id)}
                        />
                        {""}
                        <label>{t.title}</label></td>
                        <td>{t.hr}</td>
                        <td>
                          <Button 
                          onClick={() => dispatch(taskSwitch({
                            _id: t._id,
                            todo:false,
                          }))}> Mark As Not To </Button>
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
