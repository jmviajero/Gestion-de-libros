import { FunctionComponent } from "preact";

const AddForm: FunctionComponent = () => {
  return (
    <form class="añadir" action="/add" method="post">
      <h1>Añade un nuevo libro</h1>
      <input type="text" name="titulo" placeholder="titulo" />
      <input type="text" name="autor" placeholder="Autor" />
      <input type="text" name="descripcion" placeholder="descripcion" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddForm;