import { useEffect, useState } from "react";
import { getTask, type BoardSingleData } from "../dal/api";


export function useTaskDetails(selectedBoardId:string|null, selectedId:string|null) {
  const [selectedTask, setSelectedTask] = useState<BoardSingleData | null>(
    null,
  );

  useEffect(() => {
    if (!selectedId) {
      setSelectedTask(null);
      return;
    }
    getTask(selectedBoardId, selectedId).then((data) =>
      setSelectedTask(data.data),
    );
  }, [selectedBoardId, selectedId]);
  return {selectedTask, setSelectedTask}
}