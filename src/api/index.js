import axiosIntance from "./axiosInstance";

export const getCategories = async () => await axiosIntance("/categories");

export const createCategories = async (name) =>
  await axiosIntance.post("/categories/create", name, {
    withCredentials: true,
  });

export const createAnimal = async (data) =>
  await axiosIntance.post("/animals/create", data);

export const getAnimals = async () => await axiosIntance("/animals");