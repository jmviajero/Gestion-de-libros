import { FunctionComponent } from "preact";
import { Libro } from "../types.ts";

const ContactList: FunctionComponent<{ Libros: Libro[] }> = (
  { Libros },
) => {
  return (
    <div class={"lista"}>
      <h1 >Lista de libros</h1>
      <hr></hr>
        <body class={"listado"}>
        {Libros.map((libro) => (
          <li key={libro.id}>
            <span>{libro.autor}:</span>
            <a href={`/post/${libro.id}`}>{libro.titulo}</a>
          </li>
        ))}
      </body>
    </div>
  );
};

export default ContactList;