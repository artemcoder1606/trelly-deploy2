type BoardOutputDTO = {
  description: string;
};

export type BoardSingleData = {
  id: string;
  attributes: BoardOutputDTO;
};

export type GetTaskOutput = {
  data: BoardSingleData;
};

export type GlobalTaskListItemDto = {
  boardId: string;
  status: number;
  title: string;
  addedAt: string;
};

export type GlobalTaskListItemJsonApiData = {
  id: string;
  attributes: GlobalTaskListItemDto;
};

export type 	GlobalTaskListResponse = {
	data: Array<GlobalTaskListItemJsonApiData>
}


export const getTask = (
  selectedBoardId: string | null,
  selectedId: string | null,
) => {
  const promise: Promise<GetTaskOutput> = fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/" +
      selectedBoardId +
      "/tasks/" +
      selectedId,
    {
      headers: {
        // "api-key": "34099ad0-a995-4ef2-b060-536cc9ecbd48",
      },
    },
  ).then((res) => res.json());
  return promise;
};

export const getTasks = () => {
  const promise: Promise<GlobalTaskListResponse> = fetch(
    "https://trelly.it-incubator.app/api/1.0/boards/tasks",
    {
      headers: {
        // "api-key": "34099ad0-a995-4ef2-b060-536cc9ecbd48",
      },
    },
  ).then((res) => res.json());
  return promise;
};
