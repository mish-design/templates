import axios from 'axios';

import { Todo } from './types';

export const TodoService = {
  async getTodos() {
    return (await axios.get<Todo[]>('/todos')).data;
  },
};
