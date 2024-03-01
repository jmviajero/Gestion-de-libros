
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import {Libro} from "../../types.ts"
import SchemaModelo from "../../db/Schema.ts";
import MostrarLibro from "../../components/MostrarLibro.tsx";


export const handler: Handlers = {
  GET: async(_req: Request, ctx: FreshContext<unknown, Libro>) => {
    const { id } = ctx.params;

    const Libro = await SchemaModelo.findById(id);
    if(!Libro){
        return ctx.render();
    }

    const Lib: Libro = {
        id: Libro._id.toString(),
        titulo: Libro.titulo,
        autor: Libro.autor,
        descripcion: Libro.descripcion
    } 

    return ctx.render(Lib);
    
  },
};

const Page = (props: PageProps<Libro>) => {
  const libro = props.data;
  return (
    <>
        { libro &&
            <MostrarLibro 
                id={libro.id}
                titulo={libro.titulo} 
                autor={libro.autor} 
                descripcion={libro.descripcion}
            />
        }
    </>
  )
};

export default Page;



