const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	origin: "http://localhost:3000"
}))


require("./config/mongoose.config");

require("./routes/teamManager.routes")(app);

app.listen(8000, () => 
console.log("You have successfully connected to port 8000"));