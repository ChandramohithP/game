const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const formRoutes = require("./routes/formRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", formRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
