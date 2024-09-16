import { ITask, IUser, TAST_STATUS } from "../models/models";

const mockUsers: IUser[] = [
	{
		user_email: "john.doe@gmail.com",
		user_name: "John Doe",
		user_id: 22345,
	},
];

const mockTasks: ITask[] = [
	{
		task_number: 445342,
		title: "To work on Analysis",
		assigned_to: "john.doe@gmail.com",
		created_time: new Date(),
		priority: 1,
		project_id: "foodx23411",
		status: TAST_STATUS.NEW,
		tags: ["analysis", "#UI"],
		time_to_complete: 1,
	},
];

export const mockProjectDetails = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({
			project_name: "Food Delivery App",
			project_id: "foodx23411",
			users: mockUsers,
			creation: Date.now(),
			tasks: mockTasks,
		});
	});
});
