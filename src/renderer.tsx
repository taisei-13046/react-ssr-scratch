import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

type Props = {
  url: string;
  pageData: unknown;
};
const createHtml = async ({ url, pageData }: Props) => {
  // Point③
  // const pageElemHtml = ReactDOMServer.renderToString(
  //   <StaticRouter location={url}>
  //     <App serverData={pageData} />
  //   </StaticRouter>,
  // );
  const pageElemHtml = `<pre>${JSON.stringify(pageData, null, 2)}</pre>`;

  // Point④
  return `
  <html>
    <head>
      <title>SSR practice</title>
    </head>
    <body>
      <div id="root" data-react='${JSON.stringify(
        pageData,
      )}'>${pageElemHtml}</div>
      <script src="/public/client.js"></script>
    </body>
  </html>`;
};
export default createHtml;
