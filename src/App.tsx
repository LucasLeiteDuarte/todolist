import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { Header } from './componentes/Header'
import { Tasks } from './componentes/Tasks'

export interface IntefaceTask {
    id: string;
    title: string;
    isCompleted: boolean;
}

function App() {
    

    return (
        <>
            <Header />
            <Tasks />
        </>


    )
}

export default App