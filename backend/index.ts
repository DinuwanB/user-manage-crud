import app from "./app";
import config from "./src/config/config";
//Updated PORT Config
const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
