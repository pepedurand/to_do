import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import styles from "./App.module.css";
import { TaskForm } from "./components/task-form/TaskForm";
import { TaskList } from "./components/task-list/TaskList";
import { TaskData } from "./Interfaces/Task";
import { useState } from "react";

function App() {
  const [taskList, setTasklist] = useState<TaskData[]>([]);
  return (
    <div>
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
          <TaskList taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
