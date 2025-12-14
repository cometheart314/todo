import { useState, useMemo } from 'react';
import { useTodos } from './hooks/useTodos';
import type { FilterType } from './types/todo';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoFilters } from './components/TodoFilters/TodoFilters';
import { TodoList } from './components/TodoList/TodoList';
import styles from './App.module.css';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos]
  );

  const completedCount = useMemo(
    () => todos.filter((todo) => todo.completed).length,
    [todos]
  );

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>TODOアプリ</h1>
        <TodoForm onAdd={addTodo} />
        <TodoFilters
          currentFilter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
        />
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
