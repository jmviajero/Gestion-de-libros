import { FunctionComponent } from "preact";
import {Libro} from "../types.ts"



const MostrarLibro: FunctionComponent<Libro> = (props: Libro) => {
    const {id, titulo, autor, descripcion} = props;

    return(
        <div class={"libro"}>
            <h3>{titulo}</h3>
            <ul key={id}>
                <li>{id}</li>
                <li>{autor}</li>
                <li>{descripcion}</li>
            </ul>
        </div>
    )
}

export default MostrarLibro;