const express = require("express");
const app = express();
const PORT = 4300;
app.get("/", (req, res) => {
  res.status(200).send({ mesage: "Welocme to Docker App" });
});
app.listen(PORT, () => console.log(`App is running http://localhost:${PORT}`));
