require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

// use middleware to enhance app
app.use(cors());
app.use(express.json())
app.use(fileUpload());


const usersRoutes = require("./modules/users/routes");
const contactRoutes = require("./modules/contacts/routes");

app.use("/api/users", usersRoutes);
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log(`The server set up at port: ${PORT}`);
})
