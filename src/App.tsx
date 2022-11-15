import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import styles from "./App.module.css";
import { TaskForm } from "./components/task-form/TaskForm";
import { TaskList } from "./components/task-list/TaskList";
import { TaskData } from "./Interfaces/Task";
import { useState } from "react";
import { Modal } from "./components/modal/Modal";

function App() {
  const [taskList, setTasklist] = useState<TaskData[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<TaskData | undefined>(
    undefined
  );

  const deleteTask = (id: number) => {
    setTasklist(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: TaskData = { id, title, difficulty };
    const updatedTaskList = taskList.filter((task) => {
      return task.id === updatedTask?.id ? updateTask : task;
    });
    setTasklist(updatedTaskList);
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: TaskData): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            buttonText="Editar Tarefa"
            taskList={taskList}
            setTaskList={setTasklist}
            taskToUpdate={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Title</h2>
          <TaskForm
            buttonText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTasklist}
          />
        </div>
        <div>
          <h2>Title</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
