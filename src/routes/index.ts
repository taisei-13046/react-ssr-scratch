import { Hono, type Context } from "hono";
import renderHtml from "./../renderer";

const getServerSideProps = async (c: Context) => {
  return { message: c.req.url };
};

export const routes = (app: Hono) => {
  app.get("/", (c) => {
    return c.text("Hello Hono!");
  });
  app.get("/test", async (c) => {
    const pageData = await getServerSideProps(c);
    const pageHtml = await renderHtml({ url: c.req.url, pageData });
    return c.html(pageHtml);
  });
  app.get("/api/test", async (c) => {
    const pageData = await getServerSideProps(c);
    return c.json(pageData);
  });
};
