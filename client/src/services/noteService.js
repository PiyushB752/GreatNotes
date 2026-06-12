import api from "./api";

export const createNote = async (
  title
) => {
  const response =
    await api.post("/notes", {
      title,
    });

  return response.data;
};

export const getNotes = async (
  search = "",
  sort = "latest"
) => {
  const response =
    await api.get(
      `/notes?search=${search}&sort=${sort}`
    );

  return response.data;
};

export const getNote = async (
  id
) => {
  const response =
    await api.get(
      `/notes/${id}`
    );

  return response.data;
};

export const updateNote =
  async (id, title) => {
    const response =
      await api.put(
        `/notes/${id}`,
        { title }
      );

    return response.data;
  };

export const deleteNote =
  async (id) => {
    const response =
      await api.delete(
        `/notes/${id}`
      );

    return response.data;
  };