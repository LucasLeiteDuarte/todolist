import { useState } from "react";
import { Header } from "./componentes/Header";
import { Tasks } from "./componentes/Tasks";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "test",
      isCompleted: true,
    },
    {
      id: "teste1",
      title: "test1",
      isCompleted: false,
    },
  ]);

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTeskById (taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId )
    setTasks(newTasks)

  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTeskById} />
    </>
  );
}

export default App;
