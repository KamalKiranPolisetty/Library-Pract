// const express = require("express");
// const cors = require("cors");
// const { connectToDb } = require("./db");
// const booksRouter = require("./routes/booksRoute");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/books", booksRouter);

// connectToDb()
//   .then(() => {
//     app.listen(5000, () => {
//       console.log("Server is running on port 5000...");
//     });
//   })
//   .catch((err) => {
//     console.log("Error connecting to DataBase", err);
//   });


const express = require("express");
const cors = require("")



const app = express();
app.use(cors());