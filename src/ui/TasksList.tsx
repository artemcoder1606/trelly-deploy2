import { useTasks } from "../bll/useTasks";
import { TaskItem } from "./TasksItem";

type Props = {
  selectedId: string | null;
  onTaskSelect: (taskId: null | string, boardId: null | string) => void;
};



export const TasksList = ({ selectedId, onTaskSelect }: Props) => {
  const {tasks} = useTasks()
  if (tasks === null) {
    return (
      <div>
        <h2>Tasks</h2>
        <div>loading...</div>
      </div>
    );
  }
  const clearTasks = () => {
    onTaskSelect(null, null);
  };
  const handleTask = (taskId: string, boardId: string): void => {
    onTaskSelect(taskId, boardId);
  };
  return (
    <div>
      <button
        onClick={clearTasks}
        style={{ marginLeft: "40px", marginTop: "20px", cursor: "pointer" }}
        type="button"
      >
        Reset
      </button>
      <ul
        style={{ listStyle: "none", display: "grid", gap: "15px", padding: 0 }}
      >
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              onSelect={handleTask}
              isSelected={selectedId === task.id}
              task={task}
            />
          );
        })}
      </ul>
    </div>
  );
};
