const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const formRoutes = require("./routes/formRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use("/api", formRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
