import api from "./api";

export const addBlock =
  async (
    noteId,
    block
  ) => {
    const response =
      await api.post(
        `/blocks/${noteId}`,
        block
      );

    return response.data;
  };

export const updateBlock =
  async (
    noteId,
    blockId,
    block
  ) => {
    const response =
      await api.put(
        `/blocks/${noteId}/${blockId}`,
        block
      );

    return response.data;
  };

export const deleteBlock =
  async (
    noteId,
    blockId
  ) => {
    const response =
      await api.delete(
        `/blocks/${noteId}/${blockId}`
      );

    return response.data;
  };