const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const fileUpload = require("express-fileupload");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "./uploads",
	})
);

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/lostPets", require("./routes/lostPetRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`.green));
