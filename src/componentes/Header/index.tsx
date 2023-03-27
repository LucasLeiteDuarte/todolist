import toDoLogo from '../../assets/Logo.svg';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} />

            <form className={styles.newTaskForm}>
                <input placeholder='Adicione uma nova tarefa' />
                <button>
                    Criar
                    <AiOutlinePlusCircle size={25}/>
                </button>
            </form>
        </header>
    )
}