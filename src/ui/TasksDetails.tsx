import { useTaskDetails } from "../bll/useTaskDetails";
import styles from "./TaskDetails.module.css"

type Props = {
  selectedId: string | null;
  selectedBoardId: string | null;
};

export const TasksDetails = ({ selectedId, selectedBoardId }: Props) => {
  const {selectedTask} = useTaskDetails(selectedBoardId, selectedId )

  return (
    <div className={styles.task_details}>
      <h2>Task detailed information</h2>

      {!selectedTask && !selectedId && "Task is not selected"}
      {!selectedTask && selectedId && "isLoading..."}
      {selectedTask &&
        selectedId &&
        selectedId !== selectedTask.id &&
        "isLoading..."}
      {selectedTask && selectedId && selectedId === selectedTask.id && (
        <p>{selectedTask.attributes.description || "No details"}</p>
      )}
    </div>
  );
};
