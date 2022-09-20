/** 
 * oak  server print req.header
 * */
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();
router.all("/", (context: any) => {
    console.log("[Header-Print]", context.request.headers)
    context.response.body = "Hello world!";
}
)

app.use(router.routes());
app.use(router.allowedMethods());


await app.listen({ port: 8000 });