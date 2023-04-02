import styles from "./tasksToDo.module.css";

import { TbTrash } from "react-icons/tb";
import { BsCircle } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { ITask } from "../../App";

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? (
          <BsFillCheckCircleFill
            className={styles.BsFillCheckCircleFill}
            size={20}
          />
        ) : (
          <BsCircle size={20} />
        )}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={26} />
      </button>
    </div>
  );
}
