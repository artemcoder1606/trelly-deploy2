import { useEffect, useState } from "react";
import { getTasks, type GlobalTaskListItemJsonApiData } from "../dal/api";


export function useTasks() {
 const [tasks, setTasks] =
	 useState<Array<GlobalTaskListItemJsonApiData> | null>(null);
  useEffect(() => {
	 getTasks().then((data) => setTasks(data.data));
  }, []);
  return {tasks, setTasks}
}