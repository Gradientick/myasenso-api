import app from "./app.js";
import config from "./utils/config.js";

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.listen(config.PORT, () =>
  console.log(`Server started on port ${config.PORT}`)
);
