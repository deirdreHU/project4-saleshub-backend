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
const noteRoutes = require("./modules/notes/routes");
const dealRoutes = require("./modules/deals/routes");
const dealNotesRoutes = require("./modules/deal-notes/routes");
const {setRelations} = require("./modules/relations");

async function startServer()
{
  app.use("/api/users", usersRoutes);
  app.use("/api/contacts", contactRoutes);
  app.use("/api/notes", noteRoutes);
  app.use("/api/deals", dealRoutes);
  app.use("/api/deal-notes", dealNotesRoutes);

  await setRelations();

  app.listen(PORT, () => {
    console.log(`The server set up at port: ${PORT}`);
  })
}

(async () => {
  await startServer();
})();