import { useState } from "react";


export function useTaskSelection() {
 const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedBoardId, setSelectedBoardId] = useState<string | null>(null);
  return {selectedBoardId, selectedId, setSelectedId, setSelectedBoardId}
}