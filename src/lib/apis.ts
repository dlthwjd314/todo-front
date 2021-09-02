import axios from "axios";
import { Todo, ChangeTodo } from "../typs";

const apiBaseUrl = "http://localhost:3000/todo";

export const getAll = async () => {
  return await axios(apiBaseUrl);
};

export const create = async (todo: Todo) => {
  const options = {
    method: "POST",
    data: { ...todo },
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(apiBaseUrl, Object(options));
};

export const update = async (changeTodo: ChangeTodo) => {
  const options = {
    method: "PUT",
    data: { ...changeTodo },
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await axios(`${apiBaseUrl}/${changeTodo.id}`, Object(options));
};

export const remove = async (id: number) => {
  return await axios(`${apiBaseUrl}/${id}`, {
    method: "DELETE",
  });
};
