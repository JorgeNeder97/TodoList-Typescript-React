import { Tarea } from "./Tarea";

// Definimos un tipo para tipar las props
type ListaTareasProps = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
};
// recibimos del componente TodoApp listaTareas y borrarTarea y las tipamos
export const ListaTareas = ({ listaTareas, borrarTarea }: ListaTareasProps) => {
    return (
        <div className="taskList">
            {/* Mapeamos listaTareas y enviamos al componente Tarea la funcion borrarTarea ya con su indice correspondiente */}
            {listaTareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    tarea={tarea}
                    borrarTarea={() => borrarTarea(index)}
                />
            ))}
        </div>
    );
};
