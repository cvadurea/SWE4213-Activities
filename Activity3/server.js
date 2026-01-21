const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const productsRouter = require("./routes/products");
app.use("/products", productsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
