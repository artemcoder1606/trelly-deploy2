import { PageTitle } from "./ui/PageTitle.tsx";
import { TasksList } from "./ui/TasksList.tsx";
import { TasksDetails } from "./ui/TasksDetails.tsx";
import { useTaskSelection } from "./bll/useTaskSelection.tsx";
import styles from "./MainPage.module.css"


export function MainPage() {
  const  {selectedId, selectedBoardId, setSelectedBoardId, setSelectedId }= useTaskSelection()

  const handleClick = (
    boardId: string | null,
    trackId: string | null,
  ): void => {
    setSelectedBoardId(boardId);
    setSelectedId(trackId);
  };

  return (
    
      <>
        <PageTitle />
        <div className={styles.page}>
          <TasksList selectedId={selectedId} onTaskSelect={handleClick} />
          <TasksDetails
            selectedId={selectedId}
            selectedBoardId={selectedBoardId}
          />
        </div>
      </>
  );
}

