import styles from "./tasksToDo.module.css";
import { TbTrash } from "react-icons/tb";
import { VscCircle } from "react-icons/vsc";
import { ITask } from "../../App";

interface Props{
  task: ITask;
  onDelete:(taskId: string) => void;
}


export function Task({task, onDelete}: Props) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <VscCircle size={36} />
      </button>

      <p>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={()=>onDelete(task.id)}>
        <TbTrash size={26} />
      </button>
    </div>
  );
}
