const app = require("./app");
require("dotenv").config();
let port = process.env.PORT;

app.listen(port, () => {
  console.log("server run success");
});
