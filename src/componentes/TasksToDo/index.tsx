import styles from './tasksToDo.module.css'
import { TbTrash } from 'react-icons/tb'
import { VscCircle } from 'react-icons/vsc'

export function TasksToDo() {
    return (
        <div className={styles.taskToDo}>
            <button className={styles.checkContainer} >
                <VscCircle size={30} />
            </button>

            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </p>

            <button className={styles.deleteButton}>
                <TbTrash size={20} />
            </button>

        </div>
    )
}