import {requestPending,addTaskSuccess,requestFail, fetchTaskSuccess,updateTaskSuccess,deleteTaskSuccess} from './taskSlice.js'
import {createTask,deleteTaskLists,getTaskLists, switchTask} from '../../api/taskApi.js'

export const addTask = formData => async dispatch => {
    try {
        dispatch(requestPending());
        const result = await createTask(formData);
        dispatch(addTaskSuccess(result))

        result.status === "success" && dispatch(fetchTaskLists())
        
    } catch (error) {
        dispatch(requestFail(error.message))
    }
}

export const fetchTaskLists = () => async dispatch => {
    try {
        dispatch(requestPending());
        const fetchTask = await getTaskLists() || [];
        dispatch(fetchTaskSuccess(fetchTask))
        
    } catch (error) {
        dispatch(requestFail(error.message))
        
    }
}

export const taskSwitch = toUpdate => async dispatch => {
    try {
        dispatch(requestPending());
        const result = await switchTask(toUpdate);
        dispatch(updateTaskSuccess(result));

        result.status === "success" && dispatch(fetchTaskLists())
        
    } catch (error) {
        dispatch(requestFail(error.message))
        
    }
}

export const deleteTasks = (ids)=> async dispatch => {
    try {
        if(window.confirm("Are you sure want to delete the selected items? ")
        )
    {
            dispatch(requestPending());
            const result = await deleteTaskLists(ids)
            dispatch(deleteTaskSuccess(result))
            result.status === "success" && dispatch(fetchTaskLists());

        }
             
    } catch (error) {
        dispatch(requestFail(error.message))
        
    }
}