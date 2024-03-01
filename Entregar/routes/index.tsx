
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import ContactList from "../components/ContactList.tsx";
import SchemaModelo from "../db/Schema.ts";
import { Libro } from "../types.ts";


type Data = {
  ListaLibros: Array<Libro>;
};


export const handler: Handlers<Data> = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const Libros = await SchemaModelo.find();

    return ctx.render({ListaLibros:Libros});
  },
};

export default function Home(props: PageProps<Data>) {
  return (
    <ContactList
      Libros={props.data.ListaLibros}
    />
  );
}