import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./database";

const PORT = 4001;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
