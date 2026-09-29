import { useState } from "react";
import { type GlobalTaskListItemJsonApiData } from "../dal/api";
import styles from "./TaskItem.module.css"
import {clsx} from 'clsx'


type Props = {
  isSelected: boolean;
  onSelect: (taskId: string, boardId: string) => void;
  task: GlobalTaskListItemJsonApiData;
};

export const TaskItem = ({ isSelected, onSelect, task }: Props) => {
  const [, setIsChanged] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChanged(e.target.checked);
  };

  const handleClick = () => {
    onSelect?.(task.attributes.boardId, task.id);
  };

  const obj = {[styles.task_item]: true, [styles.selected]: isSelected}
  const className = clsx(obj);

  return (
    <li
      onClick={handleClick}
      className={className}
    >
      <input
        onChange={handleCheckboxChange}
        checked={task.attributes.status == 2 || isSelected ? true : false}
        type="checkbox"
      />
      {task.attributes.title}
      <span>
        Data: {new Date(task.attributes.addedAt).toLocaleDateString()}
      </span>
    </li>
  );
};
