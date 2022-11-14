import { TaskData } from "../../Interfaces/Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  taskList: TaskData[];
}
export const TaskList = ({ taskList }: TaskListProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Nao tem tarefas</p>
      )}
    </>
  );
};
