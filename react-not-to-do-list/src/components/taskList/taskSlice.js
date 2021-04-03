import {createSlice} from '@reduxjs/toolkit'

const initialState = {

    taskList : [],
    notToDoList :[],
    itemToDelete : [],
    totalHour : 0,
    isPending : false,
    status : "",
    message: ""
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers : {
        requestPending : state => {
            state.isPending = true
        },
        addTaskSuccess : (state, action) => {
            state.isPending = false
            state.status =  action.payload.status
            state.message = action.payload.message
        },
        updateTaskSuccess : (state, {payload}) => {
            state.isPending = false
            state.status =  payload.status
            state.message = payload.message
        },
        deleteTaskSuccess : (state, {payload}) => {
            state.isPending = false
            state.status =  payload.status
            state.message = payload.message
            if (payload.status === "success") state.itemToDelete = []
        },
        setItemToDelete : (state, {payload}) => {
            const {checked, value} = payload
            if (checked) {
                state.itemToDelete = [...state.itemToDelete, value]
            } else {
            const newList = state.itemToDelete.filter(item => item !== value);
            state.itemToDelete = newList
            }
        },
        
        fetchTaskSuccess : (state, {payload = []}) => {
            state.isPending = false
            state.totalHour = payload.reduce((subTtl, row) => subTtl + +row.hr, 0)
            state.taskList = payload.filter((noList) => noList.todo)
            state.notToDoList = payload.filter((noList) => !noList.todo)

        },
        requestFail : (state, {payload}) => {
            
            state.isPending = false;
            state.status = "error"
            state.message = payload

        }
    }
})

const {reducer, actions} = taskSlice

export const {requestPending,addTaskSuccess,requestFail,fetchTaskSuccess,updateTaskSuccess,setItemToDelete,deleteTaskSuccess} = actions;

export default reducer;