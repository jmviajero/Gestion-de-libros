import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "List" | "Add";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class={"indice"}>
      <a href="/" class={selected === "List" ? "selected" : ""}>
        Lista de Libros
      </a><br></br>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Añade un nuevo libro
      </a>
    </div>
  );
};

export default Menu;