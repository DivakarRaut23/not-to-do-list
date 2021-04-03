import express from "express";
const router = express.Router();

import {deleteTasks, insertTask, getTasks,updateTodo} from './models/task_lists/TaskLists.model.js'

router.get("*", (req, res, next) => {
	console.log("user is verifid");
	next();
});

router.get("/", async  (req, res) => {
	
	const result = await getTasks()
	console.log("Get method bata aayeko>>>", result)
	res.json({
		status : "success",
		message : "All the database is listed as follows",
		result
	});
});


router.get("/new", (req, res) => {
	res.send("Now you have reached the new");
});

router.post("/", async (req, res) => {
	console.log(req.body);
	const result = await insertTask(req.body)
	if (result._id) {
		return res.json({
			status: "success",
			message : "Your new task is added",
			result,

		})
	}
	res.json({
		status : "error",
		message : "Unable to add your new task, Please try again"
	});
});
router.patch("/", async (req, res) => {
	
	try {
		const {todo} = req.body
		const result = await updateTodo(todo)

		if (result?._id){
			return res.json ({
				status : "success",
				message: "Selected Item has been updated",
			})
		}
		res.json({
			status: 'error',
			message: 'Unable to update the tasks list'
		})
		
	} catch (error) {
		res.json({
			status:'error',
			message:error.message,
		})
		
	}

});
router.put("/", (req, res) => {
	console.log(req.body);
	res.send("Now you have reached the put");
});
router.delete("/", async (req, res) => {
	try {

	const ids = req.body
		const result = await deleteTasks(ids)

		if(result?.deletedCount) {
			return res.json({
				status: "success",
				message :"Selected Item has been deleted"
			})
		}
		res.json({
			status: "error",
			message : "Delete has not been actioned"
		})
		
	} catch (error) {
		res.json({
			status: "error",
			message : "Delete has not been actioned"
		})
		
	}
});

export default router;
