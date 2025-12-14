export type Priority = 'high' | 'medium' | 'low';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
}

export type FilterType = 'all' | 'active' | 'completed';
