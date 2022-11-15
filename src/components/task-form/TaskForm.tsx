import React, { FormEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { TaskData } from "../../Interfaces/Task";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
  buttonText: string;
  taskList: TaskData[];
  setTaskList?: React.Dispatch<React.SetStateAction<TaskData[]>>;
  taskToUpdate?: TaskData | undefined;
  handleUpdate?(id: number, title: string, difficulty: number): void;
}

export const TaskForm = ({
  buttonText,
  taskList,
  setTaskList,
  taskToUpdate,
  handleUpdate,
}: TaskFormProps) => {
  const { form, onChange, cleanFields } = useForm({
    title: "",
    difficulty: "",
  });

  if (taskToUpdate) {
    form.title = taskToUpdate.title;
    form.difficulty = taskToUpdate.difficulty;
  }

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    if (handleUpdate) {
      handleUpdate(
        form.title,
        form.difficulty,
        Math.floor(Math.random() * 1000)
      );
    } else {
    }
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000);

    const newTask: TaskData = {
      id,
      title: form.title,
      difficulty: form.difficulty,
    };

    setTaskList!([...taskList, newTask]);
    cleanFields();
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label>Título:</label>
        <input
          onChange={onChange}
          type="text"
          name="title"
          value={form.title}
          placeholder="Título da tarefa"
        />
      </div>
      <div className={styles.input_container}>
        <label>Dificuldade:</label>
        <input
          onChange={onChange}
          type="text"
          name="difficulty"
          value={form.difficulty}
          placeholder="Dificuldade da tarefa"
        />
      </div>
      <input type="submit" value={buttonText} />
    </form>
  );
};
