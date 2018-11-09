import { HttpClient } from "./httpClient";

const API = "http://localhost:3000/api";

const TODO_API = `${API}/todos`;

//Create
const createTodo = todo => {
  return HttpClient.post(TODO_API, todo);
};

//Read
const getTodo = () => {
  return HttpClient.get(TODO_API);
};

//Update
const updateTodo = todo => {
  return HttpClient.put(TODO_API, todo);
};

//Delete
const removeTodo = todo => {
  return HttpClient.delete(`${TODO_API}/${todo._id}`);
};

const TodoApi = { createTodo, getTodo, updateTodo, removeTodo };

export { TodoApi };
