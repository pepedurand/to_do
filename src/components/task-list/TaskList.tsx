import { TaskData } from "../../Interfaces/Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  taskList: TaskData[];
  handleDelete(id: number): void;
  handleEdit(task: TaskData): void;
}
export const TaskList = ({
  taskList,
  handleDelete,
  handleEdit,
}: TaskListProps) => {
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
              <i
                className="bi bi-pencil"
                onClick={() => {
                  handleEdit(task);
                }}
              ></i>
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(task.id);
                }}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Nao tem tarefas</p>
      )}
    </>
  );
};
