const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { router } = require("./routes/pdfRoutes");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/pdf", router);

app.listen(5000, () => {
  console.log("listening to port 5000");
});
