import React, { FormEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { TaskData } from "../../Interfaces/Task";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
  buttonText: string;
  taskList: TaskData[];
  setTaskList?: React.Dispatch<React.SetStateAction<TaskData[]>>;
}

export const TaskForm = ({
  buttonText,
  taskList,
  setTaskList,
}: TaskFormProps) => {
  const { form, onChange, cleanFields } = useForm({
    title: "",
    difficulty: "",
  });

  const addTaskHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 1000);

    const newTask: TaskData = {
      id,
      title: form.title,
      difficulty: form.difficulty,
    };

    setTaskList!([...taskList, newTask]);
    cleanFields();
    console.log(taskList);
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
