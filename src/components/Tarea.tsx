// definimos un tipado especial para tipar las porps que recibe el componente Tareas
type TareaProps = {
    tarea: string;
    // en este caso ya no necesitamos el index ya que aqui solo se ejecuta la funcion en el onClick,
    // al ejecutarse en el componente anterior obtiene el index y en el componente TodoApp obtiene
    // la funcion completa que debe ejecutar
    borrarTarea: () => void;
}

// tipamos las props que recibimos del componente ListaTareas
export const Tarea = ({tarea, borrarTarea}: TareaProps) => {
  return (
    <div className="task">
        <span>{tarea}</span>
        <button onClick={borrarTarea}>Borrar</button>
    </div>
  )
}