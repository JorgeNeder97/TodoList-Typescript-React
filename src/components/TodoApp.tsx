import { useState } from 'react';
import { ListaTareas } from './ListaTareas';


export const TodoApp = () => {

    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    const handleAddTask = () => {
        // usamos trim para eliminar los espacios, y si viene vacia retorna y sale de la función (no agrega una nueva tarea).
        if(nuevaTarea.trim() === "") return;
        // setListaTareas tiene guardadas las tareas del estado "listaTareas", lo que hacemos es utilizar un spread operator para agregar la nueva tarea a las anteriores.
        // el set en useState recibe un parametro para actualizar el estado o una función flecha, la cual contiene el estado actual del mismo state.
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
        // vaciamos el input para agregar una nueva tarea
        setNuevaTarea("");
    }

    const handleBorrarTarea = (index: number) => {
        // este filter devuelve todas las tareas que tengan un indice distinto al que recibimos en index
        setListaTareas(tareas => tareas.filter((_, i) => i !== index));
    }


    return (
        <div className="todoMainContainer">
            <h1>Lista de Tareas</h1>
            <div className="todoContainer">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button className="buttonAgregarTarea" onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
        </div>
    );
};
