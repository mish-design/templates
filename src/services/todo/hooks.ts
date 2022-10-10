import { useQuery } from '@tanstack/react-query';

import { TodoService } from './service';

export const useTodos = () => {
  return useQuery(['todos list'], () => TodoService.getTodos(), {
    enabled: false,
  });
};
