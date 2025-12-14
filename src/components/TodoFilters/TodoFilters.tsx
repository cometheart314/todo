import type { FilterType } from '../../types/todo';
import styles from './TodoFilters.module.css';

interface TodoFiltersProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  completedCount: number;
}

export const TodoFilters = ({
  currentFilter,
  onFilterChange,
  activeCount,
  completedCount,
}: TodoFiltersProps) => {
  return (
    <div className={styles.filters}>
      <button
        className={`${styles.filterButton} ${currentFilter === 'all' ? styles.active : ''}`}
        onClick={() => onFilterChange('all')}
      >
        すべて ({activeCount + completedCount})
      </button>
      <button
        className={`${styles.filterButton} ${currentFilter === 'active' ? styles.active : ''}`}
        onClick={() => onFilterChange('active')}
      >
        未完了 ({activeCount})
      </button>
      <button
        className={`${styles.filterButton} ${currentFilter === 'completed' ? styles.active : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        完了 ({completedCount})
      </button>
    </div>
  );
};
