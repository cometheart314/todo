import type { Todo } from '../../types/todo';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityLabels = {
  high: '高',
  medium: '中',
  low: '低',
};

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className={styles.checkbox}
        aria-label={`${todo.title}を完了としてマーク`}
      />
      <span className={`${styles.title} ${todo.completed ? styles.completed : ''}`}>
        {todo.title}
      </span>
      <span className={`${styles.priority} ${styles[`priority-${todo.priority}`]}`}>
        {priorityLabels[todo.priority]}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className={styles.deleteButton}
        aria-label={`${todo.title}を削除`}
      >
        削除
      </button>
    </div>
  );
};
