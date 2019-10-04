const express = require("express");
const expressGraphQL = require("express-graphql");
import schema from "./schema/schema";

const app = express();

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

let port: number | string = 4000;

app.listen(port, () => {
  console.log(`>>> App is running on ${port}`);
});
