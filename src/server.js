const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ status: "ok" });
});

app.listen(3333, () => console.log("server is runing"));
