import { FreshContext, Handlers } from "$fresh/server.ts";
import AddForm from "../components/AddForm.tsx";
import SchemaModelo from "../db/Schema.ts";

import mongoose from "npm:mongoose@7.6.3"

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        titulo: form.get("titulo"),
        autor: form.get("autor"),
        descripcion: form.get("descripcion")
      };

      const a = await SchemaModelo.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": `/post/${a._id}`,
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div>
      <AddForm />
    </div>
  );
};

export default Page;