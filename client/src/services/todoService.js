import api from "./api";

export const createTodo =
  async (title) => {
    const response =
      await api.post(
        "/todos",
        { title }
      );

    return response.data;
  };

export const getTodos =
  async (
    filter = "all"
  ) => {
    const response =
      await api.get(
        `/todos?filter=${filter}`
      );

    return response.data;
  };

export const updateTodo =
  async (
    id,
    data
  ) => {
    const response =
      await api.put(
        `/todos/${id}`,
        data
      );

    return response.data;
  };

export const deleteTodo =
  async (id) => {
    const response =
      await api.delete(
        `/todos/${id}`
      );

    return response.data;
  };