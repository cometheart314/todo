import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Priority } from '../../types/todo';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onAdd: (title: string, priority: Priority) => void;
}

export const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), priority);
      setTitle('');
      setPriority('medium');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="新しいタスクを入力..."
        className={styles.input}
        aria-label="新しいタスク"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className={styles.select}
        aria-label="優先度"
      >
        <option value="low">低</option>
        <option value="medium">中</option>
        <option value="high">高</option>
      </select>
      <button type="submit" className={styles.button}>
        追加
      </button>
    </form>
  );
};
