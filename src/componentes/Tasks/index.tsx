import { TasksToDo } from '../TasksToDo'
import styles from './tasks.module.css'

export function Tasks() {
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>10</span>
                </div>

                <div>
                    <p className={styles.textP}>Concluidas</p>
                    <span>2 de 10</span>
                </div>
            </header>

            <div className={styles.list}>
                <TasksToDo />
                <TasksToDo />
            </div>
        </section>
    )
}