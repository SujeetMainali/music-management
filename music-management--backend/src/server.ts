import app from "./config/app.config";
import { dotenvConfig } from "./config/env.config";
import { setupDatabase } from "./enitites/entitiesSetup";
import { createServer } from "http";
function bootstrap() {
  const port = dotenvConfig.PORT;
  const httpServer = createServer(app);
  httpServer.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

setupDatabase()
  .then(() => {
    console.log("Database setup is done.");
    bootstrap();
  })
  .catch((error) => {
    console.log("Database setup failed.", error);
  });
