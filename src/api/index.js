import axiosIntance from "./axiosInstance";

export const getCategories = async () => await axiosIntance("/categories");

export const createCategories = async (name) =>
  await axiosIntance.post("/categories/create", name, {
    withCredentials: true,
  });
