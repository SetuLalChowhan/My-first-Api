const express = require("express");
const app = express();

const userRouter = require("./routes/users");

const productRouter = require("./routes/products");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
