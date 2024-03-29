const express = require('express'),
cors = require('cors'),
mongoose = require("mongoose"),
app = express(),
port = process.env.PORT || 3000;

require("dotenv").config();

/* ROUTES */
/*prefix - middleware*/
app.use(cors());
app.use(express.json());
//app.use('/api', require("./routes/movies"));

app.get("/", (req,res) => {
    res.send("Bienvenida al backend de MoviesApp");
})

/*MongoDB conection*/
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error))

/*server listening mood*/
app.listen(port, () => console.log('Servidor escuchando en el puerto ', port));