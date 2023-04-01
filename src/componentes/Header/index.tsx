import toDoLogo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle (event: ChangeEvent<HTMLInputElement>) {
    setTitle (event.target.value);
  }


  return (
    <header className={styles.header}>
      <img src={toDoLogo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={25} />
        </button>
      </form>
    </header>
  );
}
