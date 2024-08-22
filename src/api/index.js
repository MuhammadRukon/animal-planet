import axios from "axios";
import axiosIntance from "./axiosInstance";

// export const getCategories = async () => await axiosIntance("/categories");
export const getCategories = async () => await axios("https://antopolic-task-server.vercel.app/categories", {
  withCredentials: true,
});

// export const createCategories = async (name) =>
//   await axiosIntance.post("/categories/create", name);
export const createCategories = async (name) =>
  await axios.post("https://antopolic-task-server.vercel.app/categories/create", name, {
    withCredentials: true,
  });

// export const createAnimal = async (data) =>
//   await axiosIntance.post("/animals/create", data);
export const createAnimal = async (data) =>
  await axios.post("https://antopolic-task-server.vercel.app/animals/create", data, {
    withCredentials: true,
  });

// export const getAnimals = async () => await axiosIntance("/animals");

export const getAnimals = async () => await axios("https://antopolic-task-server.vercel.app/animals", {
  withCredentials: true,
});